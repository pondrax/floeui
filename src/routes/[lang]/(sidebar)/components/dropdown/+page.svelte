<script context="module">
	export const heading = 'Action';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives.js";
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Dropdown</h2>
		<p p-3>{$t('dropdown.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Dropdown</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown>
  <button btn m-1>Click &darr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>

  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Dropdown End</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ end">
  <button btn m-1>Click end</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Dropdown Top</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} items-end h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ top">
  <button btn m-1>Click &uarr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Dropdown left</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-30 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ left">
  <button btn m-1>Click &larr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Dropdown Right</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-30 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ right">
  <button btn m-1>Click &rarr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
</div>
