const background = [
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
];
export default background;
