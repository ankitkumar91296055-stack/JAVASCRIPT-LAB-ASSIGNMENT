# EXPERIMENT NO. 11

> **Student Name:** Ankit Kumar   
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Scope and Closures**

## 2. Aim:
To demonstrate scope hierarchies (global, local, and block scope), variable shadowing with let, and lexical state retention using closures.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Scope in JavaScript**: Scope determines accessibility of variables. JavaScript features Global scope, Function scope, and ES6 Block scope delimited by `{}` with `let` and `const`.
2. **Variable Shadowing**: When a variable declared within an inner block has the same identifier as a variable in an outer scope, the inner declaration shadows the outer one within that block.
3. **Closures**: A closure is the combination of a function bundled together with references to its surrounding lexical environment. An inner function retains access to outer variables even after the outer function has completed execution.

## 5. Algorithm / Procedure:
1. **Task 1**: Declare `level = "outer"`. Inside a `{}` block declare `level = "inner"`. Print inside block, then print outside block to show shadowing.
2. **Task 2**: Implement `makeCounter()` with `count = 0` returning an inner function that increments and returns `count`. Invoke twice and print results.
3. **Task 3**: Declare global variable `school = "Sample College"`. Create function `showSchool()` printing `"Welcome to " + school`. Call `showSchool()`.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);
```

### Task 2 (Task2.js):
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
```

### Task 3 (Task3.js):
```javascript
const school = "Sample College";

function showSchool() {
    console.log("Welcome to " + school);
}

showSchool();
```

## 7. Input:
Task 1: Scope strings 'outer' and 'inner'.
Task 2: Sequential invocations of counter closure.
Task 3: Global variable school = 'Sample College'.

## 8. Output:
### Task 1 Output:
```text
inner
outer
```

### Task 2 Output:
```text
1
2
```

### Task 3 Output:
```text
Welcome to Sample College
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 11.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 11.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 11.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Block scope isolation, lexical closures maintaining internal private state, and global scope access were verified.

## 10. Viva-Voce Questions:
**Q1. What is a closure in JavaScript?**  
*Ans:* A closure is a function that remembers and accesses variables from its lexical scope even when the function is executed outside that lexical scope.

**Q2. What is the Temporal Dead Zone (TDZ)?**  
*Ans:* The TDZ is the period between the start of a block and the declaration of a let or const variable during which accessing the variable throws a ReferenceError.

**Q3. Can variables inside a closure be modified directly from outside the enclosing function?**  
*Ans:* No, closure variables are private and can only be read or modified through the methods or inner functions provided by the closure.

**Q4. What are common use cases for closures?**  
*Ans:* Data privacy/encapsulation, function currying, factory functions, event handlers, and callback state maintenance.
