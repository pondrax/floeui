const dropdown = [
    [
        'dropdown', [
            'relative inline-block',
            // highlight next on hover
            'last-children-hover-( visible opacity-100 )',
            'last-children-( absolute z-50 invisible opacity-0 )',
            'last-children-( transform transition duration-200 ease-in-out origin-left )',
            // highlight next on focus
            // 'focus-within-last-children-( visible )',
            'focus-last-children-( visible opacity-100 )',
            'last-sibling-focus-children-( visible opacity-100 )',
        ].join(' '), { layer: 'components dropdown' }
    ],
    [
        'dropdown-top', [
            'last-children-( origin-bottom bottom-full top-auto )',
        ].join(' '), { layer: 'components dropdown' }
    ],
    [
        'dropdown-left', [
            'last-children-( origin-bottom top-0 right-full bottom-auto )',
        ].join(' '), { layer: 'components dropdown' }
    ],
    [
        'dropdown-right', [
            'last-children-( origin-bottom top-0 left-full bottom-auto )',
        ].join(' '), { layer: 'components dropdown' }
    ],
    [
        'dropdown-end', [
            'last-children-( origin-bottom right-0 )',
        ].join(' '), { layer: 'components dropdown' }
    ],
];
export default dropdown;
