import type { Rule } from "unocss";

const images: Rule[] = [
  [
    'img-checkbox', {
      '--chkbg': 'var(--n)',
      '--chkfg': 'var(--nc )',
      'background-image': 'linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)'
    }
  ],
  [
    'img-radio', {
      'box-shadow': '0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset'
    }
  ],
]

export default images;