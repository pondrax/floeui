// @unocss-include
import {
  defineConfig,
  // extractorSvelte,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerAttributifyJsx,
} from "unocss"

// @ts-ignore
import presetFloe from './package/index.js'

export default defineConfig({
  // extractors: [extractorSvelte],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx()
  ], presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.3
    }),
    presetFloe()
  ],
})

