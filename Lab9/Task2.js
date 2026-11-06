/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 2
*/

// Function to validate form inputs and return an array of errors
function validateForm(name) {
    const errors = [];
    if (!name || name.trim() === "") {
        errors.push("Name is required");
    }
    return errors;
}

// Print results for "Asha"
const resultAsha = validateForm("Asha");
console.log("Validation for 'Asha':", resultAsha);

// Print results for empty name
const resultEmpty = validateForm("");
console.log("Validation for empty name:", resultEmpty);

// Browser UI integration if running in browser
if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("validation-form");
        const nameInput = document.getElementById("name-input");
        const errorList = document.getElementById("error-list");

        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                errorList.innerHTML = "";
                const errors = validateForm(nameInput.value);
                if (errors.length === 0) {
                    const li = document.createElement("li");
                    li.textContent = "Form submitted successfully!";
                    li.style.color = "green";
                    errorList.appendChild(li);
                } else {
                    errors.forEach((err) => {
                        const li = document.createElement("li");
                        li.textContent = err;
                        li.style.color = "red";
                        errorList.appendChild(li);
                    });
                }
            });
        }
    });
}
