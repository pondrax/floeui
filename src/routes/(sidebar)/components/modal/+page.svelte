<script context="module">
	export const heading = 'Display';
	import { fnCopy, fnPrism, fnTab, fnModal } from '$lib/directives/index.js';
</script>

<script>
	let modalOpen = false;
</script>

<div flex flex-col gap-10>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Modal</h2>
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
<script>
  let modalOpen = false;
</script>

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
