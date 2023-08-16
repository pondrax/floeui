<script context="module">
	export const heading = 'Display';
	export const action = 'fnTab';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives/index.js';
</script>

<div flex flex-col gap-5>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Tabs</h2>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tabs</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div tabs>
  <button>Item A</button>
  <button tab-active>Item B</button>
  <button>Item C</button>
  <button>Item D</button>
</div>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tabs</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div tabs="~ bordered">
  <button>Item A</button>
  <button>Item B</button>
  <button class="tab-active">Item C</button>
  <button>Item D</button>
</div>`}/>
		</div>
	</div>
</div>
