# FloeUI

💅 Extended [DaisyUI](https://daisyui.com/) plugin for [UnoCSS](https://github.com/unocss/unocss)

## Installation

```bash
# add dependency to your current setup
bun add -D floeui unocss

```

## Usage

To create a production version of your app:

```js
// unocss.config.ts|js
import {
	defineConfig,
	presetUno,
	presetIcons,
	presetAttributify,
} from 'unocss';

import presetFloe from 'floeui';

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.3
		}),
		presetFloe({
      themes: [
        "light", 
        "dark", 
        "cupcake"
      ],
    })
	]
});
```