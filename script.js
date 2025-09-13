// === Part 1: Basic Event Handling ===
const messageBtn = document.getElementById('messageBtn');
const message = document.getElementById('message');

messageBtn.addEventListener('click', () => {
  message.textContent = "Hello! You clicked the button!";
});

// === Part 2: Interactive Elements ===

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Game
const counterBtn = document.getElementById('counterBtn');
const countDisplay = document.getElementById('count');
let count = 0;
counterBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

// Collapsible FAQ
const faqToggle = document.querySelector('.faq-toggle');
const faqContent = document.querySelector('.faq-content');

faqToggle.addEventListener('click', () => {
  faqContent.style.display = faqContent.style.display === 'block' ? 'none' : 'block';
});

// === Part 3: Form Validation ===
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  }
});
