<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives.js';
	import { t } from '$lib/lang.js'
	
	let properties = [
		{ type: 'component', attr: 'collapse', desc: 'Container element' },
		{ type: 'component', attr: 'collapse-title', desc: 'Title element' },
		{ type: 'component', attr: 'collapse-content', desc: 'Container for content' },
		{ type: 'modifier', attr: 'collapse-arrow', desc: 'Adds arrow icon' },
		{ type: 'modifier', attr: 'collapse-plus', desc: 'Adds plus/minus icon' },
		{ type: 'modifier', attr: 'collapse-open', desc: 'Force open' },
		{ type: 'modifier', attr: 'collapse-close', desc: 'Force close' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Collapse</h2>
		<p p-3>{$t('collapse.desc')}</p>
	</div>

	<div bg-base rounded-xl p-2 mx-3>
		<div max-h-100 overflow-auto>
			<table table table-rounded w-full>
				<thead>
					<tr bg-base-b sticky top-0>
						<th w-48>
							<input input placeholder={$t('search')} />
						</th>
						<th>{$t('type')}</th>
						<th>{$t('desc')}</th>
					</tr>
				</thead>
				<tbody>
					{#each properties as { type, attr, desc }}
						<tr>
							<td>{attr}</td>
							<td>
								<span badge class:badge-primary={type == 'component'}>{type}</span>
							</td>
							<td>{desc}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
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
