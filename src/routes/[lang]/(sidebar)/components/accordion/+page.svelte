<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
  import { i } from '@inlang/sdk-js'
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover-text-primary py-3># Accordion</h2>
    <p>{i('accordion.desc')}</p>
  </div>

  <div bg-base rounded-xl h-80 overflow-auto p-3>
    <table table table-rounded w-full>
      <thead>
        <tr children-bg-base-b sticky top-0>
          <th w-48>
            <input input placeholder={i('search')}>  
          </th>
          <th>{i("type")}</th>
          <th>{i('desc')}</th>
        </tr>
      </thead>
      <tbody>
        {#each [
          { type:'component', attr: 'collapse', desc: 'Container element' },
          { type:'component', attr: 'collapse-title', desc: 'Title element' },
          { type:'component', attr: 'collapse-content', desc: 'Container for content' },
          { type:'modifier', attr: 'collapse-arrow', desc: 'Adds arrow icon' },
          { type:'modifier', attr: 'collapse-plus', desc: 'Adds plus/minus icon' },
          { type:'modifier', attr: 'collapse-open', desc: 'Force open' },
          { type:'modifier', attr: 'collapse-close', desc: 'Force close' },
        ] as {type, attr, desc}}
          <tr>
            <td>{attr}</td>
            <td>{type}</td>
            <td>{desc}</td>
          </tr>
        {/each}
      </tbody>
    </table>
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
`<div group-y gap-2 w-full children-bg-base important-children-rounded-box>
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
