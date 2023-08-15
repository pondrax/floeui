# FloeUI

💅 An adaptation of the [DaisyUI](https://daisyui.com/) Tailwind plugin for [UnoCSS](https://github.com/unocss/unocss)

## Installation

```bash
# add dependency to your current setup
pnpm install -D floeui unocss

```

## Usage

To create a production version of your app:

```js
// unocss.config.ts
import {
	defineConfig,
	presetUno,
	presetIcons,
	presetAttributify,
	transformerDirectives,
	transformerAttributifyJsx
} from 'unocss';

import presetFloe from 'floeui';

export default defineConfig({
	transformers: [transformerDirectives(), transformerAttributifyJsx()],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.3
		}),
		presetFloe()
	]
});
```

## 📁 List of components

<details>
<summary>
  show / hide
</summary>

- Actions

  - [x] Button
  - [x] Dropdown
  - [x] Modal
  - [ ] ~~Swap~~

- Data display

  - [x] Alert
  - [x] Avatar
  - [x] Badge
  - [ ] Banner
  - [x] Calendar
  - [x] Card
  - [x] Carousel
  - [ ] Chat bubble
  - [x] Collapse
  - [ ] Comment
  - [ ] ~~Countdown~~
  - [ ] Empty placeholder
  - [x] Kbd
  - [ ] Loading
  - [x] Progress & Radial
  - [ ] Stat
  - [x] Table
  - [ ] Tag
  - [ ] Timeline
  - [x] Toast
  - [x] Tooltip
  - [ ] Treeview

- Data input
  - [x] Checkbox
  - [x] Text input
  - [x] Radio
  - [x] Range
  - [x] Rating
  - [x] Select
  - [x] Textarea
  - [x] Toggle
  - [ ] Upload
- Layout

  - [ ] Artboard
  - [ ] Button group
  - [ ] Divider
  - [ ] Drawer
  - [ ] Footer
  - [ ] Hero
  - [ ] Indicator
  - [ ] Input group
  - [ ] Mask
  - [ ] Stack

- Navigation

  - [ ] Bottom Navigation
  - [ ] Breadcrumbs
  - [ ] Link
  - [x] Menu
  - [ ] Navbar
  - [ ] Pagination
  - [ ] Steps
  - [x] Tab

- Mockup
  - [ ] Browser
  - [ ] Code
  - [ ] Phone
  - [ ] Window

</details>
