function validateForm() {
    let valid = true;

    // Get values
    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let terms = document.getElementById("terms").checked;
    let privacy = document.getElementById("privacy").checked;

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";

    // Validate name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your full name.";
        valid = false;
    }

    // Validate email
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        valid = false;
    }

    // Validate phone
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
        valid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById("gendererror").innerHTML = "Please enter your gender.";
        valid = false;
    }

    // Validate terms and privacy checkboxes
    if (!terms || !privacy) {
        alert("Please agree to the Terms & Conditions and Privacy Policy.");
        valid = false;
    }

    return valid;
}