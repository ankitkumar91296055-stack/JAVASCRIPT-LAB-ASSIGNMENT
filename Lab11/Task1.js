/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 11
Task Number: 1
*/

// Task 1: Block scope vs outer scope (variable shadowing with let)
let level = "outer";

{
    // Inside block scope
    let level = "inner";
    console.log(level);
}

// Outside block scope
console.log(level);
