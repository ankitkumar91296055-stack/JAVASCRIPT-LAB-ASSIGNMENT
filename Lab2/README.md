# EXPERIMENT NO. 02

> **Student Name:** Ankit Kumar  
> **Student ID:** BCS2025392  
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Operators, Type Conversion and a Calculator**

## 2. Aim:
To demonstrate arithmetic operators, explicit and implicit type casting, and conditional operator evaluation using if and else-if control statements.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Arithmetic Operators**: JavaScript provides binary operators for addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
2. **Type Conversion**:
   - **Explicit Conversion**: Using built-in wrappers such as `Number()` to convert text to numeric values, and `String()` to convert values to strings.
   - **Implicit Conversion (Coercion)**: When a number is concatenated with a string using `+`, JavaScript coerces the number into a string.
3. **Conditional Branching**: The `if-else if-else` construct allows selecting different execution paths based on boolean conditions.

## 5. Algorithm / Procedure:
1. **Task 1**: Assign 17 and 5 to variables. Calculate and print sum (+), difference (-), product (*), and quotient (/).
2. **Task 2**: Convert string `"12"` to number with `Number()`, add 5, and print. Convert number 7 to string with `String()`, concatenate with `"3"`, and print.
3. **Task 3**: Create numbers 8 and 4 with operator `"+"`. Implement an `if-else if` check to print the sum for `+` and difference for `-`. Change operator to `"-"` and re-run.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const num1 = 17;
const num2 = 5;

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
```

### Task 2 (Task2.js):
```javascript
// Part 1: Convert text "12" to number, add 5
const textNumber = "12";
const convertedNumber = Number(textNumber);
const additionResult = convertedNumber + 5;
console.log("Converted '12' to number + 5 =", additionResult);

// Part 2: Convert number 7 to text, concatenate with "3"
const originalNumber = 7;
const convertedString = String(originalNumber);
const concatenatedResult = convertedString + "3";
console.log("Converted 7 to string + '3' =", concatenatedResult);
```

### Task 3 (Task3.js):
```javascript
function calculate(num1, num2, operator) {
    if (operator === "+") {
        console.log(`Operator is '${operator}': Sum = ${num1 + num2}`);
    } else if (operator === "-") {
        console.log(`Operator is '${operator}': Difference = ${num1 - num2}`);
    } else {
        console.log("Unsupported operator");
    }
}

const a = 8;
const b = 4;

let op = "+";
console.log("Initial check:");
calculate(a, b, op);

op = "-";
console.log("After changing operator:");
calculate(a, b, op);
```

## 7. Input:
Task 1: num1 = 17, num2 = 5.
Task 2: textNumber = '12', originalNumber = 7.
Task 3: a = 8, b = 4, op = '+' then op = '-'.

## 8. Output:
### Task 1 Output:
```text
Sum: 22
Difference: 12
Product: 85
Quotient: 3.4
```

### Task 2 Output:
```text
Converted '12' to number + 5 = 17
Converted 7 to string + '3' = 73
```

### Task 3 Output:
```text
Initial check:
Operator is '+': Sum = 12
After changing operator:
Operator is '-': Difference = 4
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 2.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 2.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 2.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Arithmetic evaluations, string-to-number and number-to-string type conversions, and conditional logic checks were executed and validated.

## 10. Viva-Voce Questions:
**Q1. What is the difference between == and === in JavaScript?**  
*Ans:* == is the loose equality operator which performs type coercion before comparison. === is the strict equality operator which checks both value and data type without coercion.

**Q2. What is type coercion in JavaScript?**  
*Ans:* Type coercion is the automatic or implicit conversion of values from one data type to another (e.g., '5' + 2 results in '52').

**Q3. What does Number('abc') return in JavaScript?**  
*Ans:* It returns NaN (Not-a-Number), indicating that the string could not be parsed into a valid numeric representation.

**Q4. What is the purpose of the modulus operator (%)?**  
*Ans:* The modulus operator returns the remainder of an integer division between two operands (e.g., 17 % 5 returns 2).
