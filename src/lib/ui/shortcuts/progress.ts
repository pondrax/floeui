import type { UserShortcuts } from "unocss"

const progress: UserShortcuts = [ 
  [
    'progress', [
      'relative bg-base-content:20 rounded w-full h-2',

      'before-( absolute content-none h-full left-0 bg-neutral h-2 rounded )',
      'before-( w-[calc(var(--val)*1%)] )',

      'after-( absolute content-[attr(data-tip)] bottom-full right-0 px-1 z-10 )',
      'after-( bg-neutral text-neutral-content rounded text-xs )',
      'after-( invisible opacity-0 duration-200)',
      'after-hover-( visible opacity-100 )',

    ].join(' '), { layer: 'components progress' }
  ],
  [
    /^progress-(\w+)$/, (([, name]) => {
      return `before:bg-${name} before:text-${name}`;
    }), { layer: 'components progress' }
  ],
  [
    'progress-radial', [
      '!bg-transparent flex items-center justify-center aspect-square w-auto h-auto ',
      'before-( h-full w-full !bg-transparent bg-grad rounded-circle )'
    ].join(' '), { layer: 'components progress' }
  ],
];

export default progress;
