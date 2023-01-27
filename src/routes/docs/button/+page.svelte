<script lang="ts">
  import { fnPrism, fnTab, fnCopy, fnRef } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-10>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Button</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Brand Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn>Button</button>
<button btn="~ primary">Primary</button>
<button btn="~ secondary">Secondary</button>
<button btn="~ accent">Accent</button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## State Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn="~ info">Info</button>
<button btn="~ success">Success</button>
<button btn="~ warning">Warning</button>
<button btn="~ error">Error</button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Outline Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn="~ outline">Button</button>
<button btn="~ outline-primary">Primary</button>
<button btn="~ outline-secondary">Secondary</button>
<button btn="~ outline-accent">Accent</button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>
      ## Outline State Buttons
    </h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn="~ outline-info">Info</button>
<button btn="~ outline-success">Success</button>
<button btn="~ outline-warning">Warning</button>
<button btn="~ outline-error">Error</button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Group Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div group-x>
  <button btn>1</button>
  <button btn="~ primary">2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>
<div group-y>
  <button btn>1</button>
  <button btn>2</button>
  <button btn>3</button>
  <button btn>4</button>
</div>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Buttons Link & Input</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code flex-col use:fnPrism={
`
  <a href="/docs/button" btn="~ base">link</a>
  <button btn="~ primary">button</button>
  <button btn="~ primary">button <span badge>badge</span></button>
  <input type="button" btn value="input">
<div group-x>
  <a href="/docs/button" btn="~ base">link</a>
  <button btn="~ primary">button</button>
  <input type="button" btn value="input">
</div>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Size Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn="~ xs">XS</button>
<button btn="~ sm">SM</button>
<button btn="">MD</button>
<button btn="~ lg">LG</button>
<button btn="~ xl">XL</button>
<button btn="~ 5xl">5XL</button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Icon Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn disabled><i i-bx-loader animate-spin></i> Loading</button>
<button btn="~ primary"><i i-bx-home ></i> Home</button>
<button btn="~ secondary">Plus <i i-bx-plus></i></button>
<button btn="~ accent">Pencil <i i-bx-pencil ></i></button>
<button btn="~ error">Trash <i i-bx-trash ></i></button>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Shape Buttons</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<button btn="~ square 5xl" aria-label="Cookie"><i i-bx-cookie ></i></button>
<button btn="~ circle 5xl" aria-label="Face"><i i-bx-face ></i></button>`}/>
    </div>
  </div>
</div>
