<script>
  import Preview from "../preview.svelte";
</script>

<Preview
  code={`
<button btn onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3>Hello!</h3>
    <div class="modal-action">
      <form method="dialog">
        <button>Close</button>
      </form>
    </div>
  </div>
</dialog>`}
></Preview>
