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

import shortcuts from './src/lib/ui/shortcuts'

export default defineConfig({
  extractors: [extractorSvelte],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx()
  ],
  shortcuts: [
    ...shortcuts,
    {
      'demo-preview': 'flex flex-wrap justify-center items-start w-full gap-2 p-3 overflow-auto bg-dotted align-start rounded-xl rounded-tl-none',
      'demo-code': 'p-3 bg-neutral text-white text-xs whitespace-pre-wrap rounded-xl rounded-tl-none'
    },
    {
      'tab-boxed': 'btn',
      'tab-active': '!font-bold !border-base-content'
    },
    [
      'carousel', [
        'flex overflow-x-scroll snap-x snap-mandatory scroll-smooth ',
        'children-( relative flex flex-none box-content snap-start w-full )',
        'children-children-( w-full )'

      ].join(' '), { layer: 'components progress' }
    ],
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
      'progress-radial', [
        '!bg-transparent flex items-center justify-center aspect-square w-auto h-auto ',
        'before-( h-full w-full !bg-transparent bg-grad rounded-circle )'
      ].join(' '), { layer: 'components progress' }
    ],
    [
      /^progress-(\w+)$/, (([, name]) => {
        return `before:bg-${name} before:text-${name}`;
      }), { layer: 'components progress' }
    ],
    [
      'tooltip', [
        'relative flex justify-center items-center text-center bg-neutral',
        'before-( absolute content-none bg-inherit w-3  h-3  mask )',// mask mask-triangle-2 )',
        'after-( absolute whitespace-pre content-[attr(data-tip)] text-xs bg-inherit rounded p-1 m-2 )',
        'hover-before-( visible opacity-100 )',
        'hover-after-( visible opacity-100 )',
        'before-( invisible opacity-0 transform duration-200 )',
        'after-( invisible opacity-0 transform duration-200 )',
        'tooltip-top',
      ].join(' '), { layer: 'components tooltip' }
    ],
    [
      'tooltip-open', [
        'before-( !visible !opacity-100 )',
        'after-( !visible !opacity-100 )'
      ].join(' '), { layer: 'components tooltip' }
    ],
    [
      /tooltip-(.+)/, (([, name]) => {
        const positions = {
          top: 'bottom-full top-auto left-auto right-auto',
          bottom: 'bottom-auto top-full left-auto right-auto',
          left: 'bottom-auto top-auto left-auto right-full',
          right: 'bottom-auto top-auto left-full right-auto',
        }
        const shapes = {
          top: 'mask-triangle-2',
          bottom: 'mask-triangle',
          left: 'mask-triangle-4',
          right: 'mask-triangle-3',
        }
        return `
          before-( ${shapes[name]} ) 
          before-( ${positions[name]} ) 
          after-( ${positions[name]} )
        `
      }), { layer: 'components tooltip' }
    ],
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
    [
      'collapse', [
        'p-3 rounded-box w-full',
        // 'not-[collapse-title]-bg-blue',
        'children-[:is(.collapse-title,[collapse-title])]-focus-( after-mask-triangle )',
        'children-[:not(.collapse-title,[collapse-title])]-focus-( h-auto py-2 overflow-auto )',
        'children-[:not(.collapse-title,[collapse-title])]-( h-0 py-0 overflow-hidden duration-200 )',

      ].join(' '), { layer: 'components collapse' }
    ],
    [
      'collapse-group', [
        'flex flex-col w-full',
        'not-only-child-children-( rounded-none border-b-1 )',
        'first-children-rounded-t-box',
        'last-children-rounded-b-box',

      ].join(' '), { layer: 'components collapse' }
    ],
    [
      'collapse-title', [
        'relative cursor-pointer ',
        'after-( absolute top-0 right-0 mt-2 content-none mask mask-triangle-2 w-2 h-2 bg-neutral )'

      ].join(' '), { layer: 'components collapse' }
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

  rules: [
    [
      'bg-dotted', {
        'background-image': `radial-gradient(hsla(var(--bc),.1) 10%, transparent 30%), 
        radial-gradient(hsla(var(--bc),.1) 10%, transparent 30%)`,
        'background-size': '.25rem .25rem'
      }
    ],
    [
      'bg-grad', {
        '--thickness': '.5rem',
        'background': 'radial-gradient(farthest-side,currentColor 98%,#0000) top/var(--thickness) var(--thickness) no-repeat,conic-gradient(currentColor calc(var(--val) * 1%),#0000 0)',
        '-webkit-mask': 'radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)))'
        // '-webkit-mask':`
        //   radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)))
        // `
      }
    ],
    [
      'mask', {
        '-webkit-mask-size': 'contain',
        '-webkit-mask-repeat': 'no-repeat',
        // '-webkit-mask-position': 'center',
      }
    ],
    [
      /^mask-(.+)$/, ([, name]) => {
        const SHAPES = {
          'squircle': `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e")`,
          'decagon': ` url("data:image/svg+xml,%3csvg width='192' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 58.779 19.098 36.327 50v61.804l-36.327 50L96 200l-58.779-19.098-36.327-50V69.098l36.327-50z' fill-rule='evenodd'/%3e%3c/svg%3e")`,
          'diamond': `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m100 0 100 100-100 100L0 100z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'heart': `url("data:image/svg+xml,%3csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e") `,
          'hexagon': `url("data:image/svg+xml,%3csvg width='182' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M.3 65.486c0-9.196 6.687-20.063 14.211-25.078l61.86-35.946c8.36-5.016 20.899-5.016 29.258 0l61.86 35.946c8.36 5.015 14.211 15.882 14.211 25.078v71.055c0 9.196-6.687 20.063-14.211 25.079l-61.86 35.945c-8.36 4.18-20.899 4.18-29.258 0L14.51 161.62C6.151 157.44.3 145.737.3 136.54V65.486Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e") `,
          'hexagon-2': `url("data:image/svg+xml,%3csvg width='200' height='182' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M64.786 181.4c-9.196 0-20.063-6.687-25.079-14.21L3.762 105.33c-5.016-8.36-5.016-20.9 0-29.259l35.945-61.86C44.723 5.851 55.59 0 64.786 0h71.055c9.196 0 20.063 6.688 25.079 14.211l35.945 61.86c4.18 8.36 4.18 20.899 0 29.258l-35.945 61.86c-4.18 8.36-15.883 14.211-25.079 14.211H64.786Z' fill='black' fill-rule='nonzero'/%3e%3c/svg%3e") `,
          'circle': `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle fill='black' cx='100' cy='100' r='100' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'parallelogram': `url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M46.154 0H200l-46.154 153.846H0z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'parallelogram-2': `url("data:image/svg+xml,%3csvg width='200' height='154' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.846 0H0l46.154 153.846H200z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'parallelogram-3': `url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.077 47.077v153.846l153.846-46.154V.923z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'parallelogram-4': `url("data:image/svg+xml,%3csvg width='154' height='201' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M153.923 47.077v153.846L.077 154.77V.923z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'pentagon': `url("data:image/svg+xml,%3csvg width='192' height='181' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 0 95.106 69.098-36.327 111.804H37.22L.894 69.098z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'square': `url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 0h200v200H0z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'star': `url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 137.263-58.779 42.024 22.163-68.389L.894 68.481l72.476-.243L96 0l22.63 68.238 72.476.243-58.49 42.417 22.163 68.389z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'star-2': `url("data:image/svg+xml,%3csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'triangle': `url("data:image/svg+xml,%3csvg width='174' height='149' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 148.476-86.603.185L43.86 74.423 87 0l43.14 74.423 43.463 74.238z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'triangle-2': `url("data:image/svg+xml,%3csvg width='174' height='150' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m87 .738 86.603-.184-43.463 74.238L87 149.214 43.86 74.792.397.554z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'triangle-3': `url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='m149.369 87.107.185 86.603-74.239-43.463L.893 87.107l74.422-43.14L149.554.505z' fill-rule='evenodd'/%3e%3c/svg%3e") `,
          'triangle-4': `url("data:image/svg+xml,%3csvg width='150' height='174' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M.631 87.107.446.505l74.239 43.462 74.422 43.14-74.422 43.14L.446 173.71z' fill-rule='evenodd'/%3e%3c/svg%3e") `
        }
        if (SHAPES.hasOwnProperty(name)) {
          return {
            '-webkit-mask-image': SHAPES[name],
            'mask-image': SHAPES[name],
          }
        }
        return {}
      }
    ],
  ],
  theme: {
    colors: {
      primary: "hsl(var(--p))",
      primaryContent: "hsl(var(--pc))",
      secondary: "hsl(var(--s))",
      secondaryContent: "hsl(var(--sc))",
      accent: "hsl(var(--a))",
      accentContent: "hsl(var(--ac))",
      neutral: "hsl(var(--n))",
      neutralContent: "hsl(var(--nc))",
      base: "hsl(var(--b1))",
      baseA: "hsl(var(--b2))",
      baseB: "hsl(var(--b3))",
      opA: "hsl(var(--bc),.1)",
      opB: "hsl(var(--bc),.3)",
      opC: "hsl(var(--bc),.7)",
      baseContent: "hsl(var(--bc))",
      info: "hsl(var(--in))",
      infoContent: "hsl(var(--inc))",
      success: "hsl(var(--su))",
      successContent: "hsl(var(--suc))",
      warning: "hsl(var(--wa))",
      warningContent: "hsl(var(--wac))",
      error: "hsl(var(--er))",
      errorContent: "hsl(var(--erc))",
      active: "hsl(var(--p))",
    },
    borderRadius: {
      'btn': 'var(--rounded-btn)',
      'box': 'var(--rounded-box)',
      'square': '0',
      'circle': '999px'
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.3
    }),
  ],


  // preprocess(matcher){
  //   console.log(matcher)
  //   return matcher
  // }
})

