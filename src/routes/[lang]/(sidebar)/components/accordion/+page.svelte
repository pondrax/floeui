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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Accordion</h2>
		<p p-3>{$t('accordion.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Accordion (Collapse Group)</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div group-y w-full bg-base>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
</div>

`}
      />
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Accordion (Collapse Group)</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div group-y gap-2 w-full children-bg-base important-children-rounded-box>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
</div>

`}
      />
		</div>
	</div>
</div>
