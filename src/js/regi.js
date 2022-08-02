(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-regi-open]'),
    closeModalBtn: document.querySelector('[data-regi-close]'),
    modal: document.querySelector('[data-regi]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
