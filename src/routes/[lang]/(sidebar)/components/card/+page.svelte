<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives.js';
	import { t } from '$lib/lang.js'

	let properties = [
		{ type: 'component', attr: 'card', desc: 'Container element' },
		{ type: 'component', attr: 'card-title', desc: 'Title of card' },
		{ type: 'component', attr: 'card-body', desc: 'Container for content' },
		{ type: 'component', attr: 'card-actions', desc: 'Container for buttons' },
		{ type: 'modifier', attr: 'card-bordered', desc: 'Adds border to <card>' },
		{
			type: 'modifier',
			attr: 'image-full',
			desc: 'The image in <figure> element will be the background'
		},
		{ type: 'responsive', attr: 'card-normal', desc: 'Applies default paddings' },
		{ type: 'responsive', attr: 'card-compact', desc: 'Applies smaller padding' },
		{ type: 'responsive', attr: 'card-side', desc: 'The image in <figure> will be on to the side' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Card</h2>
		<p p-3>{$t('card.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Card</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
<div card lg:flex-row>
  <img src="https://picsum.photos/600/300" alt="Album" rounded-xl/>
  <div>
    <h2 text-xl>Card Title</h2>
    <p>Card content</p>
  </div>
</div>`}
			/>
		</div>
	</div>
</div>
