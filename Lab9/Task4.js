/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 4
*/

document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("check-btn");
    const resultDiv = document.getElementById("result");

    checkBtn.addEventListener("click", () => {
        // Find the selected radio button for quiz choices
        const selectedOption = document.querySelector('input[name="quiz-choice"]:checked');

        if (!selectedOption) {
            resultDiv.textContent = "Please select an answer!";
            resultDiv.className = "incorrect";
            return;
        }

        // If 5 is selected, show "Correct", otherwise show "Try again"
        if (selectedOption.value === "5") {
            resultDiv.textContent = "Correct";
            resultDiv.className = "correct";
        } else {
            resultDiv.textContent = "Try again";
            resultDiv.className = "incorrect";
        }
    });
});
