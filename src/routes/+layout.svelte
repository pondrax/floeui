<script>
	import { fnTheme } from '$lib/directives/index.js';
  import '$lib/ui/styles/index.css'
  import 'uno.css'
</script>

<svelte:head>
  <title>FloeUI</title>
</svelte:head>

<div use:fnTheme>
  <slot/>
</div>