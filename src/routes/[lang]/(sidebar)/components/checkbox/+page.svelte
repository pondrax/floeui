<script context="module">
	export const heading = 'Input';
</script>

<script>
  import { fnPrism, fnRef, fnTab, fnCopy } from "$lib/directives.js";
  import { t } from '$lib/lang.js'
	
	let properties = [
  { type:'component', attr: 'form-control', desc: 'Container element' },
  { type:'component', attr: 'checkbox', desc: 'For checkbox' },
  { type:'modifier', attr: 'checkbox-primary', desc: 'Adds `primary` to checkbox' },
  { type:'modifier', attr: 'checkbox-secondary', desc: 'Adds `secondary` to checkbox' },
  { type:'modifier', attr: 'checkbox-accent', desc: 'Adds `accent` to checkbox' },
  { type:'modifier', attr: 'checkbox-success', desc: 'Adds `success` to checkbox' },
  { type:'modifier', attr: 'checkbox-warning', desc: 'Adds `warning` to checkbox' },
  { type:'modifier', attr: 'checkbox-info', desc: 'Adds `info` to checkbox' },
  { type:'modifier', attr: 'checkbox-error', desc: 'Adds `error` to checkbox' },
  { type:'responsive', attr: 'checkbox-lg', desc: 'Large checkbox' },
  { type:'responsive', attr: 'checkbox-md', desc: 'Medium checkbox (default)' },
  { type:'responsive', attr: 'checkbox-sm', desc: 'Small checkbox' },
  { type:'responsive', attr: 'checkbox-xs', desc: 'Extra small checkbox' },
];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Checkbox</h2>
		<p p-3>{$t('checkbox.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Checkbox</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<input type="checkbox" checkbox checked/> 
<input type="checkbox" checkbox checked checked:bg-primary/> 
<input type="checkbox" checkbox checked:bg-secondary/> 
<input type="checkbox" checkbox checked:bg-secondary/> 
`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Checkbox</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview flex-col use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <label>
    <span>Checkbox A</span>
    <input type="checkbox" checkbox checked/> 
  </label>
</div>
<div form-control>
  <label>
    <span>Checkbox B</span>
    <input type="checkbox" checkbox/> 
  </label>
</div>
`} />
    </div>
  </div>

</div>
