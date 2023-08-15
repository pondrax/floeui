<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives/index.js';
</script>

<div flex flex-col gap-5>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Collapse</h2>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Collapse</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div tabindex="0" collapse bg-base>
					<input type="checkbox" />
					<div collapse-title>Title</div>
					<div>
						<p>
							Collapse content using checkbox to prevent lose focus
							<a href="#link">link</a>
							<button>Do i lose focus</button>
						</p>
					</div>
				</div>
			</div>
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div tabindex="0" collapse bg-base>
  <div collapse-title>
    Title
  </div>
  <div>
    <p>Collapse content <a href="#link" on:mousedown|preventDefault={function(){this.click()}}>link</a></p>
  </div>
</div>`}
      />
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Collapse Arrow</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div tabindex="0" collapse collapse-arrow bg-base>
  <div collapse-title>
    Title
  </div>
  <div>
    <p>Collapse content</p>
  </div>
</div>`}
      />
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Collapse Rounded</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div tabindex="0" collapse collapse-arrow bg-base rounded-xl>
  <div collapse-title>
    Title
  </div>
  <div>
    <p>Collapse content</p>
  </div>
</div>`}
      />
		</div>
	</div>
</div>
