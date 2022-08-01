(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-trust-open]'),
    closeModalBtn: document.querySelector('[data-trust-close]'),
    modal: document.querySelector('[data-trust]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
