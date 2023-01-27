const modal = [
    [
        'modal', [
            'fixed top-0 bottom-0 left-0 right-0 cursor-pointer bg-op-c flex justify-center items-center p-6 z-50 overflow-auto',
            'invisible opacity-0 transition duration-200',
            'children-[*]-( animate-pop relative cursor-default w-sm bg-base rounded-box p-6 )'
        ].join(' '), { layer: 'components modal' }
    ],
    [
        'modal-open', [
            'pointer-events-initial !visible !opacity-100'
        ].join(' '), { layer: 'components modal' }
    ],
    [
        'modal-close', [
            'btn btn-sm btn-base absolute top-2 right-4'
        ].join(' '), { layer: 'components modal' }
    ],
];
export default modal;
