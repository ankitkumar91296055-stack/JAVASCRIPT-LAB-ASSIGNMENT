/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 7
Task Number: 1
*/

// Task 1: Constructor function Student
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

// Instantiate object with Asha, marks 88
const student1 = new Student("Asha", 88);

console.log(student1.name);
console.log(student1.marks);
