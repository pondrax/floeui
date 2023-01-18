/// <reference types="@sveltejs/kit" />
import type { AttributifyAttributes } from 'unocss/dist/preset-attributify'

declare global {
  namespace svelte.JSX {
		// interface HTMLAttributes<T> extends AttributifyAttributes{}
    interface HTMLAttributes<T> {
			[key: string|number]: any
		}
  }
}
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Error {}
	interface Locals {}
	interface PageData {}
	interface Platform {}
}