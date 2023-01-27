import type { Shortcut } from "unocss"

const avatar: Shortcut[] = [  
  [
    'avatar', [
      'relative flex items-center justify-center',
      'mask bg-neutral text-neutral-content aspect-square',
      'children-( w-full )'
    ].join(' '), { layer: 'components avatar' }
  ],
  
];

export default avatar;
