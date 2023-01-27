const tooltip = [
    [
        'tooltip', [
            'relative flex justify-center items-center text-center bg-neutral',
            'before-( absolute content-none bg-inherit w-3  h-3  mask )',
            'after-( absolute whitespace-pre content-[attr(data-tip)] text-xs bg-inherit rounded p-1 m-2 )',
            'hover-before-( visible opacity-100 )',
            'hover-after-( visible opacity-100 )',
            'before-( invisible opacity-0 transform duration-200 )',
            'after-( invisible opacity-0 transform duration-200 )',
            'tooltip-top',
        ].join(' '), { layer: 'components tooltip' }
    ],
    [
        'tooltip-open', [
            'before-( !visible !opacity-100 )',
            'after-( !visible !opacity-100 )'
        ].join(' '), { layer: 'components tooltip' }
    ],
    [
        /tooltip-(.+)/, (([, name]) => {
            const positions = {
                top: 'bottom-full top-auto left-auto right-auto',
                bottom: 'bottom-auto top-full left-auto right-auto',
                left: 'bottom-auto top-auto left-auto right-full',
                right: 'bottom-auto top-auto left-full right-auto',
            };
            const shapes = {
                top: 'mask-triangle-2',
                bottom: 'mask-triangle',
                left: 'mask-triangle-4',
                right: 'mask-triangle-3',
            };
            return `
        before-( ${shapes[name]} ) 
        before-( ${positions[name]} ) 
        after-( ${positions[name]} )
      `;
        }), { layer: 'components tooltip' }
    ],
];
export default tooltip;
