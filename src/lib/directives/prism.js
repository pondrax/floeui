// @unocss-include

export default async (node, code) => {
	let highlight, languages, beautify;
	try {
		const prism = await import('prismjs');
		await import('prism-svelte')
		highlight = prism.highlight;
		languages = prism.languages;
		beautify = await import('js-beautify')
	} catch (e) {
		return {}
	}

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
