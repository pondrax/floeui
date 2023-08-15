// @unocss-include
const drawer = [
	[
		'drawer',
		[
			'relative flex h-full',
			// 'md:( flex-nowrap justify-start)',
			// 'bg-base-a shadow-lg py-3 px-6 rounded-box'
		].join(' '),
		{ layer: 'components drawer' }
	],
	[
		'drawer-content',
		[
			' w-full p-2 h-full flex flex-col',
			// 'md:( flex-nowrap justify-start)',
			// 'bg-base-a shadow-lg py-3 px-6 rounded-box'
		].join(' '),
		{ layer: 'components drawer' }
	],
	[
		'drawer-open',
		[
			'!visible !ml-0',
			// 'md:( flex-nowrap justify-start)',
			// 'bg-base-a shadow-lg py-3 px-6 rounded-box'
		].join(' '),
		{ layer: 'components drawer' }
	],
	[
		'drawer-side',
		[
			'flex flex-col min-w-72 grow-1 shrink-0 h-full z-50',
			'relative ml--1000 transition-margin',
			'overflow-y-auto overscroll-contain',
			'invisible'
			// 'md:( flex-nowrap justify-start)',
			// 'bg-base-a shadow-lg py-3 px-6 rounded-box'
		].join(' '),
		{ layer: 'components drawer' }
	],
];

export default drawer;
