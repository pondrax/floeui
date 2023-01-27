import rules from './rules/index.js';
import shortcuts from './shortcuts/index.js';
import theme from './themes/index.js';
export default function presetFloe() {
    return {
        name: 'floeui',
        rules,
        shortcuts,
        theme,
    };
}
