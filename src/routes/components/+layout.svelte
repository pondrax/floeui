<script>
  import { pages } from "../docs/data/pages.js";
</script>

<div class="drawer drawer-open">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="sidebar" class="btn btn-primary drawer-button lg:hidden"
      >Open drawer</label
    >
    <slot />
  </div>
  <div class="drawer-side">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <div>
      <img src="/favicon.png" alt="Icon" h-20 />
    </div>
    <ul class="menu bg-base-200 w-72 rounded-box">
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
                            <a href={subitem.href}>{subitem.name}</a>
                          </li>
                        {/each}
                      </ul>
                    </li>
                  {:else}
                    <li><div>{item.name}</div></li>
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
