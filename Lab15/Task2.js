/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 2
*/

// Task 2: Handling promise rejection
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

// Call checkMarks(120) and print rejection error message
checkMarks(120)
    .then((val) => {
        console.log("Resolved value:", val);
    })
    .catch((err) => {
        console.log("Rejection error:", err.message);
    });
