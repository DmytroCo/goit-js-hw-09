const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = document.querySelector('input');
const textarea = form.querySelector("textarea");

document.addEventListener('DOMContentLoaded', reloadFunction);
function reloadFunction() {
  const storageData = localStorage.getItem(localStorageKey);
  if (storageData) {
    const pageReboot = JSON.parse(storageData);
    input.value = pageReboot.email;
    textArea.value = pageReboot.message;
    formData.email = pageReboot.email;
    formData.message = pageReboot.message;
  }
}

form.addEventListener('input', inputFunction);
function inputFunction() {
  formData.email = input.value.trim();
  formData.message = textArea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', submitFunction);
function submitFunction(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value.trim();
  const messageValue = event.target.elements.message.value.trim();
  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }
  formData.email = emailValue;
  formData.message = messageValue;
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}