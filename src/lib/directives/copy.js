//@unocss-include

import { ref } from './ref.js';


const content = [
	`<button btn="~ xs" py-1><i i-bx-copy></i> copy</button>`,
	`<button btn="~ xs" py-1><i i-bx-copy></i> copied</button>`
];
/**
 * Creates a copy button for a given node and code.
 *
 * @param {HTMLElement} node - The node to attach the copy button to.
 * @param {string} target - The code to copy to the clipboard.
 * @returns {object} An object with update and destroy methods.
 */
export default (node, target) => {
	let html;
	const copyButton = document.createElement('div');
	copyButton.className = 'absolute right-0 top-0';
	copyButton.innerHTML = content[0];

	node.classList.add('relative');
	node.append(copyButton);

	/**
	 * Handles the click event of the copy button.
	 */
	const handleClick = () => {
		html = ref(node, target);
		copyButton.innerHTML = content[1];
		setTimeout(() => (copyButton.innerHTML = content[0]), 5000);
		navigator.clipboard.writeText(html);
	};

	copyButton.addEventListener('click', handleClick, true);

	return {
		/**
		 * Updates the HTML content to be copied.
		 *
		 * @param {string} newTarget - The new HTML content.
		 */
		update(newTarget) {
			html = ref(node, newTarget);
		},

		/**
		 * Destroys the copy button and removes event listeners.
		 */
		destroy() {
			copyButton.removeEventListener('click', handleClick, true);
		}
	};
};