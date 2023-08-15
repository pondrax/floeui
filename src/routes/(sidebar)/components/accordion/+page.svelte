<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary># Accordion</h2>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Accordion (Collapse Group)</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div group-y w-full bg-base>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse>
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


  

  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Accordion (Collapse Group)</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div group-y gap-2 w-full children-bg-base children-rounded-box>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
    <div collapse-title>
      Title
    </div>
    <div>
      <p>Collapse content</p>
    </div>
  </div>
  <div tabindex="0" collapse collapse-arrow>
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
