/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 14
Task Number: 3
*/

// Task 3: Repeated execution with setInterval and cancellation with clearInterval
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Tick ${count}`);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
