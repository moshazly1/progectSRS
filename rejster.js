//start rejester

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const nameValidIcon = document.getElementById("nameValid");
  const emailValidIcon = document.getElementById("emailValid");
  const passwordValidIcon = document.getElementById("passwordValid");
  const confirmPasswordValidIcon = document.getElementById(
    "confirmPasswordValid"
  );

  function validateInput(input, icon, pattern) {
    if (pattern.test(input.value)) {
      icon.style.display = "inline";
    } else {
      icon.style.display = "none";
    }
  }

  nameInput.addEventListener("input", function () {
    validateInput(nameInput, nameValidIcon, /^.{3,}$/);
  });

  emailInput.addEventListener("input", function () {
    validateInput(
      emailInput,
      emailValidIcon,
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    );
  });

  passwordInput.addEventListener("input", function () {
    validateInput(passwordInput, passwordValidIcon, /^.{6,}$/);
  });

  confirmPasswordInput.addEventListener("input", function () {
    validateInput(
      confirmPasswordInput,
      confirmPasswordValidIcon,
      new RegExp(`^${passwordInput.value}$`)
    );
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for demo purposes

    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = ""; // Clear error message

    const namePattern = /^.{3,}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordPattern = /^.{6,}$/;
    const confirmPasswordPattern = new RegExp(`^${passwordInput.value}$`);

    if (!namePattern.test(nameInput.value)) {
      errorMessage.textContent = "Name must be at least 3 characters long";
      return;
    }

    if (!emailPattern.test(emailInput.value)) {
      errorMessage.textContent = "Invalid email address";
      return;
    }

    if (!passwordPattern.test(passwordInput.value)) {
      errorMessage.textContent = "Password must be at least 6 characters long";
      return;
    }

    if (!confirmPasswordPattern.test(confirmPasswordInput.value)) {
      errorMessage.textContent = "Passwords do not match";
      return;
    }

    alert("Registration successful!");
    window.location.href = "./main.html";
  });
});

//end rejester
