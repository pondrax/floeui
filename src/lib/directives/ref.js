// @unocss-include
/**
 * Retrieves a specific attribute value from a referenced HTML element.
 *
 * @param {HTMLElement} node - The source HTML element.
 * @param {string} target - The CSS selector to find the target HTML element.
 * @returns {string} The attribute value from the referenced HTML element.
 */
export const ref = (node, target) => {
	const ref = node?.parentNode?.querySelector(target);
	const prop = target.replace(/\[(.*)\]/g, '$1');
	// console.log(ref.getAttribute(prop))
	return ref.getAttribute(prop)
	// console.log(prop)
	// return ref?.getAttribute(prop) || '';
};

/**
 * Sets the innerHTML of an HTML element after a delay.
 *
 * @param {HTMLElement} node - The target HTML element.
 * @param {string} target - The CSS selector to find the source HTML element.
 * @returns {Object} An empty object.
 */
export default (node, target) => {
	setTimeout(() => {
		let html = ref(node, target);
		if (html){
			// html = html.replace('<script>','(script)').replace('</script>','(script)')
			node.innerHTML = html;
		}
	}, 250);
	return {};
};
