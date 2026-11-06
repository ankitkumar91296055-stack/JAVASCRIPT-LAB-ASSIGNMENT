/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 1
*/

// Task 1: Create object and serialize to JSON text using JSON.stringify
const student = {
    name: "Rohan",
    marks: [70, 80]
};

const jsonString = JSON.stringify(student);
console.log(jsonString);
