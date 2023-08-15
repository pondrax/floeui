// @unocss-include

/**
 * Initializes a tab manager on an HTMLElement node.
 *
 * @typedef {Object} TabManagerInstance
 * @property {function} destroy - Removes event listeners and cleans up resources.
 */

/**
 * Initialize a tab manager.
 *
 * @param {HTMLElement} node - The node to apply the tab manager to.
 * @returns {TabManagerInstance} - An instance of the tab manager.
 */
export default function initTabManager(node) {
	const tabs = [...node.children];
	const styles = [];
	const div = document.createElement('div');
	div.className = 'tabs tabs-bordered';

	tabs.forEach((child) => {
		const title = child.dataset.title;
		styles.push(child.style.display);
		div.innerHTML += `<button data-title="${title}" bg-transparent>${title}</button>`;
	});

	node.prepend(div);

	/**
	 * Activates the specified tab and updates tab display.
	 *
	 * @param {number} id - Index of the tab to activate.
	 */
	function setActive(id) {
		tabs.forEach((child, i) => {
			const tabButton = div.children[i];
			if (i === id) {
				tabButton.classList.add('tab-active');
				child.style.display = styles[i];
			} else {
				tabButton.classList.remove('tab-active');
				child.style.display = 'none';
			}
		});
	}

	/**
	 * Handles click events on tabs and triggers tab switching.
	 *
	 * @param {Event} event - The click event.
	 */
	function handleClick(event) {
		if (event.target instanceof HTMLElement && div.contains(event.target)) {
			const selectedIndex = Array.from(div.children).indexOf(event.target);
			setActive(selectedIndex);
			node.dispatchEvent(new CustomEvent('selectedTab'));
		}
	}

	setActive(0);
	document.addEventListener('click', handleClick, true);

	return {
		/**
		 * Removes event listeners and cleans up resources.
		 */
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
