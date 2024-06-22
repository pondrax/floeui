import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from 'unocss'
import presetDaisy from './src/lib/daisy'
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetDaisy(),
    presetIcons({
      scale: 1.5
    }),
  ],
})