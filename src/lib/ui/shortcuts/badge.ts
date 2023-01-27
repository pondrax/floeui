import type { Shortcut } from "unocss"
import { colorSchemes } from "./base.js";

const badge: Shortcut[] = [  
  [
    'badge', [
      'inline-flex gap-1 text-xs px-1.5 py-.2 min-w-4 min-h-4 bg-neutral text-neutral-content font-light rounded-btn'
    ].join(' '), { layer: 'components avatar' }
  ],
  [
    /^badge-(.+)$/, ([, c]) => {
      if (colorSchemes.includes(c)) {
        return `bg-${c} text-${c}-content`
      }
    }, { layer: 'components badge' }
  ],
];

export default badge;
