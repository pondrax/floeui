import type { Shortcut } from "unocss"

const menu: Shortcut[] = [
  [
    'menu', [
      // current
      'flex flex-col p-2 overflow-auto font-light',
      // children
      'empty-children-(border-op-a border-b-1 m-2)',
      //grandchildren
      'children-children-(flex w-full rounded-box px-4 py-1.5)',
      'children-hover-children-(bg-base-content:20)',
      // 'children-children-[*:active]-(bg-active)',
    ].join(' '), { layer: 'components menu' }
  ], [
    'menu-title', [
      //current
      'px-4 py-1',
      //children
      'children-hover-(!bg-transparent)'
    ].join(' '), { layer: 'components menu' }
  ], [
    'menu-heading', [
      //current
      'px-4 py-1 text-xs font-semibold sticky -top-2 bg-inherit',
      //children
      'children-hover-(!bg-transparent)'
    ].join(' '), { layer: 'components menu' }
  ],
];

export default menu;