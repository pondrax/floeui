import type { UserShortcuts } from "unocss"

const card: UserShortcuts = [  
  [
    'card', [
      'flex flex-col shadow-lg  bg-base rounded-box overflow-hidden',
      'children-[div]-( px-6 py-3 )'
    ].join(' '), { layer: 'components card' }
  ],
];

export default card;
