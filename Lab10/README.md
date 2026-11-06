# EXPERIMENT NO. 10

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Objects and Destructuring**

## 2. Aim:
To demonstrate JavaScript object property manipulation, in-place mutation, and ES6 array and object destructuring syntax.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Object Properties & Mutation**: JavaScript objects are dynamic dictionaries of key-value pairs. Even when declared with `const`, properties of an object can be mutated in-place.
2. **Array Destructuring**: An ES6 syntax that unpacks values from arrays or iterables into distinct variables based on positional ordering: `const [a, b] = array`.
3. **Object Destructuring**: An ES6 syntax that extracts values from objects and binds them to variables matching property key names: `const { key1, key2 } = object`.

## 5. Algorithm / Procedure:
1. **Task 1**: Create student object with `name: "Rohan"`, `roll: 12`, `marks: 78`. Print name. Update marks to 81 and print marks again.
2. **Task 2**: Create array `["Maths", "Science", "English"]`. Use array destructuring to extract `first` and `second` elements. Print both separately.
3. **Task 3**: Create student object with `name: "Rohan"`, `roll: 12`, `marks: 81`. Use object destructuring to unpack `name` and `roll`. Print both separately.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const student = {
    name: "Rohan",
    roll: 12,
    marks: 78
};

console.log(student.name);

student.marks = 81;

console.log(student.marks);
```

### Task 2 (Task2.js):
```javascript
const subjects = ["Maths", "Science", "English"];

const [first, second] = subjects;

console.log(first);
console.log(second);
```

### Task 3 (Task3.js):
```javascript
const student = {
    name: "Rohan",
    roll: 12,
    marks: 81
};

const { name, roll } = student;

console.log(name);
console.log(roll);
```

## 7. Input:
Task 1: Object { name: 'Rohan', roll: 12, marks: 78 }.
Task 2: Array ['Maths', 'Science', 'English'].
Task 3: Object { name: 'Rohan', roll: 12, marks: 81 }.

## 8. Output:
### Task 1 Output:
```text
Rohan
81
```

### Task 2 Output:
```text
Maths
Science
```

### Task 3 Output:
```text
Rohan
12
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 10.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 10.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 10.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Object manipulation, variable reassignment within objects, and array and object destructuring were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. Why can properties of an object declared with 'const' be modified?**  
*Ans:* const creates an immutable variable binding (the reference cannot point to a different object or memory address), but the object contents itself remain mutable.

**Q2. How can you rename variables while destructuring an object?**  
*Ans:* By using the colon syntax: const { name: studentName } = student binds the property 'name' to a new local variable 'studentName'.

**Q3. How can default values be specified during destructuring?**  
*Ans:* Using the assignment operator syntax: const { marks = 0 } = student assigns 0 if marks is undefined.

**Q4. How do you skip elements during array destructuring?**  
*Ans:* By leaving a blank comma separator: const [first, , third] = array skips the second element.
