// @unocss-include
export default (node, html) => {
	const content = [
		`<button btn="~ xs" py-1><i i-bx-copy></i> copy</button>`,
		`<button btn="~ xs" py-1><i i-bx-copy></i> copied</button>`
	];
	const copyButton = document.createElement('div');
	copyButton.className = 'absolute right-0 top-0';
	copyButton.innerHTML = content[0];

	node.classList.add('relative');
	node.append(copyButton);

	const handleClick = () => {
		copyButton.innerHTML = content[1];
		setTimeout(() => (copyButton.innerHTML = content[0]), 5000);
		navigator.clipboard.writeText(html);
	};
	copyButton.addEventListener('click', handleClick, true);
	return {
		update(newHTML) {
			html = newHTML;
		},
		destroy() {
			copyButton.removeEventListener('click', handleClick, true);
		}
	};
};
