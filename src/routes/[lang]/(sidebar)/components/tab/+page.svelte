<script context="module">
	export const heading = 'Navigation';
	export const action = 'fnTab';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives.js';
	import { i } from '@inlang/sdk-js';
	
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Tab</h2>
		<p p-3>{i('tabs.desc')}</p>
	</div>

	<div bg-base rounded-xl p-2 mx-3>
		<div max-h-100 overflow-auto>
			<table table table-rounded w-full>
				<thead>
					<tr bg-base-b sticky top-0>
						<th w-48>
							<input input placeholder={i('search')} />
						</th>
						<th>{i('type')}</th>
						<th>{i('desc')}</th>
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
