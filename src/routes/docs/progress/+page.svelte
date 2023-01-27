<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Progress</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Progress</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview grid use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress w-56 style="--val:0"></div>
<div progress w-56 style="--val:25"></div>
<div progress w-56 style="--val:50"></div>
<div progress w-56 style="--val:75"></div>
<div progress w-56 style="--val:100"></div>
`}
      />
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Progress Colors</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview grid use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress="~" w-56 style="--val:0" data-tip="0 pieces"></div>
<div progress="~ primary" w-56 style="--val:25" data-tip="25 pieces"></div>
<div progress="~ secondary" w-56 style="--val:50" data-tip="50 pieces"></div>
<div progress="~ accent" w-56 style="--val:75" data-tip="75 pieces"></div>
<div progress="~ info" w-56 style="--val:100" data-tip="100 pieces"></div>
`}
      />
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Progress Radial</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div progress="~ radial" w-20 style="--val:0" data-tip="50 pieces">0%</div>
<div progress="~ radial primary" w-20 style="--val:25" data-tip="100 pieces">25%</div>
<div progress="~ radial secondary" w-20 style="--val:50" data-tip="100 pieces">50%</div>
<div progress="~ radial accent" w-20 style="--val:75" data-tip="100 pieces">75%</div>
<div progress="~ radial info" w-20 style="--val:100" data-tip="100 pieces">100%</div>
`}
      />
    </div>
  </div>
</div>
