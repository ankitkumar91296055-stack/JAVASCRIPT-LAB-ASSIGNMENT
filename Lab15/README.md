# EXPERIMENT NO. 15

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Promises and Async/Await with Local Data**

## 2. Aim:
To demonstrate asynchronous JavaScript using Promises (resolve and reject), promise chaining, and synchronous-style async/await syntax with structured try...catch error handling.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **JavaScript Promises**: An object representing the eventual completion (or failure) of an asynchronous operation. A Promise can be in one of three states: `pending`, `fulfilled` (resolved), or `rejected`.
2. **Promise Handling**: Fulfillment is handled via `.then()` and rejection via `.catch()`.
3. **Async / Await**: Syntactic sugar built on Promises introduced in ES2017. An `async` function always returns a Promise, and `await` pauses execution within the function until the awaited Promise settles.
4. **Structured Error Handling**: Rejections inside `async` functions can be caught cleanly using standard `try...catch` blocks.

## 5. Algorithm / Procedure:
1. **Task 1**: Implement `checkMarks(marks)` returning a Promise that resolves `marks` if between 0 and 100, else rejects with `Error("Marks out of range")`. Call with `80` and print the resolved value.
2. **Task 2**: Call `checkMarks(120)`. Handle the rejection using `.catch()` and print the rejection error message.
3. **Task 3**: Create `async run()`. Inside `try`, await `checkMarks(65)` and print it, then await `checkMarks(-5)`. Inside `catch`, print `"Caught: " + error.message`. Call `run()`.
4. **Task 4**: Create `getUsers()` returning a Promise resolving after 100ms with local mock users (Asha, Rohan, Meera). Create an async function awaiting `getUsers()` and print each user's name.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(80)
    .then((val) => {
        console.log("Resolved value:", val);
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });
```

### Task 2 (Task2.js):
```javascript
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then((val) => {
        console.log("Resolved value:", val);
    })
    .catch((err) => {
        console.log("Rejection error:", err.message);
    });
```

### Task 3 (Task3.js):
```javascript
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        console.log(await checkMarks(-5));
    } catch (error) {
        console.log(`Caught: ${error.message}`);
    }
}

run();
```

### Task 4 (Task4.js):
```javascript
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];
            resolve(users);
        }, 100);
    });
}

async function displayUsers() {
    const users = await getUsers();
    users.forEach((user) => {
        console.log(user.name);
    });
}

displayUsers();
```

## 7. Input:
Task 1: marks = 80.
Task 2: marks = 120.
Task 3: marks = 65, marks = -5.
Task 4: Local mock records for Asha, Rohan, Meera.

## 8. Output:
### Task 1 Output:
```text
Resolved value: 80
```

### Task 2 Output:
```text
Rejection error: Marks out of range
```

### Task 3 Output:
```text
65
Caught: Marks out of range
```

### Task 4 Output:
```text
Asha
Rohan
Meera
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 15.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 15.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 15.3: Task 3 Output*

![Task 4 Output](images/Task4_output.png)
*Figure 15.4: Task 4 Output*

## 9. Result:
The experiment was performed successfully. Promise fulfillment, rejection error trapping, and synchronous-style async/await workflows with local data were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. What are the three states of a JavaScript Promise?**  
*Ans:* Pending (initial state, neither fulfilled nor rejected), Fulfilled (operation completed successfully), and Rejected (operation failed).

**Q2. How does async/await simplify Promise handling?**  
*Ans:* async/await allows writing asynchronous, promise-based code in a sequential, synchronous-looking style without nested .then() and .catch() chains.

**Q3. Can 'await' be used outside of an 'async' function?**  
*Ans:* Historically no; however, Top-Level Await is supported in ES Modules (ECMAScript 2022+) at the root level of a module.

**Q4. What happens if an error is thrown inside an async function without a try...catch block?**  
*Ans:* The returned Promise from the async function will be rejected with that error, which must then be handled with a .catch() on the caller.
