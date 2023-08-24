<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnPrism, fnRef, fnTab, fnCopy } from '$lib/directives.js';
	import { i } from '@inlang/sdk-js';

	let properties = [
		{ type: 'component', attr: 'alert', desc: 'Container element' },
		{ type: 'modifier', attr: 'alert-info', desc: 'Alert with `info` color' },
		{ type: 'modifier', attr: 'alert-success', desc: 'Alert with `success` color' },
		{ type: 'modifier', attr: 'alert-warning', desc: 'Alert with `warning` color' },
		{ type: 'modifier', attr: 'alert-error', desc: 'Alert with `error` color' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Alert</h2>
		<p p-3>{i('alert.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert>
  <i i-bx-info-circle text-info ></i>
  <div>12 unread messages. Tap to see.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ info">
  <i i-bx-info-circle ></i>
  <div>New software update available.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ success">
  <i i-bx-check-circle ></i>
  <div>Your purchase has been confirmed!</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ warning">
  <i i-bx-error ></i>
  <div>Warning: Invalid email address!</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~ error">
  <i i-bx-x-circle ></i>
  <div>Error! Task failed successfully.</div>
</div>`} />
		</div>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Alert</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div alert="~">
  <i i-bx-info-circle text-info></i>
  <div>
    <h3>New messages!</h3>
    <div text-xs>You have 100+ unread messages</div>
  </div>
  <div alert-action>
    <button btn="~ xs">See</button>
  </div>
</div>`} />
		</div>
	</div>
</div>
