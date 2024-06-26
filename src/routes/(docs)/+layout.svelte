<script>
  import { page } from "$app/stores";
  import { pages } from "./lib/pages.js";
  
  let {children} = $props()
  const activePage = $derived($page.route.id + "/");
  // $inspect(CONFIG)
</script>

<div class="drawer lg-drawer-open bg-base-200">
  <input id="sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col bg-base-100 rounded-box m-1 p-5 min-h-screen">
    <div>
      <label for="sidebar" class="btn lg-hidden">
        <i class="i-carbon-menu dark:i-carbon-book"></i>
      </label>
    </div>
    <div class="my-5">
      {@render children()}
    </div>
  </div>
  <div class="drawer-side z-10">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <div class="bg-base-200">
      <div class="flex gap-5 p-5 items-center">
        <a href="/">
          <img src="/favicon.png" alt="Icon" class="h-20" />
        </a>
        <div class="relative">
          <div class="text-4xl">
            <span class="text-#F8A696">Floe</span><span class="text-rainbow">UI</span>
            <span class="badge bg-rainbow badge absolute top--1 right--5">{CONFIG.version}</span>
          </div>
          <div class="flex text-xs text-center">
            <a href="https://unocss.dev" target="_blank" rel="nofollow">
              <span>UnoCSS</span>
              <br/>
              <span class="badge badge-xs badge-primary">{CONFIG.devDependencies?.unocss}</span>
            </a>
            &
            <a href="https://daisyui.com" target="_blank" rel="nofollow">
              <span>DaisyUI</span>
              <br/>
              <span class="badge badge-xs badge-secondary">{CONFIG.dependencies?.daisyui}</span>
            </a>
          </div>
        </div>
      </div>
      <ul class="menu w-72 rounded-box">
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
</div>