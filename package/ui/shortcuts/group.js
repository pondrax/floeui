const group = [
    [
        'group-x', [
            'flex rounded-btn',
            'not-only-child-children-( rounded-none border-r-1 border-base-content:20 )',
            'first-children-rounded-l-btn',
            'last-children-rounded-r-btn',
        ].join(' '), { layer: 'components group' }
    ],
    [
        'group-y', [
            'flex flex-col rounded-btn',
            'not-only-child-children-( rounded-none border-b-1 border-base-content:20  )',
            'first-children-rounded-t-btn',
            'last-children-rounded-b-btn',
        ].join(' '), { layer: 'components group' }
    ],
];
export default group;
