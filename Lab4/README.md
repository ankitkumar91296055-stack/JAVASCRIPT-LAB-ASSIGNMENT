# EXPERIMENT NO. 04

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392  
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Writing Functions**

## 2. Aim:
To define traditional function declarations, implement ES6 arrow functions, and utilize default function parameters.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Function Declaration**: A named block of code declared with the `function` keyword that can be invoked multiple times and is hoisted to the top of its scope.
2. **ES6 Arrow Functions**: A concise syntax for writing function expressions using `=>`. Arrow functions do not bind their own `this`, `arguments`, or `super`, making them ideal for short helper functions.
3. **Default Parameters**: ES6 allows formal parameters to be initialized with default values if no value or `undefined` is passed during invocation.

## 5. Algorithm / Procedure:
1. **Task 1**: Write function `greet(name)` returning `"Hello, " + name`. Call and print `greet("Asha")`.
2. **Task 2**: Write arrow function `square = (n) => n * n`. Call and print `square(6)`.
3. **Task 3**: Write function `billWithTax(amount, taxRate = 0.18)` returning `amount + (amount * taxRate)`. Call and print `billWithTax(100)`.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Asha"));
```

### Task 2 (Task2.js):
```javascript
const square = (n) => n * n;

console.log(square(6));
```

### Task 3 (Task3.js):
```javascript
function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));
```

## 7. Input:
Task 1: name = 'Asha'.
Task 2: n = 6.
Task 3: amount = 100, default taxRate = 0.18.

## 8. Output:
### Task 1 Output:
```text
Hello, Asha
```

### Task 2 Output:
```text
36
```

### Task 3 Output:
```text
118
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 4.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 4.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 4.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Function definitions, arrow function syntax, and default argument assignment were verified.

## 10. Viva-Voce Questions:
**Q1. What is function hoisting in JavaScript?**  
*Ans:* Function declarations are hoisted entirely to the top of their enclosing scope, allowing them to be called before their definition in the code. Function expressions and arrow functions are not hoisted in the same manner.

**Q2. How does the 'this' keyword behave differently in arrow functions vs regular functions?**  
*Ans:* Regular functions bind their own this context dynamically based on how they are invoked. Arrow functions lexically capture the this value of their enclosing scope.

**Q3. What occurs if an argument is omitted when calling a function with a default parameter?**  
*Ans:* If the parameter is omitted or passed as undefined, JavaScript assigns the specified default fallback value.

**Q4. Can an arrow function be used as a constructor with the 'new' keyword?**  
*Ans:* No, arrow functions do not have a [[Construct]] internal method or a prototype property, so attempting to invoke them with new throws a TypeError.
