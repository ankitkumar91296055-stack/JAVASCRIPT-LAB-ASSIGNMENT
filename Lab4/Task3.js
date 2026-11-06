/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 4
Task Number: 3
*/

// Task 3: Function with default parameter taxRate = 0.18
function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));
