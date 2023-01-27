export const colorSchemes = 'base|neutral|primary|secondary|accent|info|success|warning|error';
export const sizeSchemes = 'xs|sm|lg|xl|2xl|3xl|4xl';
export const roundedSchemes = 'square|circle';
const base = [
    [
        'active',
        '!bg-primary !text-primary-content'
    ],
    [
        'demo-preview',
        'flex flex-wrap justify-center items-start w-full gap-2 p-3 overflow-auto bg-dotted align-start rounded-xl rounded-tl-none'
    ],
    [
        'demo-code',
        'p-3 bg-neutral text-white text-xs whitespace-pre-wrap rounded-xl rounded-tl-none'
    ],
    [
        /^pad-(.+)$/, (([, name]) => {
            const sizes = {
                xs: 'px-2 py-.2',
                sm: 'px-2 py-.5',
                md: 'px-3 py-1',
                lg: 'px-4 py-2',
                xl: 'px-4 py-2.5',
            };
            return `${sizes[name]}`;
        })
    ],
];
export default base;
