<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Tabs</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tabs</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<ul tabs>
  <li>Item A</li>
  <li tab-active>Item B</li>
  <li>Item C</li>
  <li>Item D</li>
</ul>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tabs</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<ul tabs="~ bordered">
  <li>Item A</li>
  <li>Item B</li>
  <li class="tab-active">Item C</li>
  <li>Item D</li>
</ul>`}/>
    </div>
  </div>
</div>
