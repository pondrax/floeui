<script>
  let { data } = $props();
</script>

<div class="overflow-x-auto my-5">
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
            {#if row.type == "component"}
              <div class="tooltip cursor-help" data-tip="Changes the style of component">
                <div class="badge badge-sm badge-ghost">{row.type}</div>
              </div>
            {:else if row.type == "responsive"}
              <div class="tooltip cursor-help" data-tip="Support responsive prefixes (sm,lg, ...)">
                <div class="badge badge-sm badge-success">{row.type}</div>
              </div>
            {:else}
              <div class="badge badge-sm">{row.type}</div>
            {/if}
          </td>
          <td>{row.desc}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
