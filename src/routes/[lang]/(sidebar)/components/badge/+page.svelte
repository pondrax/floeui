<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism,fnRef, fnTab } from "$lib/directives/index.js";
  import { i } from '@inlang/sdk-js';
	
	let properties = [
  { type:'component', attr: 'badge', desc: 'Container element' },
  { type:'modifier', attr: 'badge-neutral', desc: 'badge with `neutral` color' },
  { type:'modifier', attr: 'badge-primary', desc: 'badge with `primary` color' },
  { type:'modifier', attr: 'badge-secondary', desc: 'badge with `secondary` color' },
  { type:'modifier', attr: 'badge-accent', desc: 'badge with `accent` color' },
  { type:'modifier', attr: 'badge-ghost', desc: 'badge with `ghost` color' },
  { type:'modifier', attr: 'badge-info', desc: 'badge with `info` color' },
  { type:'modifier', attr: 'badge-success', desc: 'badge with `success` color' },
  { type:'modifier', attr: 'badge-warning', desc: 'badge with `warning` color' },
  { type:'modifier', attr: 'badge-error', desc: 'badge with `error` color' },
  { type:'modifier', attr: 'badge-outline', desc: 'transparent badge with [colorful] border' },
  { type:'responsive', attr: 'badge-lg', desc: 'badge with large size' },
  { type:'responsive', attr: 'badge-md', desc: 'badge with medium size (default)' },
  { type:'responsive', attr: 'badge-sm', desc: 'badge with small size' },
  { type:'responsive', attr: 'badge-xs', desc: 'badge with extra small size' },
];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Badge</h2>
		<p p-3>{i('badge.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Badge</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<span badge="~"></span>
        <span badge="~">neutral</span>
        <span badge="~ primary">primary</span>
        <span badge="~ secondary">secondary</span>
        <span badge="~ accent">accent</span>`}/>
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Badge State</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<span badge="~ info">
          <i i-bx-info-circle ></i>info
        </span>
        <span badge="~ success">
          <i i-bx-check-circle></i>success
          </span>
        <span badge="~ warning">
          <i i-bx-error-circle></i>warning
        </span>
        <span badge="~ error">
          <i i-bx-x-circle></i>error
        </span>`}/>
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Badge in button</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<button btn="~ primary">
          Inbox
          <span badge="~">Primary</span>
        </button>`}/>
    </div>
  </div>
</div>
