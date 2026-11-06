/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 2
Task Number: 3
*/

// Function to calculate and print based on operator using if / else if
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

// First check with operator "+"
let op = "+";
console.log("Initial check:");
calculate(a, b, op);

// Change operator to "-" and repeat the check
op = "-";
console.log("After changing operator:");
calculate(a, b, op);
