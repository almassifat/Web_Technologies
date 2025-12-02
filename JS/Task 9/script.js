const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const greetingText = document.getElementById("greetingText");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".content-section");

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

let currentTheme = "light";

function setGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Welcome";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingText.textContent = greeting + ", I’m glad you’re here.";
}

function toggleTheme() {
    if (currentTheme === "light") {
        currentTheme = "dark";
        body.classList.add("dark");
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        currentTheme = "light";
        body.classList.remove("dark");
        themeToggle.textContent = "Switch to Dark Mode";
    }
}

function showSection(id) {
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}

function setActiveNav(link) {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
}

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateForm(event) {
    event.preventDefault();

    let isValid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (emailValue === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(emailValue)) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    if (messageValue.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setGreeting();
    showSection("about");

    themeToggle.addEventListener("click", toggleTheme);

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const target = link.getAttribute("data-target");
            setActiveNav(link);
            showSection(target);
        });
    });

    contactForm.addEventListener("submit", validateForm);
});
