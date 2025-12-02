const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const departmentInput = document.getElementById("department");
const tableBody = document.getElementById("studentTableBody");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const rollValue = rollInput.value.trim();
    const departmentValue = departmentInput.value.trim();

    if (nameValue === "" || rollValue === "" || departmentValue === "") {
        alert("All fields are required.");
        return;
    }

    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = nameValue;
    row.appendChild(nameCell);

    const rollCell = document.createElement("td");
    rollCell.innerText = rollValue;
    row.appendChild(rollCell);

    const departmentCell = document.createElement("td");
    departmentCell.innerText = departmentValue;
    row.appendChild(departmentCell);

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        row.remove();
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);

    nameInput.value = "";
    rollInput.value = "";
    departmentInput.value = "";
});
