import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss'

import presetFloeui from './src/lib/floeui.js'
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno(),
    presetFloeui({
      themes: [
        "light", 
        "dark", 
        "cupcake"
      ],
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.5
    }),
  ],
})