<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives.js';
	import { t } from '$lib/lang.js'

	let properties = [
		{ type: 'component', attr: 'avatar', desc: 'Container element' },
		{ type: 'component', attr: 'avatar-group', desc: 'Container for grouping multiple avatars' },
		{ type: 'modifier', attr: 'online', desc: 'shows a green dot as online indicator' },
		{ type: 'modifier', attr: 'offline', desc: 'shows a gray dot as offline indicator' },
		{ type: 'modifier', attr: 'placeholder', desc: 'to show some letters as avatar placeholder' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Avatar</h2>
		<p p-3>{$t('avatar.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Avatar</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div avatar w-10 rounded>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 h-24 mask-squircle>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Avatar Text</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div avatar w-10 rounded>PS</div>
<div avatar w-10 mask-circle>AV</div>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Avatar State</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div avatar w-24 mask-circle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 ring ring-primary ring-offset-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 h-24 mask-squircle>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Avatar Shapes</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div avatar w-24 mask-squircle ring-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-decagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-diamond>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-heart>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-hexagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-hexagon-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-circle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-3>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-pentagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-square>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-star>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-star-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-3>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
		</div>
	</div>
</div>
