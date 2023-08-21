import rules from './rules/index.js';
import shortcuts from './shortcuts/index.js';
import theme from './theme/index.js';
import preflight from './theme/preflight.js'

/** @type {import { Preset } from "unocss";} */
export default function presetFloe(config) {
	return {
		name: 'floeui',
		rules,
		shortcuts,
		theme,
		preflights: [
			{
				getCSS: () => preflight(config?.themes)
			}
		]
	};
}
