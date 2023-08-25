<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnTab, fnRef } from '$lib/directives.js';
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Tooltip</h2>
		<p p-3>{$t('tooltip.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Tooltip Top (default)</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview h-60 items-end use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div tooltip bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://picsum.photos/200" alt="avatar"/>
  </div>
</div>`}
			/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tooltip Open</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview h-60 items-end use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div tooltip="~ open" data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://picsum.photos/200" alt="avatar"/>
  </div>
</div>`}
			/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tooltip Bottom</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview h-60 items-start use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div tooltip="~ bottom" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://picsum.photos/200" alt="avatar"/>
  </div>
</div>`}
			/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tooltip Left</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview h-60 items-center use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div tooltip="~ left" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://picsum.photos/200" alt="avatar"/>
  </div>
</div>`}
			/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Tooltip Right</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview h-60 items-center use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div tooltip="~ right" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://picsum.photos/200" alt="avatar"/>
  </div>
</div>`}
			/>
		</div>
	</div>
</div>
