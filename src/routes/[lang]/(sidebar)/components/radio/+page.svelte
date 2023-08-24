<script context="module">
	export const heading = 'Input';
</script>

<script>
  import { fnPrism, fnRef, fnTab, fnCopy } from "$lib/directives.js";
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Radio</h2>
		<p p-3>{i('radio.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Radio</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<input radio type="radio" name="radio-1" placeholder="Basic Input" checked/> 
<input radio checked:bg-primary type="radio" name="radio-1" placeholder="Basic Input"/> 
<input radio checked:bg-secondary type="radio" name="radio-1" placeholder="Basic Input"/> 
<input radio checked:bg-accent type="radio" name="radio-1" placeholder="Basic Input"/> 
`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Radio</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview flex-col use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <label>
    <span>Radio A</span>
    <input radio type="radio" name="radio-2" placeholder="Basic Input" checked/> 
  </label>
</div>
<div form-control>
  <label>
    <span>Radio B</span>
    <input radio type="radio" name="radio-2" placeholder="Basic Input"/> 
  </label>
</div>
`} />
    </div>
  </div>

</div>
