// @unocss-include
/**
 * Initializes a modal behavior on the given HTML element.
 *
 * @param {HTMLElement} node - The target HTML element to which the modal behavior is applied.
 * @param {any} active - The initial active state of the modal.
 * @returns {Object} An object with methods for updating and destroying the modal behavior.
 */
export const fnModal = (node, active) => {
	/**
	 * Toggles the active state of the modal.
	 *
	 * @param {any} active - The new active state.
	 */
	const toggleActive = (active = false) => {
		if (active) {
			node.classList.add('modal-open');
		} else {
			node.classList.remove('modal-open');
		}
	};

	/**
	 * Handles the click event to close the modal.
	 *
	 * @param {Event} event - The click event.
	 */
	const handleClick = (event) => {
		if (event.target instanceof HTMLElement) {
			if (node === event.target) {
				node.dispatchEvent(new CustomEvent('close'));
			}
		}
	};

	/**
	 * Handles the keydown event to close the modal using the 'Escape' key.
	 *
	 * @param {KeyboardEvent} event - The keydown event.
	 */
	const handleKeydown = (event) => {
		if (event.key === 'Escape') {
			node.dispatchEvent(new CustomEvent('close'));
		}
	};

	toggleActive(active);
	node.addEventListener('mousedown', handleClick, true);
	window.addEventListener('keydown', handleKeydown, true);

	return {
		/**
		 * Updates the active state of the modal.
		 *
		 * @param {any} newActive - The new active state.
		 */
		update(newActive) {
			toggleActive(newActive);
		},
		/**
		 * Destroys the modal behavior by removing event listeners.
		 */
		destroy() {
			node.removeEventListener('mousedown', handleClick, true);
			window.removeEventListener('keydown', handleKeydown, true);
		}
	};
};

export default fnModal;
