<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Avatar</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Avatar</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div avatar w-10 rounded>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 h-24 mask-squircle>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Avatar Text</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div avatar w-10 rounded>PS</div>
<div avatar w-10 mask-circle>AV</div>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Avatar State</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div avatar w-24 mask-circle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 ring ring-primary ring-offset-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 h-24 mask-squircle>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Avatar Shapes</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div avatar w-24 mask-squircle ring-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-decagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-diamond>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-heart>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-hexagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-hexagon-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-circle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-3>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-parallelogram-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-pentagon>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-square>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-star>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-star-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-2>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-3>
  <img src="https://picsum.photos/200" alt="img" />
</div>
<div avatar w-24 mask-triangle-4>
  <img src="https://picsum.photos/200" alt="img" />
</div>`}/>
    </div>
  </div>
</div>
