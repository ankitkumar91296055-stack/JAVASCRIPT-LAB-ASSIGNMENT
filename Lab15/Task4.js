/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 4
*/

// Task 4: Promise with local mock data and async/await consumption
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "Asha" },
                { id: 2, name: "Rohan" },
                { id: 3, name: "Meera" }
            ];
            resolve(users);
        }, 100);
    });
}

async function displayUsers() {
    const users = await getUsers();
    users.forEach((user) => {
        console.log(user.name);
    });
}

// Call the function
displayUsers();
