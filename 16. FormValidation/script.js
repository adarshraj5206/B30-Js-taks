const form = document.querySelector("#myForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const firstNameError = document.querySelector("#firstName-error");
const lastNameError = document.querySelector("#lastName-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

function validateField(field, errorElement, validationFunction) {
  const isValid = validationFunction(field.value);
  errorElement.style.display = isValid ? "none" : "block";
  return isValid;
}

function validateForm() {
  let isValid = true;

  isValid =
    validateField(firstName, firstNameError, (value) => value.trim() !== "") &&
    isValid;

  isValid =
    validateField(lastName, lastNameError, (value) => value.trim() !== "") &&
    isValid;

  isValid =
    validateField(email, emailError, (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) && isValid;

  isValid =
    validateField(password, passwordError, (value) => value.length >= 8) &&
    isValid;

  return isValid;
}

firstName.addEventListener("input", () => {
  firstNameError.style.display = "none";
});

lastName.addEventListener("input", () => {
  lastNameError.style.display = "none";
});

email.addEventListener("input", () => {
  emailError.style.display = "none";
});

password.addEventListener("input", () => {
  passwordError.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    alert("Form is valid!");
    console.log("Form submitted successfully!");
    form.reset();
  }
});
