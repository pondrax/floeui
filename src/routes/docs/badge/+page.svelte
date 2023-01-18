<script lang="ts">
  import { fnCopy, fnPrism,fnRef, fnTab } from "$lib/directives";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Badge</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Badge</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<span badge="~"></span>
        <span badge="~">neutral</span>
        <span badge="~ primary">primary</span>
        <span badge="~ secondary">secondary</span>
        <span badge="~ accent">accent</span>`}/>
    </div>
  </div>
  <i i-bx-info-circle h-5 w-5/>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Badge State</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<span badge="~ info">
          <i i-bx-info-circle ></i>info
        </span>
        <span badge="~ success">
          <i i-bx-x></i>uccess</span>
        <span badge="~ warning">warning</span>
        <span badge="~ error">error</span>`}/>
    </div>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Badge in button</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
        `<button btn="~ primary">
          Inbox
          <span badge="~">Primary</span>
        </button>`}/>
    </div>
  </div>
</div>
