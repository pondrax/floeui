<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Card</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Card</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div card lg:flex-row>
  <img src="https://placeimg.com/400/200/arch" alt="Album" />
  <div>
    <h2 text-xl>Card Title</h2>
    <p>Card content</p>
  </div>
</div>`}
      />
    </div>
  </div>
</div>
