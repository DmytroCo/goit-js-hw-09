const formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const input = form.querySelector('input');
const textarea = form.querySelector("textarea");

document.addEventListener('DOMContentLoaded', () => {
  const storageData = localStorage.getItem(STORAGE_KEY);
  
  if (storageData) {
    try {
      const savedData = JSON.parse(storageData);
      input.value = savedData.email || '';
      textarea.value = savedData.message || '';
      formData.email = savedData.email || '';
      formData.message = savedData.message || '';
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }
});

form.addEventListener('input', () => {
  formData.email = input.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = input.value.trim();
  const messageValue = textarea.value.trim();

  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }

  formData.email = emailValue;
  formData.message = messageValue;

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
