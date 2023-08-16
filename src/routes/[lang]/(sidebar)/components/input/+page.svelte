<script context="module">
	export const heading = 'Input';
</script>

<script>
  import { fnPrism, fnRef, fnTab, fnCopy } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Input</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <div>
    <span>Basic Input</span>
    <span>Info</span>
  </div>
  <input input type="text" placeholder="Basic Input"/> 
  <div>
    <span>Basic Input</span>
    <span>Info</span>
  </div>     
</div>
`} />
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <div>
    <span>Basic Input</span>
    <span>Info</span>
  </div>
  <input input type="date" placeholder="Basic Input"/> 
  <div>
    <span>Basic Input</span>
    <span>Info</span>
  </div>     
</div>
`} />
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Input Group</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div form-control>
  <div>
    Label
  </div>
  <div group-x>
    <button btn><i i-bx-note></i></button>
    <input input type="text" placeholder="Basic Input"/> 
  </div>    
</div>
<div form-control>
  <div>
    Label
  </div>
  <div group-x>
    <input input type="text" placeholder="Basic Input"/> 
    <button btn="~ base"><i i-bx-search></i></button>
  </div>    
</div>
<div form-control>
  <div>
    Label
  </div>
  <div group-x>
    <button btn><i i-bx-note></i></button>
    <input input type="text" placeholder="Basic Input"/> 
    <button btn="~ base"><i i-bx-search></i></button>
  </div>    
</div>
`} />
    </div>
  </div>
</div>
