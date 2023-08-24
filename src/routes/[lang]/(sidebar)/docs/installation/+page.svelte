<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnPrism, fnRef, fnTab, fnCopy } from '$lib/directives.js';
</script>

<div flex flex-col gap-5>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Installation</h2>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Install floeUI as UnoCSS Preset</h3>

		<div
			data-title="Code"
			demo-code
			use:fnPrism={`<div alert>
  <i i-bx-info-circle text-info ></i>
  <div>12 unread messages. Tap to see.</div>
</div>`}
		/>
	</div>
</div>
