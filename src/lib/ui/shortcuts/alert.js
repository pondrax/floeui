import { colorSchemes } from './base.js';

const alert = [
	[
		'alert',
		[
			'flex flex-wrap w-full items-center justify-center gap-3',
			'md:( flex-nowrap justify-start)',
			'bg-base-a shadow-lg py-3 px-6 rounded-box'
		].join(' '),
		{ layer: 'components alert' }
	],
	[
		'alert-action',
		['flex justify-center w-full md:(w-auto ml-auto)'].join(' '),
		{ layer: 'components alert' }
	],
	[
		/^alert-(.+)$/,
		([, c]) => {
			if (colorSchemes.includes(c)) {
				return `bg-${c} text-${c}-content`;
			}
		},
		{ layer: 'components alert' }
	]
];

export default alert;
