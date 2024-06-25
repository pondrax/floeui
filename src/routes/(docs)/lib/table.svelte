<script>
  let { data } = $props();
</script>

<div class="overflow-x-auto my-10">
  <table class="table table-xs">
    <thead>
      <tr>
        <th class="bg-base-200 rounded-l-box w-36">Classname</th>
        <th class="bg-base-200">Type</th>
        <th class="bg-base-200 rounded-r-box">Description</th>
      </tr>
    </thead>
    <tbody>
      {#each data as row}
        <tr>
          <td>{row.class}</td>
          <td>
            <span
              class="badge badge-sm"
              class:badge-ghost={row.type == "component"}
              class:badge-info={row.type == "responsive"}
            >
              {row.type}
            </span>
          </td>
          <td>{row.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
