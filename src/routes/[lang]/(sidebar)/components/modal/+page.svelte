<script context="module">
	export const heading = 'Action';
	export const action = 'fnModal'
</script>

<script>
	import { fnCopy, fnPrism, fnTab, fnModal } from '$lib/directives.js';
	let modalOpen = false;
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
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Modal</h2>
		<p p-3>{i('modal.desc')}</p>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Modal</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview>
				<button btn on:click={() => (modalOpen = true)}>Toggle Modal</button>

				<div modal use:fnModal={modalOpen} on:close={() => (modalOpen = false)}>
					<div>
						<button modal-close on:click={() => (modalOpen = false)}> &times; </button>
						<h1 text-lg mb-3>Modal Title</h1>
						<p>Modal Content</p>
					</div>
				</div>
			</div>
			<div
				data-title="Code"
				demo-code
				use:fnPrism={`
(script)
  let modalOpen = false;
(/script)

<button btn on:click={() => (modalOpen = true)}>Toggle Modal</button>

<div modal use:fnModal={modalOpen} on:close={() => (modalOpen = false)}>
  <div>
    <button modal-close on:click={() => (modalOpen = false)}>
      &times;
    </button>
    <h1 text-lg mb-3>Modal Title</h1>
    <p>Modal Content</p>
  </div>
</div>`}
			/>
		</div>
	</div>
</div>
