<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Dropdown</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Dropdown</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown>
  <button btn m-1>Click &darr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>

  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Dropdown End</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ end">
  <button btn m-1>Click end</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Dropdown Top</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} items-end h-40 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ top">
  <button btn m-1>Click &uarr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Dropdown left</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-30 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ left">
  <button btn m-1>Click &larr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Dropdown Right</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} h-30 />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div dropdown="~ right">
  <button btn m-1>Click &rarr;</button>
  <ul tabindex="0" menu w-48 bg-base rounded-box>
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </ul>
</div>`} />
    </div>
  </div>
</div>
