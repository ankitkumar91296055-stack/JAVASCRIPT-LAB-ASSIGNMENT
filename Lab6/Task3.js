/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 6
Task Number: 3
*/

// Task 3: Handle JSON parsing error using try...catch block
const invalidJson = "{name: Rohan}";

try {
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
