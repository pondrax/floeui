// @unocss-include
const breadcrumb = [
	[
		'breadcrumb',
		[
			'flex whitespace-nowrap text-sm gap-5 overflow-x-auto max-w-full',
			'all-[a]-(inline-flex gap-1 cursor-pointer)',
			'all-[a:hover]-underline',
			'children-relative',
			'children-before-(content-[""] absolute w-1.5 h-1.5 top-2 left--4)',
			'children-before-(border-t border-r border-base-content:50 rotate-45)'
		].join(' '),
		{ layer: 'components breadcrumb' }
	]
];

export default breadcrumb;
