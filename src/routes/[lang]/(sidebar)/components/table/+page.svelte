<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives.js";
  import { i } from '@inlang/sdk-js';
	
	let properties = [
		{ type: 'component', attr: 'collapse', desc: 'Container element' },
		{ type: 'component', attr: 'collapse-title', desc: 'Title element' },
		{ type: 'component', attr: 'collapse-content', desc: 'Container for content' },
		{ type: 'modifier', attr: 'collapse-arrow', desc: 'Adds arrow icon' },
		{ type: 'modifier', attr: 'collapse-plus', desc: 'Adds plus/minus icon' },
		{ type: 'modifier', attr: 'collapse-open', desc: 'Force open' },
		{ type: 'modifier', attr: 'collapse-close', desc: 'Force close' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Table</h2>
		<p p-3>{i('table.desc')}</p>
	</div>

	<div bg-base rounded-xl p-2 mx-3>
		<div max-h-100 overflow-auto>
			<table table table-rounded w-full>
				<thead>
					<tr bg-base-b sticky top-0>
						<th w-48>
							<input input placeholder={i('search')} />
						</th>
						<th>{i('type')}</th>
						<th>{i('desc')}</th>
					</tr>
				</thead>
				<tbody>
					{#each properties as { type, attr, desc }}
						<tr>
							<td>{attr}</td>
							<td>
								<span badge class:badge-primary={type == 'component'}>{type}</span>
							</td>
							<td>{desc}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>


  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Table</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div overflow-auto bg-base p-2>
  <table table>
    <!-- head -->
    <thead>
      <tr children-bg-base-a>
        <th bg-base-a sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th sticky right-0>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>`}
      />
    </div>
  </div>


  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Table Rounded</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div overflow-auto bg-base rounded-xl p-2>
  <table table table-rounded>
    <!-- head -->
    <thead>
      <tr children-bg-base-a>
        <th bg-base-a sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th sticky right-0>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>`}
      />
    </div>
  </div>

  
  <div>
    <h3 font-semibold cursor-pointer hover-text-primary>## Table Zebra</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div bg-base overflow-auto p-2>
  <table table table-zebra bg-base w-100>
    <!-- head -->
    <thead>
      <tr children-bg-base-a>
        <th bg-base-a sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th sticky right-0>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th bg-base sticky left-0>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>`}
      />
    </div>
  </div>
</div>
