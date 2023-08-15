const kbd = [
	[
		'kbd',
		[
			'inline-flex justify-center items-center pad-md',
			'border-1 border-base-content:50 rounded-btn px-3'
		].join(' '),
		{ layer: 'components keyboard' }
	],
	[
		/^kbd-(\w+)$/,
		([, name]) => {
			return `pad-${name}`;
		},
		{ layer: 'components keyboard' }
	]
];

export default kbd;
