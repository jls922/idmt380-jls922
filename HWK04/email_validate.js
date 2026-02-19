//Accessible Email Validation
    const form = document.getElementById("contact-form");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    emailInput.addEventListener("blur", function () {
      if (!emailInput.checkValidity()) {
        emailInput.setAttribute("aria-invalid", "true");
        emailError.textContent = "Please enter a valid email address.";
      } else {
        emailInput.setAttribute("aria-invalid", "false");
        emailError.textContent = "";
      }
    });

    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
      }
    });