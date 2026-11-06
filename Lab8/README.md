# EXPERIMENT NO. 08

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Inheritance, Methods and Composition**

## 2. Aim:
To demonstrate object-oriented inheritance using extends and super, method encapsulation, and object composition (has-a relation).

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Inheritance**: Subclassing with `extends` allows a child class to inherit methods and properties from a parent class. The `super()` call invokes the parent constructor.
2. **Encapsulation**: Bundling data and methods operating on that data within classes, validating parameters internally (such as checking private/internal PIN values).
3. **Object Composition**: Designing objects to contain instances of other objects ('has-a' relationship) as an alternative to classical inheritance ('is-a' relationship).

## 5. Algorithm / Procedure:
1. **Task 1**: Create class `Person` with method `greet()`. Create class `Teacher` extending `Person` with property `subject` and overridden `greet()`. Instantiate teacher Anita teaching Maths and print her greeting.
2. **Task 2**: Create class `Locker` with PIN `1234`. Add method `checkPin(number)` returning `true` on match, else `false`. Test with `1111` and `1234`.
3. **Task 3**: Create class `Engine` storing `power`. Create class `Car` that instantiates an `Engine` internally. Provide `start()` returning `"Car starts with ${power} HP"`. Instantiate with 150 HP and test.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
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
        super(name);
        this.subject = subject;
    }

    greet() {
        return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
    }
}

const teacher1 = new Teacher("Anita", "Maths");
console.log(teacher1.greet());
```

### Task 2 (Task2.js):
```javascript
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
```

### Task 3 (Task3.js):
```javascript
class Engine {
    constructor(power) {
        this.power = power;
    }
}

class Car {
    constructor(power) {
        this.engine = new Engine(power);
    }

    start() {
        return `Car starts with ${this.engine.power} HP`;
    }
}

const myCar = new Car(150);

console.log(myCar.start());
```

## 7. Input:
Task 1: Teacher name = 'Anita', subject = 'Maths'.
Task 2: pin = 1234, checks for 1111 and 1234.
Task 3: Car with Engine power = 150.

## 8. Output:
### Task 1 Output:
```text
Hello, my name is Anita and I teach Maths.
```

### Task 2 Output:
```text
false
true
```

### Task 3 Output:
```text
Car starts with 150 HP
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 8.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 8.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 8.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Class inheritance, method overriding, state validation, and component composition were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. What is the purpose of the super keyword in a derived class?**  
*Ans:* super() calls the constructor of the parent class, ensuring inherited properties are initialized correctly before accessing 'this' in the subclass.

**Q2. What is the difference between composition and inheritance?**  
*Ans:* Inheritance creates an 'is-a' hierarchy where a child derives from a parent. Composition creates a 'has-a' relationship where an object delegates behavior to internal component objects, offering greater flexibility and loose coupling.

**Q3. What is method overriding?**  
*Ans:* Method overriding occurs when a subclass defines a method with the same name as a method in its superclass, replacing or extending the parent's default implementation.

**Q4. Why is composition often favored over deep inheritance hierarchies?**  
*Ans:* Composition avoids fragile base class problems, prevents tight coupling between parent and child classes, and makes code easier to test and refactor.
