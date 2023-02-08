import type { Shortcut } from "unocss";

const table: Shortcut[] = [
  [
    'table', [
      'rounded-xl',
      'all-[th]-(p-2 whitespace-nowrap uppercase font-semibold text-90% text-left)',
      'all-[td]-(p-2 relative)',
      'all-[:is([sticky])]-z-10',
      
      // rounded corners
      'first-all-[:where(th,td)]-all-[:where(*:first-child)]-all-[:where(*:first-child)]-rounded-tl-xl',
      'last-all-[:where(th,td)]-all-[:where(*:first-child)]-all-[:where(*:first-child)]-rounded-tr-xl',
      'first-all-[:where(th,td)]-all-[:where(*:last-child)]-all-[:where(*:last-child)]-rounded-bl-xl',
      'last-all-[:where(th,td)]-all-[:where(*:last-child)]-all-[:where(*:last-child)]-rounded-br-xl',
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