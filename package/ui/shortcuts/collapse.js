const collapse = [
    [
        'collapse', [
            'py-3 px-5 rounded-btn w-full',
            // 'not-[collapse-title]-bg-blue',
            'children-[:is(.collapse-title,[collapse-title])]-focus-after-mask-triangle',
            'children-[:not(.collapse-title,[collapse-title])]-focus-h-auto',
            'children-[:not(.collapse-title,[collapse-title])]-focus-py-2',
            'children-[:not(.collapse-title,[collapse-title])]-focus-overflow-auto',
            'children-[:not(.collapse-title,[collapse-title])]-(h-0 py-0 overflow-hidden duration-200)',
        ].join(' '), { layer: 'components collapse' }
    ],
    [
        'collapse-title', [
            'relative cursor-pointer font-light ',
            'after-(absolute top-0 right-0 mt-2 content-none mask mask-triangle-2 w-2 h-2 bg-neutral)'
        ].join(' '), { layer: 'components collapse' }
    ],
];
export default collapse;
