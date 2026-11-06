# EXPERIMENT NO. 03

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Conditions and Loops**

## 2. Aim:
To implement conditional branching for grade computation and repetitive execution using for and while loops.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Multi-way Conditional Branching**: Combining `if`, `else if`, and `else` constructs allows selecting one out of several potential execution paths based on relational expressions.
2. **For Loop**: A count-controlled loop suitable when the number of iterations is known beforehand, comprising initialization, condition, and increment/decrement expressions.
3. **While Loop**: A condition-controlled loop that iterates as long as a specified test condition evaluates to true, suitable for accumulator patterns where iteration count depends on dynamic calculations.

## 5. Algorithm / Procedure:
1. **Task 1**: Assign marks = 72. Evaluate: Grade A for marks >= 75, Grade B for marks >= 60, Grade C otherwise. Print the grade.
2. **Task 2**: Implement a `for` loop starting at 1 and ending at 5 with step 1. Print each integer on a new line.
3. **Task 3**: Initialize `total = 0` and `nextNumber = 1`. In a `while` loop, add `nextNumber` to `total` and increment `nextNumber` until `total > 20`. Print the final total.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const marks = 72;

if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

### Task 2 (Task2.js):
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Task 3 (Task3.js):
```javascript
let total = 0;
let nextNumber = 1;

while (total <= 20) {
    total += nextNumber;
    nextNumber++;
}

console.log("Final Total:", total);
```

## 7. Input:
Task 1: marks = 72.
Task 2: Range 1 to 5.
Task 3: Sequence starting from 1 with condition total <= 20.

## 8. Output:
### Task 1 Output:
```text
Grade B
```

### Task 2 Output:
```text
1
2
3
4
5
```

### Task 3 Output:
```text
Final Total: 21
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 3.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 3.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 3.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Multi-way decision grading and iterative control flow with for and while loops were implemented and verified.

## 10. Viva-Voce Questions:
**Q1. What is the difference between a while loop and a do-while loop?**  
*Ans:* A while loop tests its condition before executing the loop body (entry-controlled), while a do-while loop executes the body at least once before testing the condition (exit-controlled).

**Q2. How does the break statement differ from continue in a loop?**  
*Ans:* break terminates the loop immediately and transfers control out of the loop construct, whereas continue skips the remaining statements of the current iteration and advances to the next iteration.

**Q3. What is an infinite loop and how can it be avoided?**  
*Ans:* An infinite loop never satisfies its termination condition. It can be avoided by ensuring the loop condition variables are properly initialized, updated, and guaranteed to reach a termination state.

**Q4. Can a for loop run without all three clauses: for (;;)?**  
*Ans:* Yes, all three expressions (initialization, condition, increment) in a for loop header are optional. Writing for (;;) creates an infinite loop unless terminated by break or return.
