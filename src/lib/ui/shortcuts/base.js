// @unocss-include

export const colorSchemes = 'base|neutral|primary|secondary|accent|info|success|warning|error';
export const sizeSchemes = 'xs|sm|lg|xl|2xl|3xl|4xl';
export const roundedSchemes = 'square|circle';

const base = [
	['animate-rainbow','animate-_rainbow animate-infinite animate-alternate'],
	['active', '!bg-primary !text-primary-content'],
	[
		'demo-preview',
		[
			'flex flex-wrap justify-center items-start relative',
			'w-full min-h-12 gap-2 p-3 overflow-auto bg-dotted align-start rounded-xl rounded-tl-none'
		].join(' ')
	],
	[
		'demo-code',
		[
			'max-h-80 overflow-auto',
			'p-3 bg-neutral text-white text-xs whitespace-pre-wrap rounded-xl rounded-tl-none'
		].join(' ')
	],
	[
		/^pad-(.+)$/,
		([, name]) => {
			const sizes = {
				xs: 'px-2 py-.2 h-6',
				sm: 'px-2 py-.5 h-7',
				md: 'px-3 py-1 h-8',
				lg: 'px-4 py-2 h-10',
				xl: 'px-4 py-2.5 h-12'
			};
			return `${sizes[name]}`;
		}
	]
];
export default base;
