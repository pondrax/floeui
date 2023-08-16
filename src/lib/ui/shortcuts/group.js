// @unocss-include
const group = [
	[
		'group-x',
		['flex ', 'not-only-child-children-( rounded-none border-r-1 border-base-content:20 )'].join(
			' '
		),
		{ layer: 'components group' }
	],
	[
		'group-x-rounded',
		[
			'flex',
			'not-only-child-children-( rounded-none border-r-1 border-base-content:20 )',
			'first-children-rounded-l-btn',
			'last-children-rounded-r-btn'
		].join(' '),
		{ layer: 'components group' }
	],
	[
		'group-y',
		[
			'flex flex-col',
			'not-only-child-children-( rounded-none border-b-1 border-base-content:20  )'
		].join(' '),
		{ layer: 'components group' }
	],
	[
		'group-y-rounded',
		[
			'flex flex-col rounded-btn',
			'not-only-child-children-( rounded-none border-b-1 border-base-content:20  )',
			'first-children-rounded-t-btn',
			'last-children-rounded-b-btn'
		].join(' '),
		{ layer: 'components group' }
	]
];

export default group;
