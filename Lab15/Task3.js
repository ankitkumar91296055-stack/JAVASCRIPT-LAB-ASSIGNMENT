/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 3
*/

// Task 3: Async/await with try...catch error handling
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

async function run() {
    try {
        console.log(await checkMarks(65));
        console.log(await checkMarks(-5));
    } catch (error) {
        console.log(`Caught: ${error.message}`);
    }
}

// Call run()
run();
