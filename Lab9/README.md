# EXPERIMENT NO. 09

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**DOM, Validation, Storage and Quiz**

## 2. Aim:
To demonstrate browser Document Object Model (DOM) manipulation, client-side form validation, web persistence using localStorage, and an interactive quiz application.

## 3. Software / Tools Required:
- Modern Web Browser (Chrome / Edge / Firefox), Visual Studio Code / Text Editor.

## 4. Theory:
1. **DOM Manipulation**: The browser DOM tree represents HTML documents as objects. JavaScript can query nodes (`getElementById`, `querySelector`), listen for events, and alter content dynamically.
2. **Form Validation**: Validating user input on the client before submission ensures data integrity and provides instant feedback without unnecessary server rounds.
3. **Web Storage (localStorage)**: Provides client-side key-value persistence across browser sessions with no expiration time, accessible via `localStorage.setItem()` and `localStorage.getItem()`.
4. **Interactive Quiz**: Combining radio button state inspection with conditional logic enables dynamic educational assessment without reloading pages.

## 5. Algorithm / Procedure:
1. **Task 1**: Build `Task1.html` with `<h1>Welcome</h1>` and a button. On click, update heading to `"Button clicked"` via DOM textContent.
2. **Task 2**: Implement `validateForm(name)`. If name is empty, return `["Name is required"]`. Verify with `"Asha"` and empty string. Provide an HTML interface.
3. **Task 3**: Build `Task3.html` with a textarea and Save button. On save, persist note into `localStorage` under key `"note"`. On page load, auto-populate the textarea with the stored value.
4. **Task 4**: Build `Task4.html` with question *"What is 2 + 3?"* and radio options 4, 5, 6. On clicking "Check answer", show `"Correct"` if 5 is selected, else `"Try again"`.

## 6. Program / Queries / Commands:
### Task 1 (Task1.html & Task1.js):
```javascript
// Task1.js
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("main-heading");
    const changeBtn = document.getElementById("change-btn");

    changeBtn.addEventListener("click", () => {
        heading.textContent = "Button clicked";
    });
});
```

### Task 2 (Task2.js):
```javascript
function validateForm(name) {
    const errors = [];
    if (!name || name.trim() === "") {
        errors.push("Name is required");
    }
    return errors;
}

console.log("Validation for 'Asha':", validateForm("Asha"));
console.log("Validation for empty name:", validateForm(""));
```

### Task 3 (Task3.js):
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const noteBox = document.getElementById("note-box");
    const saveBtn = document.getElementById("save-btn");
    const statusMsg = document.getElementById("status-msg");

    const savedNote = localStorage.getItem("note");
    if (savedNote !== null) {
        noteBox.value = savedNote;
    }

    saveBtn.addEventListener("click", () => {
        localStorage.setItem("note", noteBox.value);
        statusMsg.textContent = "Saved to localStorage successfully!";
        setTimeout(() => { statusMsg.textContent = ""; }, 2500);
    });
});
```

### Task 4 (Task4.js):
```javascript
document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("check-btn");
    const resultDiv = document.getElementById("result");

    checkBtn.addEventListener("click", () => {
        const selectedOption = document.querySelector('input[name="quiz-choice"]:checked');
        if (!selectedOption) {
            resultDiv.textContent = "Please select an answer!";
            return;
        }

        if (selectedOption.value === "5") {
            resultDiv.textContent = "Correct";
            resultDiv.className = "correct";
        } else {
            resultDiv.textContent = "Try again";
            resultDiv.className = "incorrect";
        }
    });
});
```

## 7. Input:
Task 1: Button click event.
Task 2: Form input strings 'Asha' and ''.
Task 3: Text entered into textarea.
Task 4: User radio choice (4, 5, or 6).

## 8. Output:
### Task 1 Output (Browser):
- Initial: Heading shows **Welcome**.
- Post Click: Heading updates to **Button clicked**.

### Task 2 Output (Node Console / Browser UI):
```text
Validation for 'Asha': []
Validation for empty name: [ 'Name is required' ]
```

### Task 3 Output (Browser):
- User notes are stored in `localStorage.getItem('note')` and persist upon browser reload.

### Task 4 Output (Browser):
- Selecting `5` and clicking 'Check answer' displays **Correct** (green).
- Selecting `4` or `6` displays **Try again** (red).

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 9.1: Task 1 DOM Heading Change*

![Task 2 Output](images/Task2_output.png)
*Figure 9.2: Task 2 Validation*

![Task 3 Output](images/Task3_output.png)
*Figure 9.3: Task 3 LocalStorage Persistence*

![Task 4 Output](images/Task4_output.png)
*Figure 9.4: Task 4 Quiz Result*

## 9. Result:
The experiment was performed successfully. DOM querying, event handling, input validation, client-side localStorage persistence, and interactive quiz selection were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. What is the difference between localStorage and sessionStorage?**  
*Ans:* localStorage persists data across browser tabs and sessions until explicitly cleared. sessionStorage stores data only for the duration of the page session (until the tab/window is closed).

**Q2. What does preventDefault() do in form submission handlers?**  
*Ans:* It cancels the browser's default form submission action, preventing full page reloads and allowing JavaScript to handle validation and submission asynchronously.

**Q3. What is the difference between innerHTML and textContent?**  
*Ans:* textContent sets or returns plain text content without parsing HTML tags (preventing XSS attacks). innerHTML parses and renders HTML markup, which can introduce security vulnerabilities if handling untrusted user input.

**Q4. What does document.querySelector() return if multiple elements match the selector?**  
*Ans:* It returns only the first matching Element node in document tree order. To obtain all matching elements, document.querySelectorAll() must be used.
