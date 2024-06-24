<script>
  import { page } from "$app/stores";
  import { pages } from "./lib/pages.js";
  
  let {children} = $props()
  const activePage = $derived($page.route.id + "/");
  $inspect(activePage)
</script>

<div class="drawer drawer-open bg-base-200">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col bg-base-100 rounded-box m-1 p-5">
    <!-- Page content here -->
    <div>
      <label for="sidebar" class="btn lg-hidden">
        <i class="i-carbon-menu dark:i-carbon-book"></i>
      </label>
    </div>
    <div>
      {@render children()}
    </div>
  </div>
  <div class="drawer-side bg-base-200">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <div>
      <a href="/">
        <img src="/favicon.png" alt="Icon" class="h-20" />
      </a>
    </div>
    <ul class="menu w-64 rounded-box">
      {#each pages as page}
        <li>
          {#if page.collapsible}
            <details open>
              <summary>
                {@html page.icon || ""}
                {page.name}
              </summary>
              <ul>
                {#each page.items as item}
                  {#if item.items}
                    <li>
                      <div>
                        {@html item.icon || ""}
                        {item.name}
                      </div>
                      <ul>
                        {#each item.items as subitem}
                          <li>
                            <a
                              href={subitem.href}
                              class:active={activePage.includes(subitem.href)}
                            >
                              {subitem.name}
                            </a>
                          </li>
                        {/each}
                      </ul>
                    </li>
                  {:else}
                    <li>
                      <a href={item.href}
                        class:active={activePage.includes(item.href)}>
                        {item.name}
                      </a>
                  </li>
                  {/if}
                {/each}
              </ul>
            </details>
          {:else}
            <a href={page.href}>
              {@html page.icon || ""}
              {page.name}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>
