const userTypeSelect = document.getElementById("userType");
const rollField = document.getElementById("rollField");
const departmentField = document.getElementById("departmentField");

userTypeSelect.addEventListener("change", function () {
    const value = userTypeSelect.value;

    if (value === "student") {
        rollField.style.display = "block";
        departmentField.style.display = "none";
    } else if (value === "teacher") {
        rollField.style.display = "none";
        departmentField.style.display = "block";
    } else {
        rollField.style.display = "none";
        departmentField.style.display = "none";
    }
});
