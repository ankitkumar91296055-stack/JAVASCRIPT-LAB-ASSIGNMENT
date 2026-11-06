/*
Student Name: Ankit Kumar 
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 12
Task Number: 2
*/

// Task 2: Function accepting a formatting callback
function formatMarks(marks, callback) {
    return callback(marks);
}

// Invoke formatMarks with 76 and an arrow callback
const result = formatMarks(76, (m) => `Marks: ${m}/100`);

console.log(result);
