/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 2
*/

// Task 2: Encapsulation and validation method
class Locker {
    constructor() {
        this.pin = 1234;
    }

    checkPin(number) {
        return number === this.pin;
    }
}

const myLocker = new Locker();

console.log(myLocker.checkPin(1111));
console.log(myLocker.checkPin(1234));
