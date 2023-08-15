<script>
	import { fnTheme } from '$lib/directives/index.js';
	export let data;
	let sidebarOpen = false;
</script>

<div drawer bg-base h-screen>
	<aside bg-base drawer-side lg-drawer-open class:drawer-open={sidebarOpen}>
		<div px-6 py-2>
			<div flex items-end gap-2 mb-2>
				<img src="/favicon.png" h-20 alt="logo" />
				<div>
					<h1 text-4xl font-bold class="text-#F8A696" mb--1>
						Floe<span class="text-#677F27">UI</span>
					</h1>
					<!-- svelte-ignore illegal-attribute-character -->
					<div text-xs text-base-content:50>By Svelte & UnoCSS</div>
				</div>
			</div>
			<form form-control>
				<!-- svelte-ignore a11y-autofocus -->
				<input input name="q" placeholder="Search" autofocus />
			</form>
		</div>
		<ul menu overflow-auto bg-base>
			{#each data.docs as {path, active}}
				<li>
					<a href={'/docs/' + path} class:bg-base-b={active} capitalize>{path.replaceAll('-', ' ')}</a>
				</li>
			{/each}
			<li></li>
			<li>
				<a href="/components">All Components</a>
			</li>

			{#each data.components as [heading, links]}
				<li menu-heading capitalize>{heading}</li>
				{#each links as {path, active}}
					<li>
						<a href={'/components/' + path} class:bg-base-b={active} capitalize>{path.replaceAll('-', ' ')}</a>
					</li>
				{/each}
				<li></li>
			{/each}
		</ul>
	</aside>
	<section drawer-content>
		<div bg-baseA rounded-box p-5 h-full overflow-auto>
			<div use:fnTheme flex gap-1>
				<button
					drawer-toggle
					btn="~ sm outline"
					bg-base
					on:click={() => (sidebarOpen = !sidebarOpen)}
					mb-5
				>
					<i i-bx-menu />
				</button>
			</div>
			<slot />
		</div>
	</section>
</div>
