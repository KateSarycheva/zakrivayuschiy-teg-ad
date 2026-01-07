const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');

saveButton.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});