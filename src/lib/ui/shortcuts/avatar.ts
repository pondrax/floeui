import type { UserShortcuts } from "unocss"
import { colorSchemes } from "./base";

const avatar: UserShortcuts = [  
  [
    'avatar', [
      'relative flex items-center justify-center',
      'mask bg-neutral text-neutral-content aspect-square',
      'children-( w-full )'
    ].join(' '), { layer: 'components avatar' }
  ],
  
];

export default avatar;
