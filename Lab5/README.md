# EXPERIMENT NO. 05

> **Student Name:** Ankit Kumar 
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Arrays, Array Methods and Nested Arrays**

## 2. Aim:
To demonstrate JavaScript array initialization, traversal using forEach, element filtering with filter, and indexing multidimensional (nested) arrays.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Array Structure**: JavaScript arrays are high-level, list-like objects whose prototype provides methods for traversal and mutation operations. Arrays use zero-based indexing.
2. **Array Traversal with forEach()**: Executes a provided callback function once for each array element without returning a new array.
3. **Filtering with filter()**: Creates a shallow copy of a portion of a given array, filtered down to just the elements from the array that pass the predicate function test.
4. **Multidimensional Arrays**: Arrays nested within arrays, accessed through successive index chains like `matrix[row][col]`.

## 5. Algorithm / Procedure:
1. **Task 1**: Create `marks = [72, 85, 64, 90]`. Log the `length` property and first element at index `0`.
2. **Task 2**: Create `subjects = ["Maths", "Science", "English"]`. Traverse and print every subject using `forEach()`.
3. **Task 3**: Create `marks = [72, 85, 45, 90]`. Use `filter()` to extract marks >= 60 into a new array and log it.
4. **Task 4**: Create a 2D array `grid = [[1, 2, 3], [4, 5, 6]]`. Retrieve and print the element in row 2 and column 3 (`grid[1][2]`).

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const marks = [72, 85, 64, 90];

console.log("Number of items:", marks.length);
console.log("First mark:", marks[0]);
```

### Task 2 (Task2.js):
```javascript
const subjects = ["Maths", "Science", "English"];

subjects.forEach(function(subject) {
    console.log(subject);
});
```

### Task 3 (Task3.js):
```javascript
const marks = [72, 85, 45, 90];

const filteredMarks = marks.filter((mark) => mark >= 60);

console.log(filteredMarks);
```

### Task 4 (Task4.js):
```javascript
const grid = [
    [1, 2, 3],
    [4, 5, 6]
];

const number = grid[1][2];

console.log(number);
```

## 7. Input:
Task 1: [72, 85, 64, 90].
Task 2: ['Maths', 'Science', 'English'].
Task 3: [72, 85, 45, 90] with condition >= 60.
Task 4: 2x3 matrix grid.

## 8. Output:
### Task 1 Output:
```text
Number of items: 4
First mark: 72
```

### Task 2 Output:
```text
Maths
Science
English
```

### Task 3 Output:
```text
[ 72, 85, 90 ]
```

### Task 4 Output:
```text
6
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 5.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 5.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 5.3: Task 3 Output*

![Task 4 Output](images/Task4_output.png)
*Figure 5.4: Task 4 Output*

## 9. Result:
The experiment was performed successfully. Array manipulation, functional traversal, predicate filtering, and multidimensional indexing were executed and verified.

## 10. Viva-Voce Questions:
**Q1. What is the difference between forEach() and map() in JavaScript?**  
*Ans:* forEach() simply iterates over elements and executes a callback without returning a value (returns undefined). map() returns a new array composed of the return values of the callback function for each element.

**Q2. Does filter() mutate the original array?**  
*Ans:* No, filter() is a non-mutating pure method that returns a brand new array containing only elements satisfying the test condition.

**Q3. How does JavaScript handle multidimensional arrays?**  
*Ans:* JavaScript does not provide native multidimensional arrays; instead, they are implemented as 'arrays of arrays' where an array holds references to other array instances.

**Q4. What is the time complexity of accessing an array element by index in JavaScript?**  
*Ans:* Accessing an element by index has O(1) constant time complexity.
