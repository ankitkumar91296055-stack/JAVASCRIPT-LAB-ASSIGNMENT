/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 3
Task Number: 3
*/

// Task 3: While loop to accumulate 1, 2, 3... until total > 20
let total = 0;
let nextNumber = 1;

while (total <= 20) {
    total += nextNumber;
    nextNumber++;
}

console.log("Final Total:", total);
