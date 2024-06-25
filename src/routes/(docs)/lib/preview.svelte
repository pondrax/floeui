<script>
  import Prism from "prismjs";
  import "prismjs/themes/prism-okaidia.min.css";
  import "prism-svelte";

  let { children, background, code, title, lang } = $props();

  /** @type {HTMLDivElement} */
  let tabs;

  /** @type {string} */
  let copyText = $state('copy');

  /**
   * Sets the active tab based on the clicked event.
   * Removes 'tab-active' class from all tabs and adds it to the clicked tab.
   *
   * @param {Event} event - The event object triggered by clicking a tab.
   */
  function setActiveTab({ target }) {
    tabs.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    target.classList.add("tab-active");
  }

  /**
   * Copies the provided code to the clipboard.
   * Updates the copyText state to 'copied' and reverts it back to 'copy' after 3 seconds.
   *
   * @param {string} code - The code string to be copied to the clipboard.
   */
  function copySource(code) {
    copyText = 'copied';
    navigator.clipboard.writeText(code);
    setTimeout(() => copyText = 'copy', 3000);
  }
</script>


{#snippet preview(name, code)}
  <button role="tab" class="tab tab-active" onclick={setActiveTab}>{name}</button>
  <div
    role="tabpanel"
    class={"tab-content preview bg-base-100 !border-base-300 rounded-box p-6 "+ background}
  >
    <div class="flex flex-wrap gap-2 items-center justify-center relative">
      {@html code}
    </div>
  </div>
{/snippet}

{#snippet source(name, code)}
  <button role="tab" class="tab code" onclick={setActiveTab}>{name}</button>
  <div
    role="tabpanel"
    class="tab-content overflow-auto bg-neutral text-neutral-content !border-base-300 rounded-box p-6"
  >
    <div class="relative">
      <div class="absolute top--5 right--5 z-10">
        <div class="tooltip tooltip-left tooltip-info" data-tip={copyText}>
          <button class="btn btn-sm btn-neutral" onclick={()=>copySource(code)}>
            <i class="i-carbon-copy"></i>
          </button>
        </div>
      </div>
      <pre class="text-sm">{@html Prism.highlight(
        code,
        Prism.languages.svelte,
      )}</pre>
    </div>
  </div>
{/snippet}

<div class="flex flex-col gap-1 my-5">
  <!-- Title Component -->
  <div>
    <a href={`#${title?.toLowerCase()?.replaceAll(' ','-')}`} 
      class="opacity-80 hover-opacity-100 font-bold text-sm">
      <span class="opacity-50">#</span> {title}
    </a>
  </div>

  <!-- Children Component -->
  <div>
    {#if children}
      {@render children()}
    {/if}
  </div>

  {#if lang== undefined}
    <!-- Preview Component -->
    <div role="tablist" class="tabs tabs-lifted mb-5" bind:this={tabs}>

      {@render preview('Preview', code)}
      {@render source('HTML', code)}
      {@render source('JSX', code.replaceAll("class", "className"))}
      {@render source('Attributify', code.replace(/class="([^"]*)"/g, "$1"))}
    </div>
  {:else}
    <div class="overflow-auto bg-neutral text-neutral-content !border-base-300 rounded-box">
      <pre class="text-sm">{@html Prism.highlight(
        code,
        Prism.languages.js,
      )}</pre>
    </div>
  {/if}
</div>

<style>
  .tab-active {
    color: oklch(var(--r));
  }
  .preview {
    background: repeating-linear-gradient(
      45deg,
      oklch(var(--r) / 0.2),
      oklch(var(--r) / 0.2) 1px,
      transparent 1px,
      transparent 1.5rem
    );
  }
  .code {
    --tab-bg: oklch(var(--n));
  }
</style>
