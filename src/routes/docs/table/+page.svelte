<script lang="ts">
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives/index.js";
</script>

<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Table</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Table</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div class="overflow-x-auto" bg-base p-6>
  <table table bg-base>
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
    <h3 font-semibold cursor-pointer hover:text-primary>## Table Zebra</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div class="overflow-x-auto">
  <table table table-zebra bg-base w-100>
    <!-- head -->
    <thead>
      <tr children-bg-base-a>
        <th>
          <input type="checkbox" checkbox/>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr>
        <th>
          <input type="checkbox" checkbox/>
        </th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <th>
          <input type="checkbox" checkbox/>
        </th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>
          <input type="checkbox" checkbox/>
        </th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>
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
