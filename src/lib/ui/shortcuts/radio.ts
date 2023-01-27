import type { Shortcut } from "unocss";

const radio: Shortcut[] = [
  [
    'radio', [
      'w-5 h-5 cursor-pointer appearance-none rounded-circle border border-base-content:20',
      'checked:(bg-neutral img-radio animate-pop ) '
    ].join(' '), { layer: 'components radio' }
  ],
];

export default radio;