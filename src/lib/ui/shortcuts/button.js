import { colorSchemes, sizeSchemes, roundedSchemes } from './base.js';

const button = [
	[
		'btn',
		[
			'inline-flex flex-shrink-0 flex-wrap gap-2 cursor-pointer select-none items-center justify-center',
			'border-1.5 border-transparent text-center rounded-btn transition duration-200',
			'font-semibold bg-neutral text-neutral-content animate-pop pad-md',
			'active:scale-90 hover:contrast-125',
			'disabled:pointer-events-none disabled:bg-base disabled:text-neutral',
			'focus:ring focus:ring-2 focus:ring-base-content:20'
		].join(' '),
		{ layer: 'components button' }
	],
	[
		/^btn-(.+)$/,
		([, c]) => {
			if (roundedSchemes.includes(c)) {
				return `rounded-${c} p-2`;
			}
			if (sizeSchemes.includes(c)) {
				return `text-${c} pad-${c}`;
			}
			if (colorSchemes.includes(c)) {
				return `bg-${c} text-${c}-content`;
			}
			if (c.includes('outline')) {
				c = c.replace(/outline|-/g, '');
				// console.log('c',c)
				if (c && colorSchemes.includes(c)) {
					return `bg-transparent text-${c} border-${c} hover:(bg-${c} text-${c}-content border-transparent)`;
				}
				return [
					'bg-transparent text-base-content border-base-content:30',
					'hover:bg-neutral hover:text-neutral-content hover:border-transparent)'
				].join(' ');
			}
		},
		{ layer: 'components button' }
	]
];

export default button;
