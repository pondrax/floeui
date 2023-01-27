// @unocss-include

import {
  defineConfig,
  extractorSvelte,
  presetUno,
  presetIcons,
  presetAttributify,
  transformerDirectives,
  transformerAttributifyJsx,
} from "unocss"

import presetFloe from './package/'

export default defineConfig({
  extractors: [extractorSvelte],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx()
  ],
  shortcuts: [
    {
      'active': '!bg-primary !text-primary-content'
    },
    {
      'demo-preview': 'flex flex-wrap justify-center items-start w-full gap-2 p-3 overflow-auto bg-dotted align-start rounded-xl rounded-tl-none',
      'demo-code': 'p-3 bg-neutral text-white text-xs whitespace-pre-wrap rounded-xl rounded-tl-none'
    },

    [
      'form-control', [
        'flex flex-col w-full max-w-sm gap-1',
        'children-[label]-( flex justify-between text-sm text-base-content:80  )'

      ].join(' '), { layer: 'components input' }
    ],
    [
      'input', [
        'border-1 bg-base rounded-btn text-base-content pad-md ',
        'w-full',
        'focus-( outline outline-2 outline-offset-2 outline-base-content:20 )'
      ].join(' '), { layer: 'components input' }
    ],
    [
      'checkbox', [
        'relative w-5 h-5 cursor-pointer appearance-none rounded-circle border border-base-content:20',
        'checked:(bg-neutral img-checkbox animate-pop )',
      ].join(' '), { layer: 'components input' }
    ],
    [
      'radio', [
        'w-5 h-5 cursor-pointer appearance-none rounded-circle border border-base-content:20',
        'checked:(bg-neutral img-radio animate-pop ) '
      ].join(' '), { layer: 'components radio' }
    ],
    [
      /^pad-(.+)$/, (([, name]) => {
        const sizes = {
          xs: 'px-2 py-.2',
          sm: 'px-2 py-.5',
          md: 'px-3 py-1',
          lg: 'px-4 py-2',
          xl: 'px-4 py-2.5',
        }
        return `${sizes[name]}`
      })
    ],
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.3
    }),
    presetFloe()
  ],


  // preprocess(matcher){
  //   console.log(matcher)
  //   return matcher
  // }
})

