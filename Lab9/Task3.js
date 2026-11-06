/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 9
Task Number: 3
*/

document.addEventListener("DOMContentLoaded", () => {
    const noteBox = document.getElementById("note-box");
    const saveBtn = document.getElementById("save-btn");
    const statusMsg = document.getElementById("status-msg");

    // When page opens: Load the saved text from localStorage under key "note"
    const savedNote = localStorage.getItem("note");
    if (savedNote !== null) {
        noteBox.value = savedNote;
    }

    // On clicking Save: Store the text in localStorage under key "note"
    saveBtn.addEventListener("click", () => {
        const textToSave = noteBox.value;
        localStorage.setItem("note", textToSave);
        statusMsg.textContent = "Saved to localStorage successfully!";
        setTimeout(() => {
            statusMsg.textContent = "";
        }, 2500);
    });
});
