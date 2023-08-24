<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnPrism, fnRef, fnTab, fnCopy } from '$lib/directives.js';
  import { i } from '@inlang/sdk-js';
	
	let properties = [
  { type:'component', attr: 'drawer', desc: 'The root container' },
  { type:'component', attr: 'drawer-toggle', desc: 'For the hidden checkbox that controls the drawer' },
  { type:'component', attr: 'drawer-content', desc: 'Container for all page content' },
  { type:'component', attr: 'drawer-side', desc: 'The sidebar container' },
  { type:'component', attr: 'drawer-overlay', desc: 'The label covers the content when drawer is open' },
  { type:'modifier', attr: 'drawer-end', desc: 'puts drawer to the right' },
  { type:'responsive', attr: 'drawer-open', desc: 'Forces the drawer to be open' },
];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Drawer</h2>
		<p p-3>{i('drawer.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Drawer</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview h-100 use:fnRef={"[data-code]"} />
      <div data-title="Code" demo-code use:fnPrism={`

(script)
  let open=false;
  function openDrawer(){
    open=true;
  }
(/script)

<div drawer bg-base h-full w-full>
  <div drawer-side  bg-base lg:drawer-open class:drawer-open={open}>
    <!-- Sidebar content here -->
    <ul menu p-4>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
  <div drawer-content>
    <!-- Page content here -->
    <div>
      <button btn="~ xs" on:click={openDrawer}>
        <i i-bx-menu></i>
      </button>
    </div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  </div> 
</div>`}/>
    </div>
  </div>
</div>
