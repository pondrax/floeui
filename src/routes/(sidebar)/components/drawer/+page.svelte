<script context="module">
	export const heading = 'Layout';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Drawer</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Drawer</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview h-100 use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <!-- <label for="drawer" class="drawer-overlay"></label>  -->
      <div data-title="Code" demo-code use:fnPrism={`
<script>
  let open=false;
  function openDrawer(){
    open=true;
  }
</script>

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
