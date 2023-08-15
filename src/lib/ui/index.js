import rules from './rules/index.js';
// import shortcuts from './shortcut/index.js'
import shortcuts from './shortcuts/index.js';
import theme from './theme/index.js';

/** @type {import { Preset } from "unocss";} */
export default function presetFloe() {
	return {
		name: 'floeui',
		rules,
		shortcuts,
		theme
	};
}
