// @unocss-include
import { sizeSchemes } from "./base.js";

const calendar = [
	[
		'calendar',
		[
			'p-2 bg-base rounded-xl text-center',
			'children-( grid grid-cols-7 )',

			// 'children-children-[:is(.calendar-title,[calendar-title])]-font-semibold',
			// 'children-children-[:not(.calendar-title,[calendar-title])]-( bg-pinkx py-1 px-2 rounded-lg )',
			// 'hover-children-children-[:not(.calendar-title,[calendar-title])]-( bg-base-content:20 text-base-content )',
			// 'all-[:where(.active,[active])]-bg-neutral',
			// 'all-[:where(.active,[active])]-text-neutral-content',
			'all-[:where(.disabled,[disabled])]-!text-base-content:20'
		].join(' '),
		{ layer: 'components calendar' }
	],
	[
		/^calendar-(.+)$/,
		([, c]) => {
			if (sizeSchemes.includes(c)) {
				console.log(c)
				return `children-children-pad-${c}`;
			}			
		}
	],
	[
		'calendar-title',
		['font-semibold', 'children-(p-1)'].join(' '),
		{ layer: 'components calendar' }
	],
	['calendar-days', ['calendar-list'].join(' '), { layer: 'components calendar' }],
	[
		'calendar-list',
		[
			'children-rounded-lg',
			'children-cursor-pointer',
			'children-(p-1 border border-transparent)',
			'hover-children-bg-base-content:20',
			// 'children-border',
			'all-[:nth-child(7n+1)]-text-error',
			'all-[:nth-child(7n+1)]-col-start-1',
			'all-[:nth-child(7n+2)]-col-start-2',
			'all-[:nth-child(7n+3)]-col-start-3',
			'all-[:nth-child(7n+4)]-col-start-4',
			'all-[:nth-child(7n+5)]-col-start-5',
			'all-[:nth-child(7n+6)]-col-start-6',
			'all-[:nth-child(7n+7)]-col-start-7',
			'all-[:nth-child(n+1):nth-child(-n+7)]-row-start-1',
			'all-[:nth-child(n+8):nth-child(-n+14)]-row-start-2',
			'all-[:nth-child(n+15):nth-child(-n+21)]-row-start-3',
			'all-[:nth-child(n+22):nth-child(-n+28)]-row-start-4',
			'all-[:nth-child(n+29):nth-child(-n+35)]-row-start-5',
			'all-[:nth-child(n+36):nth-child(-n+42)]-row-start-6'
		].join(' '),
		{ layer: 'components calendar' }
	]
];

export default calendar;
