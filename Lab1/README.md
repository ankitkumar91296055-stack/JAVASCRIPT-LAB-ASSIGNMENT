# EXPERIMENT NO. 01

> **Student Name:** Ankit Kumar 
> **Student ID:** BCS2025392  
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Your First JavaScript Script**

## 2. Aim:
To learn how to execute JavaScript within an HTML document, declare variables using const and let, and inspect primitive data types using the typeof operator.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Web Browser (Google Chrome / Mozilla Firefox / Microsoft Edge), Visual Studio Code / Text Editor.

## 4. Theory:
JavaScript is a lightweight, interpreted, just-in-time compiled programming language with first-class functions.
1. **Embedding in HTML**: JavaScript code can be executed in the browser inside the `<script>` tag, typically placed before the closing `</body>` tag to allow the DOM to load before script execution.
2. **Variable Declarations (ES6)**:
   - `const`: Declares a block-scoped, read-only constant reference that cannot be reassigned.
   - `let`: Declares a block-scoped mutable variable that can be updated.
3. **typeof Operator**: A unary operator that returns a string indicating the type of the unevaluated operand (e.g., `"string"`, `"number"`, `"boolean"`, `"object"`, `"undefined"`, `"function"`, `"symbol"`).

## 5. Algorithm / Procedure:
1. **Task 1**: Create an HTML5 document (`Task1.html`), place a `<script>` tag inside the `<body>`, and call `console.log("Hello from the script")`.
2. **Task 2**: Create a JavaScript file (`Task2.js`), declare constant `schoolName = "Sample College"` and variable `year = 2026`, and print them on separate lines using `console.log()`.
3. **Task 3**: Create `Task3.js` and use `typeof` on values `"hello"`, `7`, and `true`, printing each result to the console.
4. Run the programs using Node.js (`node TaskX.js`) and open `Task1.html` in a browser.

## 6. Program / Queries / Commands:
### Task 1 (Task1.html):
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 1 - Task 1: First JavaScript Script</title>
</head>
<body>
    <h1>JavaScript Programming Lab - Lab 1</h1>
    <p>Open the browser console (Press F12 -> Console) to see the output.</p>

    <!-- Script tag inside the body -->
    <script>
        console.log("Hello from the script");
    </script>
</body>
</html>
```

### Task 2 (Task2.js):
```javascript
const schoolName = "Sample College";
let year = 2026;

console.log(schoolName);
console.log(year);
```

### Task 3 (Task3.js):
```javascript
console.log(typeof "hello");
console.log(typeof 7);
console.log(typeof true);
```

## 7. Input:
Task 1: None (static output).
Task 2: schoolName = 'Sample College', year = 2026.
Task 3: Literals 'hello', 7, true.

## 8. Output:
### Task 1 Output (Browser Console / Node):
```text
Hello from the script
```

### Task 2 Output (Node Console):
```text
Sample College
2026
```

### Task 3 Output (Node Console):
```text
string
number
boolean
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 1.1: Task 1 Console Output*

![Task 2 Output](images/Task2_output.png)
*Figure 1.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 1.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Basic JavaScript script execution inside HTML, variable declaration using let and const, and data type inspection using the typeof operator were demonstrated and verified.

## 10. Viva-Voce Questions:
**Q1. What is the difference between let, const, and var in JavaScript?**  
*Ans:* var is function-scoped and hoisted with undefined initialization. let and const are block-scoped and live in the Temporal Dead Zone (TDZ) before declaration. const cannot be reassigned, whereas let can.

**Q2. Why is it recommended to place the <script> tag at the bottom of the <body> tag?**  
*Ans:* Placing the script at the bottom ensures that the HTML document and DOM elements are parsed and rendered before JavaScript attempts to access or manipulate them.

**Q3. What does typeof null return and why?**  
*Ans:* typeof null returns 'object'. This is a historical bug in the original implementation of JavaScript where values were stored with a type tag, and null shared the object type tag (0).

**Q4. What is the difference between null and undefined in JavaScript?**  
*Ans:* undefined represents a declared variable that has not yet been assigned a value. null is an intentional assignment representing the absence of an object or value.
