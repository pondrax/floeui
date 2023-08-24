<script context="module">
	export const heading = 'Action';
</script>

<script>
	import { fnPrism, fnTab, fnCopy, fnRef } from '$lib/directives.js';
	import { i } from '@inlang/sdk-js';

	let properties = [
		{ type: 'component', attr: 'btn', desc: 'Button' },
		{ type: 'modifier', attr: 'btn-neutral', desc: 'Button with `neutral` color' },
		{ type: 'modifier', attr: 'btn-primary', desc: 'Button with `primary` color' },
		{ type: 'modifier', attr: 'btn-secondary', desc: 'Button with `secondary` color' },
		{ type: 'modifier', attr: 'btn-accent', desc: 'Button with `accent` color' },
		{ type: 'modifier', attr: 'btn-info', desc: 'Button with `info` color' },
		{ type: 'modifier', attr: 'btn-success', desc: 'Button with `success` color' },
		{ type: 'modifier', attr: 'btn-warning', desc: 'Button with `warning` color' },
		{ type: 'modifier', attr: 'btn-error', desc: 'Button with `error` color' },
		{ type: 'modifier', attr: 'btn-ghost', desc: 'Button with ghost style' },
		{ type: 'modifier', attr: 'btn-link', desc: 'Button styled as a link' },
		{ type: 'modifier', attr: 'btn-outline', desc: 'Transparent Button with colored border' },
		{ type: 'modifier', attr: 'btn-active', desc: 'Force button to show active state' },
		{ type: 'modifier', attr: 'btn-disabled', desc: 'Force button to show disabled state' },
		{ type: 'modifier', attr: 'glass', desc: 'Button with a glass effect' },
		{ type: 'modifier', attr: 'no-animation', desc: 'Disables click animation' },
		{ type: 'responsive', attr: 'btn-lg', desc: 'Large button' },
		{ type: 'responsive', attr: 'btn-md', desc: 'Medium button (default)' },
		{ type: 'responsive', attr: 'btn-sm', desc: 'Small button' },
		{ type: 'responsive', attr: 'btn-xs', desc: 'Extra small button' },
		{ type: 'responsive', attr: 'btn-wide', desc: 'Wide button (more horizontal padding)' },
		{ type: 'responsive', attr: 'btn-block', desc: 'Full width button' },
		{ type: 'responsive', attr: 'btn-circle', desc: 'Circle button with a 1:1 ratio' },
		{ type: 'responsive', attr: 'btn-square', desc: 'Square button with a 1:1 ratio' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Button</h2>
		<p p-3>{i('button.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Brand Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn>Button</button>
<button btn="~ primary">Primary</button>
<button btn="~ secondary">Secondary</button>
<button btn="~ accent">Accent</button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## State Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn="~ info">Info</button>
<button btn="~ success">Success</button>
<button btn="~ warning">Warning</button>
<button btn="~ error">Error</button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Outline Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn="~ outline">Button</button>
<button btn="~ outline-primary">Primary</button>
<button btn="~ outline-secondary">Secondary</button>
<button btn="~ outline-accent">Accent</button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Outline State Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn="~ outline-info">Info</button>
<button btn="~ outline-success">Success</button>
<button btn="~ outline-warning">Warning</button>
<button btn="~ outline-error">Error</button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Group Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div group-x>
  <button btn>1</button>
  <button btn="~ primary">2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>
<div group-y>
  <button btn>1</button>
  <button btn>2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>`}/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Group Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div group-x-rounded>
  <button btn>1</button>
  <button btn="~ primary">2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>
<div group-y-rounded>
  <button btn>1</button>
  <button btn>2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>`}/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Buttons Link & Input</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code flex-col use:fnPrism={
`
  <a href="/docs/button" btn="~ base">link</a>
  <button btn="~ primary">button</button>
  <button btn="~ primary">button <span badge>badge</span></button>
  <input type="button" btn value="input">
<div group-x>
  <a href="/docs/button" btn="~ base">link</a>
  <button btn="~ primary">button</button>
  <input type="button" btn value="input">
</div>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Size Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn="~ xs">XS</button>
<button btn="~ sm">SM</button>
<button btn="">MD</button>
<button btn="~ lg">LG</button>
<button btn="~ xl">XL</button>
<button btn="~ 5xl">5XL</button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Icon Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn disabled><i i-bx-loader animate-spin></i> Loading</button>
<button btn="~ primary"><i i-bx-home ></i> Home</button>
<button btn="~ secondary">Plus <i i-bx-plus></i></button>
<button btn="~ accent">Pencil <i i-bx-pencil ></i></button>
<button btn="~ error">Trash <i i-bx-trash ></i></button>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Shape Buttons</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<button btn="~ square 5xl" aria-label="Cookie"><i i-bx-cookie ></i></button>
<button btn="~ circle 5xl" aria-label="Face"><i i-bx-face ></i></button>`}/>
		</div>
	</div>
</div>
