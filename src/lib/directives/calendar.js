// @unocss-include

/**
 * Initialize a calendar component.
 *
 * @param {HTMLElement} node - The HTML element to which the calendar will be attached.
 * @param {object} opt - Options for configuring the calendar.
 * @param {Date} opt.current - The current date for the calendar.
 * @param {string} opt.locale - The locale for displaying the calendar.
 * @returns {object} An object with `update` and `destroy` methods for managing the calendar.
 */
export default async function initializeCalendar(node, opt = { current: new Date(), locale: 'en' }) {
	// Import required modules
	const dayjs = (await import('dayjs')).default;
	const localeData = (await import('dayjs/plugin/localeData')).default;
	const isSameOrBefore = (await import('dayjs/plugin/isSameOrBefore')).default;
	dayjs.extend(localeData).extend(isSameOrBefore);

	// Create the necessary elements
	const container = document.createElement('div');
	const toolbar = document.createElement('ul');
	const info = document.createElement('li');
	const prev = document.createElement('li');
	const next = document.createElement('li');
	const heading = document.createElement('ul');
	const days = document.createElement('ul');

	// Set class names for styling
	container.className = 'calendar';
	toolbar.className = 'calendar-title';
	info.className = 'col-span-5';
	prev.innerHTML = '<button btn><</button>';
	next.innerHTML = '<button btn>></button>';
	heading.className = 'calendar-title';
	days.className = 'calendar-days';

	// Append elements to their respective parents
	container.append(toolbar, heading, days);
	toolbar.append(info, prev, next);
	node.append(container);

	// Initialize current date using Day.js
	let current = dayjs(opt.current);

	// Generate weekdays and days content
	generateWeekdays();
	generateDays();

	// Attach event listeners
	days.addEventListener('click', handleClick, true);
	prev.addEventListener('click', () => handleButtonClick(-1), true);
	next.addEventListener('click', () => handleButtonClick(1), true);

	// Handle moving to previous or next day
	function handleButtonClick(direction) {
		current = current.add(direction, 'day');
		generateDays();
	}

	// Handle clicking on a specific day
	function handleClick(event) {
		const targetDay = event.target.dataset?.value;
		if (targetDay) {
			current = dayjs(targetDay);
			generateDays();
		}
	}

	// Generate weekday labels
	function generateWeekdays() {
		const weekdaysShort = dayjs.weekdaysShort();
		weekdaysShort.forEach(name => {
			const weekday = document.createElement('li');
			weekday.textContent = name;
			heading.append(weekday);
		});
	}

	// Generate the day elements for the current month
	function generateDays() {
		info.textContent = current.format('YYYY-MM-DD');
		const currentEl = days.querySelector(`[data-value="${info.textContent}"]`);

		// Check whether current date is exist and within current month
		if (currentEl && !currentEl.classList.contains('disabled')) {
			days.querySelector('.active')?.classList.remove('active');
			currentEl.classList.add('active');
			return;
		}

		// Reset and generate days container
		days.textContent = '';
		const currentMonth = current.startOf('month');
		const startDay = currentMonth.startOf('week');
		const endDay = currentMonth.endOf('month').endOf('week');
		let currentDay = startDay;

		while (currentDay.isSameOrBefore(endDay, 'day')) {
			const isCurrentMonth = currentDay.isSame(currentMonth, 'month');
			const day = document.createElement('li');
			day.textContent = currentDay.date();

			if (currentDay.isSame(current, 'day')) {
				day.classList.add('active');
			}
			if (!isCurrentMonth) {
				day.classList.add('disabled');
			}
			day.dataset.value = currentDay.format('YYYY-MM-DD');
			currentDay = currentDay.add(1, 'day');
			days.append(day);
		}
	}

	// Return methods for updating and destroying the calendar
	return {
		update(opt = { current: new Date(), locale: 'en' }) {
			current = opt.current;
			generateDays();
		},
		destroy() {
			days.removeEventListener('click', handleClick, true);
			prev.removeEventListener('click', () => handleButtonClick(-1), true);
			next.removeEventListener('click', () => handleButtonClick(1), true);
		},
	};
}
