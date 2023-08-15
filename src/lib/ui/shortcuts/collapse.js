// @unocss-include
const collapse = [
	[
		'collapse',
		[
			'py-3 px-5 w-full relative',
			'children-[input]-(w-full !h-10 z-10 absolute top-0 left-0 opacity-0 )',
			'siblings-[:not(.collapse-title,[collapse-title])]-children-[input:checked]-( h-auto overflow-auto py-2 )',
			'children-[:not(.collapse-title,[collapse-title])]-focus-h-auto',
			'children-[:not(.collapse-title,[collapse-title])]-focus-py-2',
			'children-[:not(.collapse-title,[collapse-title])]-focus-overflow-auto',
			'children-[:not(.collapse-title,[collapse-title])]-( h-0 py-0 overflow-hidden transition-all cursor-pointer )'
		].join(' '),
		{ layer: 'components collapse' }
	],
	[
		'collapse-title',
		[
			'relative cursor-pointer font-light ',
		].join(' '),
		{ layer: 'components collapse' }
	],
	[
		'collapse-open',
		[
			'children-[:not(.collapse-title,[collapse-title])]-(h-auto py-2 overflow-auto)'
		].join(' '),
		{ layer: 'components collapse' }
	],
	
	[
		'collapse-arrow',
		[
			'children-[:is(.collapse-title,[collapse-title])]-focus-after-rotate-315',
			'children-[:is(.collapse-title,[collapse-title])]-after-(content-[""] absolute w-1.5 h-1.5 top-2 right-0)',
			'children-[:is(.collapse-title,[collapse-title])]-after-(border-t border-r border-base-content:50 rotate-135 transition-all )'
		].join(' '),
		{ layer: 'components collapse' }
	],
	
];

export default collapse;
