# EXPERIMENT NO. 12

> **Student Name:** Ankit Kumar 
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Callbacks and Higher-Order Functions**

## 2. Aim:
To demonstrate functional programming patterns using higher-order functions (functions accepting functions as arguments) and callback execution.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **First-Class Functions**: In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
2. **Higher-Order Functions**: Functions that receive another function as an argument or return a function as their result.
3. **Callbacks**: Functions passed into another function to be invoked at a designated point in execution.

## 5. Algorithm / Procedure:
1. **Task 1**: Implement `applyTwice(fn, value)` which applies `fn` twice: `fn(fn(value))`. Implement `addTen(num)`. Call and print `applyTwice(addTen, 5)`.
2. **Task 2**: Implement `formatMarks(marks, callback)`. Invoke it with 76 and an arrow callback that returns `"Marks: ${m}/100"`. Print result.
3. **Task 3**: Implement `repeatAction(times, action)`. Use a loop from 1 to `times`, invoking `action(round)`. Call with 3 and log `"Round ${round}"`.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));
```

### Task 2 (Task2.js):
```javascript
function formatMarks(marks, callback) {
    return callback(marks);
}

const result = formatMarks(76, (m) => `Marks: ${m}/100`);

console.log(result);
```

### Task 3 (Task3.js):
```javascript
function repeatAction(times, action) {
    for (let round = 1; round <= times; round++) {
        action(round);
    }
}

repeatAction(3, (round) => {
    console.log(`Round ${round}`);
});
```

## 7. Input:
Task 1: value = 5, fn = addTen.
Task 2: marks = 76 with custom arrow callback.
Task 3: times = 3 with logging callback.

## 8. Output:
### Task 1 Output:
```text
25
```

### Task 2 Output:
```text
Marks: 76/100
```

### Task 3 Output:
```text
Round 1
Round 2
Round 3
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 12.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 12.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 12.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Higher-order function delegation, callback execution, and function parameter passing were demonstrated and verified.

## 10. Viva-Voce Questions:
**Q1. What defines a Higher-Order Function (HOF) in JavaScript?**  
*Ans:* A Higher-Order Function is a function that either accepts one or more functions as arguments, returns a function as its result, or both.

**Q2. What is 'Callback Hell' and how can it be avoided?**  
*Ans:* Callback Hell refers to heavily nested callbacks resulting in unreadable 'pyramid of doom' code. It is avoided using Promises and async/await.

**Q3. What is the difference between synchronous and asynchronous callbacks?**  
*Ans:* A synchronous callback executes immediately within the calling function's lifecycle (e.g., in Array.forEach). An asynchronous callback is pushed to the task queue and executes after asynchronous completion (e.g., in setTimeout).

**Q4. What is function currying?**  
*Ans:* Currying is a technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.
