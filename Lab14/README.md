# EXPERIMENT NO. 14

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**Timers and Intervals**

## 2. Aim:
To explore JavaScript asynchronous scheduling using setTimeout, clearTimeout, setInterval, and clearInterval, and understand the Event Loop.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **Concurrency and Event Loop**: JavaScript has a single-threaded runtime model based on an Event Loop. Synchronous code on the Call Stack runs to completion before tasks from the Callback Queue are dequeued.
2. **setTimeout(callback, delay)**: Schedules a callback to be executed once after the specified delay in milliseconds. Even with `0ms`, the callback is deferred until the synchronous call stack is empty.
3. **clearTimeout(id)**: Cancels a timeout previously established by calling `setTimeout()`.
4. **setInterval() & clearInterval()**: Repeatedly calls a function with a fixed time delay between each call until explicitly cancelled with `clearInterval()`.

## 5. Algorithm / Procedure:
1. **Task 1**: Log `"Start"`. Schedule `setTimeout()` with 0ms to log `"Timer done"`. Log `"End"`. Observe the non-blocking execution order.
2. **Task 2**: Schedule `setTimeout()` for 1000ms with message `"Not shown"`. Store the timer ID and immediately invoke `clearTimeout(timerId)`. Print `"Cancelled"`.
3. **Task 3**: Use `setInterval()` with 200ms delay to print `"Tick 1"`, `"Tick 2"`, and `"Tick 3"`. Increment a counter and stop using `clearInterval()` when the counter reaches 3.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

console.log("End");
```

### Task 2 (Task2.js):
```javascript
const timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");
```

### Task 3 (Task3.js):
```javascript
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Tick ${count}`);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
```

## 7. Input:
Task 1: Timer delay 0 ms.
Task 2: Timer delay 1000 ms with immediate cancellation.
Task 3: Interval 200 ms with termination limit count = 3.

## 8. Output:
### Task 1 Output:
```text
Start
End
Timer done
```

### Task 2 Output:
```text
Cancelled
```

### Task 3 Output:
```text
Tick 1
Tick 2
Tick 3
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 14.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 14.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 14.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. The asynchronous event loop priority, timer clearing via clearTimeout, and repeated execution management with setInterval/clearInterval were verified.

## 10. Viva-Voce Questions:
**Q1. Why does setTimeout(..., 0) execute after console.log('End')?**  
*Ans:* Because setTimeout schedules its callback into the Macrotask Queue. The Event Loop only processes tasks from the queue after the synchronous Call Stack has completely cleared.

**Q2. What is returned by setTimeout() and setInterval() in Node.js vs the browser?**  
*Ans:* In web browsers, they return an integer timer ID. In Node.js, they return a Timeout or Interval object containing internal timer metadata.

**Q3. What happens if setInterval() callback execution takes longer than the interval time?**  
*Ans:* In older engines, callbacks can queue up without delay. Modern implementations avoid overlapping runs, but heavy tasks cause timer drift.

**Q4. What is the difference between Macrotasks and Microtasks?**  
*Ans:* Microtasks (Promise callbacks, queueMicrotask) have higher priority and are all executed before the next Macrotask (setTimeout, setInterval, I/O).
