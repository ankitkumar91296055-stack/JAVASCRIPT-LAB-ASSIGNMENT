/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 3
*/

// Task 3: Array immutability and transformation using map()
const originalMarks = [72, 85, 64, 90];

// Use map to create a new array with every mark increased by 5
const updatedMarks = originalMarks.map((mark) => mark + 5);

console.log("New array:", updatedMarks);
console.log("Original array:", originalMarks);
