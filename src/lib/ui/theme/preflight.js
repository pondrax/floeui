import fn from "./theming/function.js"
import themeDefaults from "./theming/themeDefaults.js"
import themes from "./theming/themes.js"

const generated = (config) => {
  if (!config) {
    config = themeDefaults.themeOrder
  }
  const root = config.at(0)
  // const dark = ''
  const dark = config.find((key) => themes[key]['color-scheme'] == 'dark')
  // console.log(root)
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
  // console.log(fn.convertColorFormat(themes[selector]))
  return Object.entries(fn.convertColorFormat(themes[selector]))
    .map(([prop, val]) => `  ${prop}: ${val};`)
    .join('\n')
}
const generateX = (config) => {
  // console.log(fn.injectThemes(()=>{},()=>{},themes))
  return fn.injectThemes(()=>{},()=>{},themes)
  // return ``
}
export default generated
