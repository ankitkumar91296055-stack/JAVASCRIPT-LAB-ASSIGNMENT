/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 2
*/

// Task 2: Array some() and every() methods
const marks = [72, 85, 30, 90];

// Check whether any mark is below 40
const hasBelow40 = marks.some((mark) => mark < 40);

// Check whether all marks are 35 or more
const allAtLeast35 = marks.every((mark) => mark >= 35);

console.log("Any mark below 40:", hasBelow40);
console.log("All marks 35 or more:", allAtLeast35);
