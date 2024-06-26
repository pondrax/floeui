export { reset } from './reset.js'

/** @typedef {import('unocss').ThemeExtender } */
export const theme = {
  colors: {
    base: {
      100: 'oklch(var(--b1))',
      200: 'oklch(var(--b2))',
      300: 'oklch(var(--b3))',
      content: 'oklch(var(--bc))'
    },
    primary: 'oklch(var(--p))',
    primaryContent: 'oklch(var(--pc))',
    secondary: 'oklch(var(--s))',
    secondaryContent: 'oklch(var(--sc))',
    accent: 'oklch(var(--a))',
    accentContent: 'oklch(var(--ac))',
    neutral: 'oklch(var(--n))',
    neutralContent: 'oklch(var(--nc))',
    info: 'oklch(var(--in))',
    infoContent: 'oklch(var(--inc))',
    success: 'oklch(var(--su))',
    successContent: 'oklch(var(--suc))',
    warning: 'oklch(var(--wa))',
    warningContent: 'oklch(var(--wac))',
    error: 'oklch(var(--er))',
    errorContent: 'oklch(var(--erc))',
    rainbow: 'oklch(var(--r))'
  },
  borderRadius: {
    box: 'var(--rounded-box)',
    btn: 'var(--rounded-btn)',
    badge: 'var(--rounded-badge)',
  }
}

export const rainbow = (length = 20) => {
  return {
    ':root,[data-theme]': {
      background: '#333'
    },
    ':root': {
      // '--r': '60% 0.13 300', // OKLCH Initial color
      // '--r': '200 78% 51%', // HSL Initial color
      animation: 'rainbow 15s infinite alternate'
    },
    '@keyframes rainbow': Object.fromEntries(
      Array.from({ length }, (_, i) => [
        `${Math.round(i * 100 / length)}%${i == 0 ? ',100%' : ''}`,
        { '--r': `60% 0.13 ${Math.ceil(i * 300 / length)}` }
        // { '--r': `${Math.round(i * 360 / length)} 78% 51%` }
      ])
    )
  };
};


