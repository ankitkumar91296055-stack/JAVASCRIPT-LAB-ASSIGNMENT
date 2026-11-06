/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 1
*/

// Task 1: Class inheritance using extends and super
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name); // Call parent constructor
        this.subject = subject;
    }

    greet() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }
}

// Create Anita who teaches Maths and print her greeting
const teacher1 = new Teacher("Anita", "Maths");
console.log(teacher1.greet());
