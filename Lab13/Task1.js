/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 13
Task Number: 1
*/

// Task 1: Array reduce with initial value 0 to calculate cumulative sum
const prices = [120, 45, 300];

const total = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

console.log("Total:", total);
