<!-- Open the modal using ID.showModal() method -->
<button btn onclick={() => my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3>Hello!</h3>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button>Close</button>
      </form>
    </div>
  </div>
</dialog>
