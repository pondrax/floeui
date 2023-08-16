<script context="module">
	export const heading = 'Input';
</script>

<script>
  import { fnPrism, fnRef, fnTab, fnCopy } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Input Checkbox</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Checkbox</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<input type="checkbox" checkbox checked/> 
<input type="checkbox" checkbox checked checked:bg-primary/> 
<input type="checkbox" checkbox checked:bg-secondary/> 
<input type="checkbox" checkbox checked:bg-secondary/> 
`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Checkbox</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview flex-col use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <label>
    <span>Checkbox A</span>
    <input type="checkbox" checkbox checked/> 
  </label>
</div>
<div form-control>
  <label>
    <span>Checkbox B</span>
    <input type="checkbox" checkbox/> 
  </label>
</div>
`} />
    </div>
  </div>

</div>
