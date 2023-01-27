import type { Shortcut } from "unocss"

const carousel: Shortcut[] = [ 
  [
    'carousel', [
      'flex overflow-x-scroll snap-x snap-mandatory scroll-smooth ',
      'children-( relative flex flex-none box-content snap-start w-full )',
      'children-children-( w-full )'

    ].join(' '), { layer: 'components carousel' }
  ],
];

export default carousel;
