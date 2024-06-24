import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss'

import presetFloeui from './src/lib/index.js'
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
      darkMode: ['class', '[data-theme="dark"]']
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
})