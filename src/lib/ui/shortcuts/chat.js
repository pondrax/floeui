// @unocss-include

const chat = [
  [
    'chat',
    [
      'grid grid-cols-2 gap-x-3 py-1 ',
    ].join(' '),
    { layer: 'components chat' },
  ],
  [
    'chat-image',
    'self-end row-span-2',
    { layer: 'components chat-image' },
  ],
  [
    'chat-header',
    'text-sm row-start-1',
    { layer: 'components chat-header' },
  ],
  [
    'chat-footer',
    'text-sm row-start-3',
    { layer: 'components chat-footer' },
  ],
  [
    'chat-bubble',
    [
      'rounded-box block w-fit px-4 py-2 relative ',
      'min-height: 2.75rem ',
      'min-width: 2.75rem',
    ].join(' '),
    { layer: 'components chat-bubble' },
  ],
];
// const chat = [
//   [
//     'chat',
//     [
//       'grid grid-cols-2 gap-x-3 py-1 '
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-image',
//     [
//       'self-end row-span-2'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-header',
//     [
//       'text-sm row-start-1'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-footer',
//     [
//       'text-sm row-start-3'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble',
//     [
//       'block w-fit px-4 py-2 relative max-w-[90%] bg-base'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble:before',
//     [
//       'w-3 h-3 absolute bottom-0'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-start',
//     [
//       'place-items-start grid-cols-[auto,1fr]'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-header.chat-start',
//     [
//       'col-start-2'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-footer.chat-start',
//     [
//       'col-start-2'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-image.chat-start',
//     [
//       'col-start-1'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble.chat-start',
//     [
//       'col-start-2'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble.chat-start:before',
//     [
//       'mask-image: url("data:image/svg+xml,%3csvg width=\'3\' height=\'3\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath fill=\'black\' d=\'m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3\'/%3e%3c/svg%3e");'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     '[dir="rtl"] .chat-bubble.chat-start:before',
//     [
//       'mask-image: url("data:image/svg+xml,%3csvg width=\'3\' height=\'3\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath fill=\'black\' d=\'m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0\'/%3e%3c/svg%3e");'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-end',
//     [
//       'place-items-end grid-cols-[1fr,auto]'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-header.chat-end',
//     [
//       'col-start-1'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-footer.chat-end',
//     [
//       'col-start-1'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-image.chat-end',
//     [
//       'col-start-2'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble.chat-end',
//     [
//       'col-start-1'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     'chat-bubble.chat-end:before',
//     [
//       'mask-image: url("data:image/svg+xml,%3csvg width=\'3\' height=\'3\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath fill=\'black\' d=\'m 0 3 L 1 3 L 3 3 C 2 3 0 1 0 0\'/%3e%3c/svg%3e");'
//     ].join(' '),
//     { layer: 'components chat' }
//   ],
//   [
//     '[dir="rtl"] .chat-bubble.chat-end:before',
//     [
//       'mask-image: url("data:image/svg+xml,%3csvg width=\'3\' height=\'3\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cpath fill=\'black\' d=\'m 0 3 L 3 3 L 3 0 C 3 1 1 3 0 3\'/%3e%3c/svg%3e");'
//     ].join(' '),
//     { layer: 'components chat' }
//   ]
// ];

export default chat;