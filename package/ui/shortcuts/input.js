const input = [
    [
        'form-control', [
            'flex flex-col w-full max-w-sm gap-1',
            'children-[label]-( flex justify-between text-sm text-base-content:80  )'
        ].join(' '), { layer: 'components input' }
    ],
    [
        'input', [
            'border-1 bg-base rounded-btn text-base-content pad-md ',
            'w-full',
            'focus-( outline outline-2 outline-offset-2 outline-base-content:20 )'
        ].join(' '), { layer: 'components input' }
    ],
];
export default input;
