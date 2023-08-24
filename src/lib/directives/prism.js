// @unocss-include

export default async (node, code) => {
	const {highlight, languages} =await import('prismjs');
	await import('prism-svelte')
	const beautify = await import('js-beautify')
	
	function format(html) {
		html = beautify.html(html.replace('(script)', '<script>').replace('(/script)', '</script>'));
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
