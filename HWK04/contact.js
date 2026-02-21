// const form = document.getElementById("contact-form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let valid = true;

//   const fields = ["first-name", "last-name", "email", "message"];

//   fields.forEach((id) => {
//     const field = document.getElementById(id);
//     const error = document.getElementById(id + "-error");

//     if (!field.value.trim()) {
//       field.classList.add("error");
//       error.textContent = "This field is required.";
//       valid = false;
//     } else {
//       field.classList.remove("error");
//       error.textContent = "";
//     }
//   });

//   if (valid) {
//     document.getElementById("form-success").textContent =
//       "Your message has been successfully submitted!";
//     form.reset();
//   }
// });


const form = document.getElementById("contact-form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const successMessage = document.getElementById("form-success");

function validateField(field, errorId, messageText) {
  const errorElement = document.getElementById(errorId);

  if (!field.checkValidity()) {
    field.classList.add("error");
    errorElement.textContent = messageText;
  } else {
    field.classList.remove("error");
    errorElement.textContent = "";
  }
}

/* Blur validation */
firstName.addEventListener("blur", () => {
  validateField(firstName, "first-error", "First name is required.");
});

lastName.addEventListener("blur", () => {
  validateField(lastName, "last-error", "Last name is required.");
});

email.addEventListener("blur", () => {
  if (email.value === "") {
    validateField(email, "email-error", "Email is required.");
  } else if (!email.checkValidity()) {
    validateField(email, "email-error", "Please enter a valid email address.");
  } else {
    validateField(email, "email-error", "");
  }
});

message.addEventListener("blur", () => {
  validateField(message, "message-error", "Message is required.");
});

/* Submit validation */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateField(firstName, "first-error", "First name is required.");
  validateField(lastName, "last-error", "Last name is required.");
  validateField(message, "message-error", "Message is required.");

  if (email.value === "") {
    validateField(email, "email-error", "Email is required.");
  } else if (!email.checkValidity()) {
    validateField(email, "email-error", "Please enter a valid email address.");
  }

  if (
    firstName.checkValidity() &&
    lastName.checkValidity() &&
    email.checkValidity() &&
    message.checkValidity()
  ) {
    successMessage.textContent = "Your message has been successfully submitted!";
    form.reset();
  }
});

