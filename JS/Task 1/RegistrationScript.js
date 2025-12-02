const form = document.getElementById("registrationForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const phoneError = document.getElementById("phoneError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    nameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";
    phoneError.innerText = "";
    successMessage.innerText = "";

    let isValid = true;

    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const phone = phoneInput.value.trim();

    if (fullName === "") {
        nameError.innerText = "Full name is required.";
        isValid = false;
    }

    if (email === "") {
        emailError.innerText = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "Enter a valid email (must contain @ and .).";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.innerText = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        isValid = false;
    }

    const phoneDigitsOnly = /^\d+$/;
    if (phone === "") {
        phoneError.innerText = "Phone number is required.";
        isValid = false;
    } else if (!phoneDigitsOnly.test(phone)) {
        phoneError.innerText = "Phone number must contain only digits.";
        isValid = false;
    }

    if (isValid) {
        successMessage.innerText = "Registration Successful!";
        form.reset();
    }
});
