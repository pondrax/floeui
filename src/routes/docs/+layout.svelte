<script>
  import { pages } from "./data/pages.js";
</script>

<div class="drawer drawer-open">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <slot/>
  </div> 
  <div class="drawer-side">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>