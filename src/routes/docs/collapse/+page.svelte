<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Collapse</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Collapse</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tabindex="0" collapse bg-base>
  <div collapse-title>
    Title
  </div>
  <div>
    <p>Collapse content</p>
  </div>
</div>`}
      />
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Collapse Group (Accordion)</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div collapse-group>
  <div tabindex="0" collapse bg-base>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse bg-base>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse bg-base>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse bg-base>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
</div>

`}
      />
    </div>
  </div>
</div>
