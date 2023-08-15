<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnPrism, fnRef, fnTab, fnCopy } from '$lib/directives/index.js';
</script>

<div flex flex-col gap-5>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Alert</h2>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert>
  <i i-bx-info-circle text-info ></i>
  <div>12 unread messages. Tap to see.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ info">
  <i i-bx-info-circle ></i>
  <div>New software update available.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ success">
  <i i-bx-check-circle ></i>
  <div>Your purchase has been confirmed!</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ warning">
  <i i-bx-error ></i>
  <div>Warning: Invalid email address!</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ error">
  <i i-bx-x-circle ></i>
  <div>Error! Task failed successfully.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~">
  <i i-bx-info-circle text-info></i>
  <div>
    <h3>New messages!</h3>
    <div text-xs>You have 100+ unread messages</div>
  </div>
  <div alert-action>
    <button btn="~ xs">See</button>
  </div>
</div>`} />
		</div>
	</div>
</div>
