import type { Preset } from 'unocss'
import rules from './rules'
import shortcuts from './shortcuts'
import theme from './themes'
// console.log(shortcuts)

export default function presetFloe(): Preset {
  return {
    name: 'floeui',
    rules,
    shortcuts,
    theme,
    // rules,
    // variants,
    // shortcuts,
  }
}