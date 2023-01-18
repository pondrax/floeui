import type { UserShortcuts } from "unocss";

const tabs:UserShortcuts = [
  [
    'tabs', [
      'inline-flex overflow-auto',
      'children-( px-2 py-1 text-sm cursor-pointer )',
      'children-[*:hover]-( text-primary-content )'
    ].join(' '), { layer: 'components tab' }
  ],
  [
    'tabs-bordered', [
      'children-( border-b-2 border-base-content:20 )'
    ].join(' '), { layer: 'components tab' }
  ],
]

export default tabs;