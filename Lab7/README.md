# EXPERIMENT NO. 07

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Constructor Functions and Classes**

## 2. Aim:
To implement object instantiation using constructor functions, modern ES6 classes, and prototypal method attachment via prototype.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Constructor Functions**: Conventional JavaScript functions invoked with `new` to initialize newly created object instances and bind properties using `this`.
2. **ES6 Classes**: Syntactic sugar over JavaScript's existing prototype-based inheritance model, providing clean syntax for constructors, methods, and encapsulation.
3. **Prototypes**: Objects inherit properties and methods from a prototype object. Methods added to `Constructor.prototype` are shared across all instances without replicating memory allocation.

## 5. Algorithm / Procedure:
1. **Task 1**: Define constructor function `Student(name, marks)`. Instantiate student `"Asha"` with marks `88`. Print name and marks on separate lines.
2. **Task 2**: Define ES6 class `Book` with constructor taking `title` and `pages`, and method `summary()` returning `"${title} has ${pages} pages"`. Instantiate `"Algorithms", 320` and print summary.
3. **Task 3**: Define constructor `Student`. Add method `result()` to `Student.prototype` that returns `"Pass"` if marks >= 40, else `"Fail"`. Instantiate Asha with 88 marks and print result.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

const student1 = new Student("Asha", 88);

console.log(student1.name);
console.log(student1.marks);
```

### Task 2 (Task2.js):
```javascript
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return `${this.title} has ${this.pages} pages`;
    }
}

const book1 = new Book("Algorithms", 320);

console.log(book1.summary());
```

### Task 3 (Task3.js):
```javascript
function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const student1 = new Student("Asha", 88);

console.log(student1.result());
```

## 7. Input:
Task 1: name = 'Asha', marks = 88.
Task 2: title = 'Algorithms', pages = 320.
Task 3: name = 'Asha', marks = 88.

## 8. Output:
### Task 1 Output:
```text
Asha
88
```

### Task 2 Output:
```text
Algorithms has 320 pages
```

### Task 3 Output:
```text
Pass
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 7.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 7.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 7.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Object creation using constructor functions, ES6 class syntax, and prototypal method sharing were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. What happens when a constructor function is invoked with the 'new' keyword?**  
*Ans:* Four things happen: a brand new empty object is created, its [[Prototype]] link is set to Constructor.prototype, this is bound to the new object, and the object is returned automatically (unless the constructor returns another object).

**Q2. Why is adding methods to the prototype better than declaring them inside the constructor?**  
*Ans:* Attaching methods to prototype shares a single memory copy of the function across all instances, saving memory compared to recreating function closures inside every instance.

**Q3. What is prototype chaining in JavaScript?**  
*Ans:* When accessing a property on an object, JavaScript checks the object itself; if missing, it traverses up its prototype chain until the property is found or null is reached.

**Q4. Are ES6 classes real class types or syntactic sugar?**  
*Ans:* They are primarily syntactic sugar over JavaScript's existing prototype-based inheritance and constructor function mechanism.
