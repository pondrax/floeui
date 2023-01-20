<script lang="ts">
  import { fnPrism, fnRef, fnTab, fnCopy } from "$lib/directives";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Input Radio</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Input Radio</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<input radio type="radio" name="radio-1" placeholder="Basic Input" checked/> 
<input radio checked:bg-primary type="radio" name="radio-1" placeholder="Basic Input"/> 
<input radio checked:bg-secondary type="radio" name="radio-1" placeholder="Basic Input"/> 
<input radio checked:bg-accent type="radio" name="radio-1" placeholder="Basic Input"/> 
`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Input Radio</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview flex-col use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <label>
    <span>Radio A</span>
    <input radio type="radio" name="radio-2" placeholder="Basic Input" checked/> 
  </label>
</div>
<div form-control>
  <label>
    <span>Radio B</span>
    <input radio type="radio" name="radio-2" placeholder="Basic Input"/> 
  </label>
</div>
`} />
    </div>
  </div>

</div>
