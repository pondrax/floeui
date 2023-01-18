<script lang="ts">
  import { fnCopy, fnPrism, fnTab, fnModal, fnRef } from "$lib/directives";
</script>

<div flex flex-col gap-10>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Tooltip</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tooltip Top (default)</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div
        data-title="Preview"
        demo-preview
        h-60
        items-end
        use:fnRef={"[data-code]"}
      />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tooltip bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://placeimg.com/192/192/arch" alt="avatar"/>
  </div>
</div>`}/>
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tooltip Open</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div
        data-title="Preview"
        demo-preview
        h-60
        items-end
        use:fnRef={"[data-code]"}
      />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tooltip="~ open" data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://placeimg.com/192/192/arch" alt="avatar"/>
  </div>
</div>`}/>
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tooltip Bottom</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div
        data-title="Preview"
        demo-preview
        h-60
        items-start
        use:fnRef={"[data-code]"}
      />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tooltip="~ bottom" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://placeimg.com/192/192/arch" alt="avatar"/>
  </div>
</div>`}/>
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tooltip Left</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div
        data-title="Preview"
        demo-preview
        h-60
        items-center
        use:fnRef={"[data-code]"}
      />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tooltip="~ left" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://placeimg.com/192/192/arch" alt="avatar"/>
  </div>
</div>`}/>
    </div>
  </div>
  
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Tooltip Right</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div
        data-title="Preview"
        demo-preview
        h-60
        items-center
        use:fnRef={"[data-code]"}
      />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div tooltip="~ right" bg-primary data-tip="Ini adalah &#xa; tooltip">
  <div avatar w-40>
    <img src="https://placeimg.com/192/192/arch" alt="avatar"/>
  </div>
</div>`}/>
    </div>
  </div>
</div>
