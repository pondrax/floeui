import colorFunctions from "./theming/function.js"
import themeDefaults from "./theming/themeDefaults.js"
import themes from "./theming/themes.js"

const generated = (config) => {
  if (!config) {
    config = themeDefaults.themeOrder
  }

  const root = config.at(0)
  const dark = config.find((key) => themes[`[data-theme=${key}]`]['color-scheme'] == 'dark')
  return [
    `:root {`,
    getCSS(root),
    `}`,

    `@media (prefers-color-scheme: dark) {`,
    ` :root {`,
    getCSS(dark),
    ` }`,
    `}`,

    ...config.map(key => {
      return [
        `[data-theme=${key}] {`,
        getCSS(key),
        `}`
      ].join('\n')
    })
  ].join('\n')
}

function getCSS(selector) {
  return Object.entries(colorFunctions.convertColorFormat(themes[`[data-theme=${selector}]`]))
    .map(([prop, val]) => `  ${prop}: ${val};`)
    .join('\n')
}
export default generated
