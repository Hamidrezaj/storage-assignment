// Select the input field, buttons, and display area

const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');
const clearButton = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

// Save name in local storage with Save Name button and display it

saveButton.addEventListener('click', () => {
  const name = usernameInput.value;
  localStorage.setItem('savedName', name);
  displayName.textContent = `Saved Name: ${name}`;
});

// check and display name with load or refresh

document.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('savedName');
  if (savedName) {
    displayName.textContent = `Saved Name: ${savedName}`;
  }
});

// clear name from local storage and display empty

clearButton.addEventListener('click', () => {
  localStorage.removeItem('savedName');
  usernameInput.value = '';
  displayName.textContent = '';
});
