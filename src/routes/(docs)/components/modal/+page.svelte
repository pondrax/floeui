<script>
  import Table from "$components/table.svelte";
  import Preview from "$components/preview.svelte";

  const title = "Modal";
</script>

<Table
  data={[
    { type: "component", class: "modal", desc: "Container element" },
    { type: "component", class: "modal-box", desc: "The content of modal" },
    {
      type: "component",
      class: "modal-action",
      desc: "Container for modal action buttons",
    },
    {
      type: "component",
      class: "modal-backdrop",
      desc: "The backdrop that covers the back of modal so we can close the modal by clicking outside",
    },
    {
      type: "component",
      class: "modal-toggle",
      desc: "For hidden checkbox that controls modal",
    },
    {
      type: "modifier",
      class: "modal-open",
      desc: "Add/remove this class to open/close the modal using JS",
    },
    { type: "responsive", class: "modal-top", desc: "Moves the modal to top" },
    {
      type: "responsive",
      class: "modal-bottom",
      desc: "Moves the modal to bottom",
    },
    {
      type: "responsive",
      class: "modal-middle",
      desc: "Moves the modal to middle (default)",
    },
  ]}
/>

<Preview
  title="Dialog modal"
  code={`<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_1.showModal()">open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>`}
/>

<Preview
  title="Dialog modal, closes when clicked outside"
  desc="there is a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside"
  code={`<button class="btn" onclick={() => my_modal_2.showModal()}>open modal</button>
<dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
`}
></Preview>
