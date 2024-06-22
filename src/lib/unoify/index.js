import postcss from 'postcss';
import { parse as cssInJsParser } from 'postcss-js';
import _selectorParser from 'postcss-selector-parser';
import { entriesToCss, isPlainObject, mergeDeep, randomString, toArray, toEscapedSelector } from './utils.js';
import conflicts from './conflicts.js';

// export * from './type';

function parseStyles(styles, postcssPlugins = []) {
  return toArray(styles).flatMap(style =>
    isPlainObject(style) && !['root', 'document'].includes(style.type)
      ? postcss(toArray(postcssPlugins)).process(style, { parser: cssInJsParser }).root.nodes
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

function genComponentPreset(option) {
  const {
    style,
    layer = 'default',
    postcssPlugins,
  } = option;
  const rules = [];
  const shortcuts = new Map();
  const preflights = [];
  parseStyles(style, postcssPlugins ?? [])
    .flatMap(parseRule)
    .forEach(([candidates, selector, cssbody, parents]) => {
      if (!candidates.length) {
        preflights.push({
          getCSS: () =>
            (parents.length ? `${parents.reverse().map(([name, params]) => `@${name} ${(params)}`).join('{')}{` : '')
            + (selector ? `${selector}{` : '')
            + entriesToCss(cssbody)
            + (selector ? '}' : '')
            + '}'.repeat(parents.length),
          layer,
        });
      }
      const ruleName = randomString();
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
    });
  return {
    rules,
    // shortcuts: [...shortcuts]
    //   .map(([shortcutName, shortcutProps]) => [
    //     new RegExp(`^${shortcutName}$`),
    //     (_, { rawSelector, currentSelector }) => {
    //       if (rawSelector === currentSelector) {
    //         return shortcutProps;
    //       } else {
    //         const classRegex = new RegExp(`(\\.${shortcutName.replaceAll('_', String.raw`\\_`)})(?![-\\w])?`, 'g');
    //         const attributeRegex = new RegExp(`(\\[${shortcutName.replaceAll('_', String.raw`\\_`)}\\])`, 'g');

    //         return shortcutProps.map(prop => {
    //           // Replace class selectors
    //           let updatedProp = prop.replaceAll(classRegex, toEscapedSelector(formatSelector(rawSelector)));
    //           // Replace attribute selectors
    //           updatedProp = updatedProp.replaceAll(attributeRegex, toEscapedSelector(formatSelector(rawSelector)));
    //           return updatedProp;
    //         });
    //       }
    //     },
    //     { layer },
    //   ]),

    shortcuts: [...shortcuts]
      .map(([shortcutName, shortcutProps]) => [
        new RegExp(`^${shortcutName}$`),
        (_, { rawSelector, currentSelector }) => {
          if (rawSelector === currentSelector)
            return shortcutProps;
          else {
            return shortcutProps.map(prop => {
              console.log(prop)
              const res = prop.replaceAll(new RegExp(`(\\.${shortcutName.replaceAll('_', String.raw`\\_`)})(?![-\\w])?`, 'g'), (formatSelector(rawSelector)))
              return res;
            });
          }
        },
        { layer },
      ]),
    // shortcuts: [...shortcuts]
    //   .map(([shortcutName, shortcutProps]) => [
    //     new RegExp(`^${shortcutName}$`),
    //     (_, { rawSelector, currentSelector }) => {
    //       console.log(`rawSelector: ${rawSelector}, currentSelector: ${currentSelector}`);

    //       if (rawSelector === currentSelector) {
    //         console.log(`Returning shortcutProps for ${rawSelector}`);
    //         return shortcutProps;
    //       } else {
    //         const classRegex = new RegExp(`(\\.${shortcutName.replaceAll('_', String.raw`\\_`)})(?![-\\w])?`, 'g');
    //         const attributeRegex = new RegExp(`(\\[${shortcutName.replaceAll('_', String.raw`\\_`)}\\])`, 'g');

    //         return shortcutProps.map(prop => {
    //           // Replace class selectors
    //           // let updatedProp = prop.replaceAll(classRegex, toEscapedSelector(formatSelector(rawSelector)));
    //           // Replace attribute selectors
    //           let updatedProp = prop.replaceAll(new RegExp(`(\\.${shortcutName.replaceAll('_', String.raw`\\_`)})(?![-\\w])?`, 'g'), toEscapedSelector(formatSelector(rawSelector)))
    //           console.log(prop)
    //           console.log(`Updated prop: ${updatedProp}`);
    //           return updatedProp;
    //         });
    //       }
    //     },
    //     { layer },
    //   ]),

    preflights,
  };
}

export default function presetComponent(options) {
  return {
    name: 'unocss-preset-component',
    ...toArray(options).map(genComponentPreset)
      .reduce((prev, curr) => (mergeDeep(prev, curr, true)), {}),
  };
}
