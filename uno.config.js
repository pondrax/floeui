import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerCompileClass,
	// TransformResult,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte'
import presetFloe from './src/lib/index.js';

export default defineConfig({
	extractors: [extractorSvelte()],
	shortcuts: [
		// ...shortcuts
	],
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.3
		}),
		presetAttributify(),
		presetFloe()
	],
	transformers: [
		// transformerAttributifyJsx(),
		transformerDirectives(),
		transformerVariantGroup(),
		transformerCompileClass()
	]
	// theme:themes
});
