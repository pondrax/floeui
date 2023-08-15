// @unocss-include
import { highlight, languages } from 'prismjs';
import 'prism-svelte';
import beautify from 'js-beautify';

export default (node, code) => {
	function format(html) {
		html = beautify.html(html.replace('(script)','<script>').replace('(/script)','</script>'));
		node.dataset.code = html;
		node.innerHTML = highlight(html, languages['svelte'], 'svelte');
	}
	format(code);
	return {
		update(_code) {
			format(_code);
		}
	};
};
