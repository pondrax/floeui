import daisy from 'daisyui';
import unoify from './unoify/index.js';
import autoprefixer from 'autoprefixer';

function presetDaisyui(option) {
  option = option ?? {};
  const styles = [];
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

  return {
    ...unoify({
      style: styles,
      layer: "floe",
      postcssPlugins: [
        autoprefixer(),
        {
          postcssPlugin: "replace-variable-prefix",
          Declaration: (decl) => {
            decl.prop = decl.prop.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, "$1--un-$2");
            decl.value = decl.value.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, "$1--un-$2");
          }
        }
      ]
    }),
    name: "daisyui",
    theme: daisy.config?.theme?.extend
  };
}

export { presetDaisyui as default };