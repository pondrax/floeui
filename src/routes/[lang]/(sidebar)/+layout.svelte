<script>
	import { fnTheme } from '$lib/directives.js';
	import { language } from '@inlang/sdk-js';
	export let data;
	let sidebarOpen = false;
</script>

<svelte:head>
	<title>{data.pageTitle} - FloeUI</title>
</svelte:head>

<div drawer bg-base h-screen>
	<aside bg-base drawer-side lg-drawer-open class:drawer-open={sidebarOpen}>
		<div px-6 py-2>
			<div flex items-end gap-2 mb-2>
				<img src="/favicon.png" h-20 alt="logo" />
				<div>
					<h1 text-4xl font-bold class="text-#F8A696" mb--1>
						Floe<span text-rainbow>UI</span>
					</h1>
					<!-- svelte-ignore illegal-attribute-character -->
					<div text-xs text-base-content:50>By Svelte & UnoCSS</div>
				</div>
			</div>
			<form form-control>
				<div relative>
					<div flex absolute left-2><i i-bx-search /></div>
					<!-- svelte-ignore a11y-autofocus -->
					<input input name="q" placeholder="Search" autofocus autocomplete="off" pl-8 />
				</div>
			</form>
		</div>
		<ul menu overflow-auto bg-base>
			{#each data.docs as { path, active }}
				<li>
					<a href={'/' + language + '/docs/' + path} class:bg-base-b={active} capitalize
						>{path.replaceAll('-', ' ')}</a
					>
				</li>
			{/each}
			<li></li>
			<li>
				<a href={'/' + language + '/components'}>All Components</a>
			</li>

			{#each data.components as [heading, links]}
				<li menu-heading capitalize>{heading}</li>
				{#each links as { path, active, action }}
					<li>
						<a href={'/' + language + '/components/' + path} class:bg-active={active} class:text-neutral={active} hover-bg-active>
							<span capitalize>
								{path.replaceAll('-', ' ')}
							</span>
							{#if action}
								<div ml-auto>
									<span badge="~ xs primary">{action}</span>
								</div>
							{/if}
						</a>
					</li>
				{/each}
				<li></li>
			{/each}
		</ul>
	</aside>
	<section drawer-content>
		<div bg-baseA rounded-box p-5 h-full overflow-auto>
			<div use:fnTheme={{ theme: 'cupcake', pos: 'start' }} flex gap-2 mb-10>
				<button drawer-toggle btn="~ sm outline" on:click={() => (sidebarOpen = !sidebarOpen)}>
					<i i-bx-menu />
				</button>
			</div>
			<slot />
		</div>
	</section>
</div>
