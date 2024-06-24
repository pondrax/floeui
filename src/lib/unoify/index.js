import { toArray, isString, isObject, toEscapedSelector } from 'unocss';
import postcss from 'postcss';
import parser from 'postcss-js';
import _selectorParser from 'postcss-selector-parser';
import conflicts from './conflicts.js';

function entriesToCss(arr) {
  if (!arr)
    return '';
  if (isString(arr))
    return arr;
  return arr
    .filter(([k, v], idx) => {
      for (let i = idx - 1; i >= 0; i--) {
        if (arr[i]?.[0] === k && arr[i]?.[1] === v)
          return false;
      }
      return true;
    })
    .map(([key, value]) => value != null ? `${key}:${value};` : undefined)
    .filter(Boolean)
    .join('');
}

function parseStyles(styles, postcssPlugins = []) {
  return toArray(styles).flatMap(style =>
    isObject(style) && !['root', 'document'].includes(style.type)
      ? postcss(toArray(postcssPlugins)).process(style, { parser }).root.nodes
      : postcss(toArray(postcssPlugins)).process(style).root.nodes,
  );
}
function formatSelector(selector) {
  return selector.trim().replaceAll('_', '\\_').replaceAll('\"', '\'').split(/\s/).filter(Boolean).join('_');
}

const selectorParser = _selectorParser((selector) => {
  selector.walk((node) => {
    if (node.value === ':not')
      node.remove();
  });
  const candidates = [];
  const selectorNodes = selector.nodes[0].nodes;
  for (const selectorNode of selectorNodes) {
    if (selectorNode.type === 'class')
      candidates.push(selectorNode.value);
    if (selectorNode.type === 'pseudo' && selectorNode.nodes && selectorNode.nodes.length) {
      selectorNode.walkClasses((classNode) => {
        candidates.push(classNode.value);
      });
    }
  }
  return candidates;
});

function extractCandidates(selector) {
  return selectorParser.transformSync(selector);
}

function parseRule(rule) {
  if (rule.type === 'rule') {
    return rule.selectors.map((selector) => {
      const candidates = extractCandidates(selector).map((candidate) => {
        if (conflicts.some(conflict => candidate.startsWith(conflict))) {
          selector = selector.replaceAll(`.${candidate}`, `._${candidate}`);
          return `_${candidate}`;
        }
        return candidate;
      });
      return [candidates, selector, rule.nodes.map(decl => [decl.prop, decl.value]), []];
    });
  } else if (rule.type === 'atrule' && ['supports', 'media'].includes(rule.name)) {
    const parent = [rule.name.trim(), rule.params.trim()];
    return rule.nodes.flatMap(parseRule).map((parsedRule) => {
      parsedRule[3]?.push(parent);
      return parsedRule;
    });
  } else {
    return [[[], '', String(rule), []]];
  }
}

const presetComponent = (option = {}) => {
  const {
    style,
    layer = 'default',
    plugins = []
  } = option;

  const rules = [];
  const shortcuts = new Map();
  const preflights = [];
  
  parseStyles(style, [].concat(plugins))
    .flatMap(parseRule)
    .forEach(([candidates, selector, cssbody, parents]) => {
      if (!candidates.length) {
        const csstext = (parents.length ? `${parents.reverse().map(([name, params]) => `@${name}  ${(params)} `).join('{')}{` : '')
          + (selector ? `${selector}{` : '')
          + entriesToCss(cssbody)
          + (selector ? '}' : '')
          + '}'.repeat(parents.length)

        preflights.push({
          getCSS: () => csstext,
          layer,
        });
      }
      const ruleName = Math.random().toString(16).slice(2);
      rules.push([
        ruleName,
        cssbody,
        {
          layer,
          internal: true,
          noMerge: selector.includes('::-'),
        },
      ]);

      candidates.forEach((candidate) => {
        const shortcutProps = shortcuts.get(candidate) ?? [];
        shortcutProps.push(`${parents.length ? `${parents.reverse().map(([name, params]) => `[@${name}${formatSelector(params)}]`).join(':')}:` : ''}selector-[${formatSelector(selector)}]:${ruleName}`);
        shortcuts.set(candidate, shortcutProps);
      });
    })
    const theme = {
      colors: {
        primary: 'oklch(var(--p))',
        primaryContent: 'oklch(var(--pc))',
        secondary: 'oklch(var(--s))',
        secondaryContent: 'oklch(var(--sc))',
        accent: 'oklch(var(--a))',
        accentContent: 'oklch(var(--ac))',
        neutral: 'oklch(var(--n))',
        neutralContent: 'oklch(var(--nc))',
        base: 'oklch(var(--b1))',
        baseA: 'oklch(var(--b2))',
        baseB: 'oklch(var(--b3))',
        opA: 'oklch(var(--bc),.1)',
        opB: 'oklch(var(--bc),.3)',
        opC: 'oklch(var(--bc),.7)',
        baseContent: 'oklch(var(--bc))',
        info: 'oklch(var(--in))',
        infoContent: 'oklch(var(--inc))',
        success: 'oklch(var(--su))',
        successContent: 'oklch(var(--suc))',
        warning: 'oklch(var(--wa))',
        warningContent: 'oklch(var(--wac))',
        error: 'oklch(var(--er))',
        errorContent: 'oklch(var(--erc))',
        active: 'var(--r)',
        rainbow: 'var(--r)'
      }

    }
  return {
    preflights,
    rules,
    shortcuts: [...shortcuts]
      .map(([shortcutName, shortcutProps]) => [
        new RegExp(`^${shortcutName}$`),
        (_, { rawSelector, currentSelector, variants }) => {
          if (rawSelector === currentSelector) {
            return shortcutProps;
          } else {
            return shortcutProps.map(prop => {
              prop = prop.replaceAll(currentSelector, rawSelector)
                .replace(/-\[\.\[(.*?)\]\]/g, '-[[$1]]') // Fix attributify 
              if (shortcutName.includes('alert')) {
                console.log((prop), rawSelector, currentSelector, shortcutName)
              }
              return prop
            })
          }
        },
        // (_, { rawSelector, currentSelector }) => {
        //   if (rawSelector === currentSelector)
        //     return shortcutProps;
        //   else {
        //     return shortcutProps.map(prop => {
        //       return prop
        //       const shortcutNameRe = new RegExp(`(\\.${shortcutName.replaceAll('_', String.raw`\\_`)})(?![-\\w])?`, 'g')
        //       const result = prop
        //         .replaceAll(shortcutNameRe, utils.escapeSelector(formatSelector(rawSelector)))
        //         // .replace(/\[(\w+)=''\]-(\w+)/g, "[$1-$2='']")
        //       return result;
        //     });
        //   }
        // },
        { layer },
      ]),
  }
}

export { presetComponent as default }