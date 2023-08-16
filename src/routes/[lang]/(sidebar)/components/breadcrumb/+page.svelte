<script context="module">
	export const heading = 'Navigation';
	export const action = 'fnBreadcrumb';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives/index.js';
	import { i } from '@inlang/sdk-js';

	let properties = [{ type: 'component', attr: 'breadcrumbs', desc: 'Container element' }];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Breadcrumb</h2>
		<p p-3>{i('breadcrumb.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Breadcrumb</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<ul breadcrumb>
  <li><a>Home</a></li> 
  <li><a>Documents</a></li> 
  <li>Add Document</li>
</ul>`}/>
		</div>
	</div>
	<div>
		<i i-bx-extension=""></i>
		<h3 font-semibold cursor-pointer hover-text-primary>## Breadcrumb</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<ul breadcrumb>
  <li><a><i i-bx-home></i>Home</a></li> 
  <li><a><i i-bx-book></i>Documents</a></li> 
  <li>Add Document</li>
</ul>`}/>
		</div>
	</div>
</div>
