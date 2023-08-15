<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism,fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Breadcrumb</h2>
  </div>
  <div>
    <i i-bx-extension=""></i>
    <h3 font-semibold cursor-pointer hover-text-primary>## Breadcrumb</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<ul breadcrumb>
  <li><a>Home</a></li> 
  <li><a>Documents</a></li> 
  <li>Add Document</li>
</ul>`}/>
    </div>
  </div>
  <div>
    <i i-bx-extension=""></i>
    <h3 font-semibold cursor-pointer hover-text-primary>## Breadcrumb</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<ul breadcrumb>
  <li><a><i i-bx-home></i>Home</a></li> 
  <li><a><i i-bx-book></i>Documents</a></li> 
  <li>Add Document</li>
</ul>`}/>
    </div>
  </div>
</div>
