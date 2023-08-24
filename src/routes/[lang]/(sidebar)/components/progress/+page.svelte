<script context="module">
	export const heading = 'Input';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives.js";
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Progress</h2>
		<p p-3>{i('progress.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Progress</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview grid use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress w-56 style="--val:0"></div>
<div progress w-56 style="--val:25"></div>
<div progress w-56 style="--val:50"></div>
<div progress w-56 style="--val:75"></div>
<div progress w-56 style="--val:100"></div>
`}
      />
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Progress Colors</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview grid use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress="~" w-56 style="--val:0" data-tip="0 pieces"></div>
<div progress="~ primary" w-56 style="--val:25" data-tip="25 pieces"></div>
<div progress="~ secondary" w-56 style="--val:50" data-tip="50 pieces"></div>
<div progress="~ accent" w-56 style="--val:75" data-tip="75 pieces"></div>
<div progress="~ info" w-56 style="--val:100" data-tip="100 pieces"></div>
`}
      />
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Progress Radial</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress="~ radial" w-20 style="--val:0" data-tip="50 pieces">0%</div>
<div progress="~ radial primary" w-20 style="--val:25" data-tip="100 pieces">25%</div>
<div progress="~ radial secondary" w-20 style="--val:50" data-tip="100 pieces">50%</div>
<div progress="~ radial accent" w-20 style="--val:75" data-tip="100 pieces">75%</div>
<div progress="~ radial info" w-20 style="--val:100" data-tip="100 pieces">100%</div>
`}
      />
    </div>
  </div>
</div>
