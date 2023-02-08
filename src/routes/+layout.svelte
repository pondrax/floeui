<script lang="ts">
  import "$lib/floe.css";
  import "uno.css";
  import { theme } from "$lib/directives/index.js";
  import { page } from "$app/stores";

  const THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  const LINKS = [
    { heading: "Action", list: "button|dropdown|modal" },
    { heading: "Data Display", list: "alert|avatar|badge|card|carousel|chat-bubble|calendar|collapse|kbd|progress|stat|table|tooltip" },
    { heading: "Data Input", list: "input|checkbox|radio" },
    { heading: "Navigation", list: "breadcrumb|tab" },
  ];
</script>

<svelte:head>
  <title>FloeUI</title>
</svelte:head>


<div flex h-screen bg-base overflow-hidden>
  <aside w-90 flex flex-col h-full sticky top-0 aria-label="Sidebar">
    <ul menu flex-shrink-0>    
      <li menu-title>
        <div flex-col>
          <img src="/favicon.png" alt="icon" width="120" m-auto />
          <h3 text="xl center">Floeui</h3>
        </div>
      </li>
    </ul>
    <ul menu overflow-auto bg-base>
      {#each LINKS as links}
        <li />
        <li menu-heading>{links.heading}</li>
        {#each links.list.split("|") as name}
          {@const link = `/docs/${name}`}
          <li>
            <a href={link} class:bg-active={$page.route.id == link} capitalize>
              {name.replace('-',' ')}
            </a>
          </li>
        {/each}
      {/each}
      <li/>
    </ul>
  </aside>

  <main min-w-0 w-full p-2 aria-label="Main Content">
    <div bg-base-a h-full rounded-3xl overflow-auto>
      <div sticky top-0 py-3 px-6 z-10 bg-base-a rounded-box>
        <div>
          <div dropdown="~ ">
            <button btn="~ outline sm" my-1>
              <i i-bx-extension/>
              Theme
            </button>
            <ul menu w-48 p-3 shadow h-48 bg-base rounded-box gap-1>
              {#each THEMES as thm}
                <li data-theme={thm}>
                  <button
                    on:click={() => ($theme = thm)}
                    class:ring-2={$theme == thm}
                    w-full
                    gap-1
                    bg-base
                    text-base-content
                  >
                    <span mr-auto>{thm}</span>
                    <span bg-primary rounded-xl w-2 h-5 />
                    <span bg-secondary rounded-xl w-2 h-5 />
                    <span bg-accent rounded-xl w-2 h-5 />
                    <span bg-neutral rounded-xl w-2 h-5 />
                  </button>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      <div p-6 pt-3>
        <slot />
      </div>
    </div>
  </main>
</div>
