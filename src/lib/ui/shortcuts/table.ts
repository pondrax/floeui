import type { Shortcut } from "unocss";

const table: Shortcut[] = [
  [
    'table', [
      // 'bg-blue',
      'rounded-xl',
      'all-[th]-(p-2 whitespace-nowrap uppercase font-semibold text-90% text-left)',
      'all-[td]-(p-2 relative)',
      'all-[:is([sticky])]-z-10',
      
      // rounded corners
      // 'first-all-[th]-first-all-first-all-border-red',
      'first-all-first-all-first-all-rounded-tl-xl',
      'last-all-first-all-first-all-rounded-tr-xl',
      'first-all-last-all-last-all-rounded-bl-xl',
      'last-all-last-all-last-all-rounded-br-xl',
      // hover background
      'children-all-[tr:hover]:( bg-base-b )',

    ].join(' '), { layer: 'components table' }
  ],
  [
    'table-zebra', [
      //zebra
      'children-even-children-all-bg-base-content:05',
    ].join(' '), { layer: 'components table' }
  ],
]

export default table;