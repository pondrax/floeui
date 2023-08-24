/**
 * Creates a breadcrumb navigation and provides a destroy method to remove it.
 *
 * @param {HTMLElement} node - The HTML element where the breadcrumb will be appended.
 * @param {Object} opt - Options for configuring the breadcrumb.
 * @param {string} [opt.path='/'] - The path used for generating breadcrumb links.
 * @param {string} [opt.lang='en'] - The language code used in the breadcrumb links.
 * @returns {{ destroy: () => void }} An object with a destroy method to remove the breadcrumb.
 *
 * @unocss-include
 */
export default function (node, opt = { path: '/', lang: 'en' }) {
	const path = opt.path
			.split('/')
			.filter((u) => !['[lang]', ''].includes(u));
	const ul = document.createElement('ul');
	ul.className = 'breadcrumb';
	path.forEach((uri, i) => {
			const href =
					'/' +
					opt.path
							.replace('[lang]', opt.lang)
							.split('/')
							.slice(1, i + 3)
							.join('/');

			const li = document.createElement('li');
			li.className = 'capitalize';
			if (path.length - 1 === i) {
					li.textContent = uri.replaceAll('-', ' ');
			} else {
					const a = document.createElement('a');
					a.href = href;
					a.textContent = uri.replaceAll('-', ' ');
					li.appendChild(a);
			}
			ul.appendChild(li);
	});
	node.appendChild(ul);

	return {
			destroy() {
					node.removeChild(ul);
					// Additional cleanup or logic can be added here
			},
	};
}
