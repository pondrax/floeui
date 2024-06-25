import daisy from 'daisyui';
import unoify from './unoify';
import { rainbow, theme } from './floe/base.js';
// import pkg from './package.json';


function presetFloeui(option) {
  option = option ?? {};
  option.logs = false;
  const styles = []

  daisy.handler({
    addBase: (style) => {
      styles.push(style);
    },
    addComponents: (style) => {
      styles.push(style);
    },
    config: (path, defaultValue) => {
      return path.slice("daisyui.".length).split(".").reduce((_, curr) => {
        return option?.[curr] ?? defaultValue;
      }, defaultValue);
    }
  });
  styles.push(rainbow());
  
  console.log(`\n💅 FloeUI \n`)

  return {
    ...unoify({
      name: 'floeui',
      layer: '--floeui--',
      style: styles,
      plugins: [
        {
          postcssPlugin: 'replace-variable-prefix',
          Declaration: (decl) => {
            decl.prop = decl.prop.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, '$1--un-$2')
            decl.value = decl.value.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, '$1--un-$2')
          },
        }
      ],
    }),
    theme
  }
}

export { presetFloeui as default };