// @unocss-include
/**
 * Initializes a theme selector dropdown and applies selected themes.
 *
 * @param {HTMLElement} node - The HTML element to which the theme selector will be appended.
 * @returns {object} An object with a `destroy` method to clean up event listeners.
 */
export default function initializeThemeSelector(node, theme) {
	/** @type {string[]} */
	const THEMES = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];

	const themeDiv = document.createElement('div');
	themeDiv.className = 'fixed right-6 top-7 dropdown dropdown-end';
	themeDiv.innerHTML = `
    <!-- Dropdown button -->
    <button btn="~ sm outline" bg-base>
      <i i-bx-extension></i>
      <span>Theme</span>
    </button>
    <!-- Theme options list -->
    <ul menu bg-base rounded-box shadow h-60 overflow-auto>
      ${THEMES.map(
				(name) => `<li>
        <button data-theme=${name} bg-transparent capitalize gap-1 children-rounded-xl children-min-w-2 children-h-5>
          <span mr-auto>${name}</span>
          <span bg-primary></span>
          <span bg-secondary></span>
          <span bg-accent></span>
          <span bg-neutral></span>
        </button>
      </li>`
			).join('')}
    </ul>`;

	node.append(themeDiv);

	if (localStorage.theme) {
		setTheme(localStorage.theme);
	} else {
		setTheme(theme);
	}

	/**
	 * Sets the current theme and updates the localStorage and document styles.
	 *
	 * @param {string} name - The name of the theme to set.
	 */
	function setTheme(name) {
		theme = name;
		localStorage.theme = name;
		document.querySelector('html').dataset.theme = name;
	}

	/**
	 * Handles click events on theme buttons.
	 *
	 * @param {MouseEvent} event - The click event.
	 */
	function handleClick(event) {
		const button = event.target.closest('[data-theme]');
		if (button) {
			setTheme(button.dataset.theme);
		}
	}

	themeDiv.addEventListener('click', handleClick, true);

	return {
		/**
		 * Cleans up the event listener for theme selection.
		 */
		destroy() {
			themeDiv.removeEventListener('click', handleClick, true);
		}
	};
}
