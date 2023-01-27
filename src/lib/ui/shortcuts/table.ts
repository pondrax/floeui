import type { Shortcut } from "unocss";

const table: Shortcut[] = [
  [
    'table', [
      // 'bg-blue',
      'rounded-xl',
      'all-[th]-( p-2 whitespace-nowrap uppercase font-semibold text-90% )',
      'all-[td]-( p-2 )',

      // rounded corners
      'first-all-first-all-first-all-rounded-tl-xl',
      'last-all-first-all-first-all-rounded-tr-xl',
      'first-all-last-all-last-all-rounded-bl-xl',
      'last-all-last-all-last-all-rounded-br-xl',

      //zebra
      'children-even-children-all-bg-base-content:10',
      // hover background
      'children-all-[tr:hover]:( bg-base-content:20 )',

    ].join(' '), { layer: 'components table' }
  ],
]

export default table;