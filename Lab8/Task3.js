/*
Student Name: Ankit Kumar
Student Id:-BCS2025392
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 8
Task Number: 3
*/

// Task 3: Object composition (Has-A relationship)
class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        // Composition: Car contains an instance of Engine
        this.engine = new Engine(power);
    }

    start() {
        return `Car starts with ${this.engine.power} HP`;
    }
}

// Create Car with power 150
const myCar = new Car(150);

console.log(myCar.start());
