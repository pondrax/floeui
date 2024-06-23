import daisy from 'daisyui';
import unoify from './unoify';

function presetFloeui(option) {
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

  return unoify({
    name: 'floeui',
    layer: 'floeui',
    style: styles,
    postcssPlugins: [
      {
        postcssPlugin: "repalce-variable-prefix",
        Declaration: (decl) => {
          decl.prop = decl.prop.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, "$1--un-$2");
          decl.value = decl.value.replaceAll(/(var\s*\(\s*)?--(?:tw-)+([-\w]+)?/g, "$1--un-$2");
        }
      }
    ]
  })
}

export { presetFloeui as default };