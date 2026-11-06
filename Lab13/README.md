# EXPERIMENT NO. 13

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Reduce, Some, Every and Map**

## 2. Aim:
To demonstrate advanced functional iteration methods on JavaScript arrays including reduce for accumulation, some and every for boolean tests, and map for pure transformations.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Array.prototype.reduce()**: Executes a reducer function on each array element, resulting in a single output value accumulated from an initial starting value.
2. **Array.prototype.some()**: Tests whether at least one element in the array passes the condition implemented by the provided callback function, returning a boolean.
3. **Array.prototype.every()**: Tests whether all elements in the array pass the condition, returning true only if every element satisfies the condition.
4. **Array.prototype.map()**: Creates a new array populated with the results of calling a provided function on every element in the calling array without mutating original data.

## 5. Algorithm / Procedure:
1. **Task 1**: Create `prices = [120, 45, 300]`. Use `reduce()` starting with initial value `0` to compute total sum. Print the total.
2. **Task 2**: Create `marks = [72, 85, 30, 90]`. Use `some()` to check if any mark < 40. Use `every()` to check if all marks >= 35. Print both boolean results.
3. **Task 3**: Create `marks = [72, 85, 64, 90]`. Use `map()` to produce a new array where every mark is increased by 5. Print both new array and original array, confirming immutability.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const prices = [120, 45, 300];

const total = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
}, 0);

console.log("Total:", total);
```

### Task 2 (Task2.js):
```javascript
const marks = [72, 85, 30, 90];

const hasBelow40 = marks.some((mark) => mark < 40);
const allAtLeast35 = marks.every((mark) => mark >= 35);

console.log("Any mark below 40:", hasBelow40);
console.log("All marks 35 or more:", allAtLeast35);
```

### Task 3 (Task3.js):
```javascript
const originalMarks = [72, 85, 64, 90];

const updatedMarks = originalMarks.map((mark) => mark + 5);

console.log("New array:", updatedMarks);
console.log("Original array:", originalMarks);
```

## 7. Input:
Task 1: [120, 45, 300].
Task 2: [72, 85, 30, 90].
Task 3: [72, 85, 64, 90] with transformation (+5).

## 8. Output:
### Task 1 Output:
```text
Total: 465
```

### Task 2 Output:
```text
Any mark below 40: true
All marks 35 or more: false
```

### Task 3 Output:
```text
New array: [ 77, 90, 69, 95 ]
Original array: [ 72, 85, 64, 90 ]
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 13.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 13.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 13.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Accumulation with reduce, existential and universal quantification with some and every, and non-destructive mapping were verified.

## 10. Viva-Voce Questions:
**Q1. What happens if an initial value is not provided to reduce()?**  
*Ans:* If no initial value is provided, reduce() takes the element at index 0 as the initial accumulator and begins iteration from index 1. If called on an empty array without an initial value, a TypeError is thrown.

**Q2. Does some() stop iterating once it finds a true match?**  
*Ans:* Yes, some() short-circuits (early exit) as soon as the predicate returns true for an element, enhancing performance.

**Q3. What does every() return on an empty array?**  
*Ans:* It returns true for any condition because vacuously all elements satisfy the predicate.

**Q4. Why is immutability valued when manipulating arrays with map()?**  
*Ans:* Immutability prevents unexpected side effects across different parts of an application, facilitating predictable state management and easier debugging.
