# JavaScript Programming Lab (BCS354) - Master Practical Manual

> **Department of Computer Science & Engineering**  
> **Invertis University, Bareilly**  
> 
> - **Student Name:** Ankit Kumar
> - **Student ID:** BCS2025392
> - **Course:** B.Tech Computer Science & Engineering  
> - **Academic Year:** Second Year  
> - **Subject:** JavaScript Programming Lab  
> - **Subject Code:** BCS354  

---

## Portfolio Overview

This comprehensive repository contains the complete laboratory curriculum for **JavaScript Programming Lab (BCS354)**. It encompasses 15 structured laboratory experiments, implementing 49 individual tasks. Each lab folder contains standalone source files, dedicated user interface styling (where applicable), an experiment manual strictly complying with the **Standard Lab Practical Experiment Format**, and a reserved directory for visual output verification.

| Experiment No. | Experiment Title / Topic | Total Tasks | Directory Link | Key Concepts Covered |
| :---: | :--- | :---: | :---: | :--- |
| **01** | Your First JavaScript Script | 3 | [Lab 1 Manual](./Lab1/README.md) | `<script>` tag, console output, `const`/`let`, `typeof` operator |
| **02** | Operators, Type Conversion & Calculator | 3 | [Lab 2 Manual](./Lab2/README.md) | Arithmetic operators, explicit/implicit conversion, `if-else if` calculator |
| **03** | Conditions and Loops | 3 | [Lab 3 Manual](./Lab3/README.md) | Multi-way grading logic, `for` loops, `while` accumulator pattern |
| **04** | Writing Functions | 3 | [Lab 4 Manual](./Lab4/README.md) | Function declarations, ES6 arrow functions, default parameters |
| **05** | Arrays, Array Methods & Nested Arrays | 4 | [Lab 5 Manual](./Lab5/README.md) | Array indexing, `forEach` traversal, `filter()`, 2D matrix indexing |
| **06** | JSON Text | 3 | [Lab 6 Manual](./Lab6/README.md) | `JSON.stringify()`, `JSON.parse()`, `try...catch` exception handling |
| **07** | Constructor Functions and Classes | 3 | [Lab 7 Manual](./Lab7/README.md) | Constructor functions, ES6 `class` syntax, prototype methods |
| **08** | Inheritance, Methods and Composition | 3 | [Lab 8 Manual](./Lab8/README.md) | Class inheritance (`extends`/`super`), validation, object composition |
| **09** | DOM, Validation, Storage & Quiz | 4 | [Lab 9 Manual](./Lab9/README.md) | DOM manipulation, client-side validation, `localStorage`, interactive quiz |
| **10** | Objects and Destructuring | 3 | [Lab 10 Manual](./Lab10/README.md) | Object property mutation, array destructuring, object destructuring |
| **11** | Scope and Closures | 3 | [Lab 11 Manual](./Lab11/README.md) | Block scope & shadowing, stateful closures (`makeCounter`), global scope |
| **12** | Callbacks & Higher-Order Functions | 3 | [Lab 12 Manual](./Lab12/README.md) | Higher-order functions (`applyTwice`), callback formatting, repetition |
| **13** | Reduce, Some, Every and Map | 3 | [Lab 13 Manual](./Lab13/README.md) | `reduce` aggregation, `some` & `every` predicates, `map` immutability |
| **14** | Timers and Intervals | 3 | [Lab 14 Manual](./Lab14/README.md) | Event Loop (`setTimeout(0)`), `clearTimeout`, `setInterval` / `clearInterval` |
| **15** | Promises & Async/Await with Local Data | 4 | [Lab 15 Manual](./Lab15/README.md) | `Promise` resolution/rejection, `.catch()`, `async/await`, mock async data |

---

## Detailed Theoretical Foundations for All Labs

Below is the exhaustive, crucial technical and conceptual theory underpinning every lab experiment in this course.

```
                                  JAVASCRIPT RUNTIME ARCHITECTURE
  +-----------------------------------------------------------------------------------------------+
  |  JAVASCRIPT ENGINE (V8 / SpiderMonkey)                                                        |
  |  +----------------------------------+        +---------------------------------------------+  |
  |  |           MEMORY HEAP            |        |                 CALL STACK                  |  |
  |  |  (Objects, Closures, Variables)  |        |  (Execution Contexts: Global & Functions)   |  |
  |  +----------------------------------+        +---------------------------------------------+  |
  +-----------------------------------------------------------------------------------------------+
                                                 | Function Calls / Web API offloading
                                                 v
  +-----------------------------------------------------------------------------------------------+
  |  HOST ENVIRONMENT APIS (Browser DOM, Web Storage, Timers / Node.js Libuv & C++ Bindings)       |
  |  - DOM Tree (document)  - localStorage   - setTimeout / setInterval   - Console API           |
  +-----------------------------------------------------------------------------------------------+
                                                 | Callback Registration
                                                 v
  +-------------------------------------+        +---------------------------------------------+
  |        MICROTASK QUEUE              |        |           MACROTASK (TASK) QUEUE            |
  |  (Promise .then/.catch, queueMicro) |        |   (setTimeout, setInterval, I/O Events)     |
  +-------------------------------------+        +---------------------------------------------+
                     \                                      /
                      \                                    /
                       +----------------------------------+
                       |            EVENT LOOP            |
                       |  (Monitors Call Stack; dequeues  |
                       |   Microtasks first, then Macros) |
                       +----------------------------------+
```

---

### Lab 1: Your First JavaScript Script

#### 1. Execution Model and the V8 Engine
JavaScript is a lightweight, dynamically typed, prototype-based scripting language. Modern JavaScript runtimes (such as Google Chrome's V8 engine and Node.js) employ **Just-In-Time (JIT) compilation**. Source code is parsed into an **Abstract Syntax Tree (AST)**, compiled into bytecode by an interpreter (e.g., Ignition), and hot code paths are optimized into native machine instructions via an optimizing compiler (e.g., TurboFan).

#### 2. Embedding JavaScript in HTML
In web browsers, JavaScript is executed within the HTML Document Object Model:
- **Placement**: Placing `<script>` tags immediately prior to the closing `</body>` tag ensures that all HTML elements are parsed into DOM nodes before script execution begins, avoiding `null` references when querying elements.
- **Console API**: `console.log()` outputs data directly to the browser's developer console or standard output (`stdout`) in terminal environments, facilitating non-intrusive debugging.

#### 3. Variable Declaration Semantics: `var` vs. `let` vs. `const`
| Feature | `var` (Legacy ES5) | `let` (ES6+) | `const` (ES6+) |
| :--- | :--- | :--- | :--- |
| **Scope** | Function scope | Block scope `{}` | Block scope `{}` |
| **Hoisting** | Hoisted with `undefined` | Hoisted into **Temporal Dead Zone (TDZ)** | Hoisted into **Temporal Dead Zone (TDZ)** |
| **Re-declaration** | Allowed in same scope | Throws `SyntaxError` | Throws `SyntaxError` |
| **Re-assignment** | Allowed | Allowed | Forbidden (Throws `TypeError`) |

#### 4. JavaScript Type System & the `typeof` Operator
JavaScript classifies data into **Primitives** (stored by value on the stack) and **Objects** (stored by reference on the heap):
- **Primitives**: `string`, `number`, `boolean`, `undefined`, `symbol`, `bigint`, and `null`.
- **`typeof` Operator**: Evaluates the data type of an unevaluated operand.
- **The Historical Bug of `typeof null`**: In the original 1995 JavaScript implementation, values were represented with a 32-bit type tag. The type tag for object references was `000`. Because `null` was represented as the null pointer (`0x00`), `typeof null` returned `"object"`. This behavior is retained in modern ECMAScript standards for backward compatibility.

---

### Lab 2: Operators, Type Conversion and a Calculator

#### 1. Binary Arithmetic Operators
JavaScript supports standard mathematical operators:
- Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), Modulus (`%`), and Exponentiation (`**`).
- All numbers in standard JavaScript are 64-bit double-precision floating-point numbers adhering to the **IEEE 754** specification.

#### 2. Type Conversion: Explicit vs. Implicit Coercion
- **Explicit Conversion**: Programmatically converting types using constructor functions without `new`:
  - `Number("12")` converts the string `"12"` into the numeric value `12`. If conversion fails, `NaN` (Not-a-Number) is returned.
  - `String(7)` explicitly produces the string literal `"7"`.
- **Implicit Coercion**: Automatic conversion triggered by operator semantics.
  - The `+` operator functions both as numeric addition and string concatenation. If either operand is a string, JavaScript coerces the other operand to a string (e.g., `String(7) + "3" -> "73"`).
  - In contrast, subtraction (`-`), multiplication (`*`), and division (`/`) coerce string operands to numbers (e.g., `"12" - 2 -> 10`).

#### 3. Control Flow Branching (`if`, `else if`, `else`)
Conditional branching evaluates boolean expressions to determine execution paths:
- **Truthy and Falsy**: JavaScript treats values in boolean contexts as either truthy or falsy. Exactly eight values are falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. All other values (including non-empty strings, numbers, empty arrays `[]`, and empty objects `{}`) are truthy.

---

### Lab 3: Conditions and Loops

#### 1. Multi-Way Decision Structures
When multiple mutually exclusive conditions exist (such as academic grading bands: $\ge 75$, $\ge 60$, $< 60$), sequential `else if` ladders ensure that conditions are evaluated in strict priority order. Once a condition evaluates to `true`, its block executes and the remaining ladder is bypassed.

#### 2. Iteration Statements: `for` vs. `while`
- **Count-Controlled `for` Loop**:
  ```javascript
  for (initialization; condition; update) { ... }
  ```
  Executes a predetermined number of iterations. The loop variable initialized with `let` is locally scoped to the block of each iteration.
- **Condition-Controlled `while` Loop**:
  ```javascript
  while (condition) { ... }
  ```
  Evaluates the test condition prior to each iteration. It is suitable when the exact termination threshold is dynamically calculated at runtime (such as accumulating incremental integers until exceeding a target threshold).

#### 3. The Accumulator Pattern
An accumulator pattern maintains a running total across loop iterations:
1. Initialize accumulator variable (`total = 0`).
2. Iteratively add incoming values (`total += nextNumber`).
3. Update state variables (`nextNumber++`).
4. Terminate when the guard condition (`total <= 20`) evaluates to `false`.

---

### Lab 4: Writing Functions

#### 1. Functions as First-Class Citizens
In JavaScript, functions are first-class objects: they can be assigned to variables, passed as arguments to other functions, returned from functions, and assigned properties.

#### 2. Function Declarations vs. Arrow Functions
- **Function Declarations**:
  ```javascript
  function greet(name) { return "Hello, " + name; }
  ```
  Function declarations are hoisted entirely to the top of their scope, enabling invocation before their textual definition.
- **ES6 Arrow Functions (`=>`)**:
  ```javascript
  const square = (n) => n * n;
  ```
  Arrow functions provide concise syntax: single expressions feature implicit returns. Unlike regular functions:
  - Arrow functions do **not** bind their own `this`; they lexically inherit `this` from the enclosing execution context.
  - They lack the internal `arguments` object and prototype property.
  - They cannot be invoked with `new` as constructors.

#### 3. Default Parameter Semantics
ES6 introduced default parameter syntax:
```javascript
function billWithTax(amount, taxRate = 0.18) { ... }
```
Default parameters are evaluated at call time only if the corresponding argument is omitted or passed explicitly as `undefined`. Passing `null` or `0` will not trigger the default value.

---

### Lab 5: Arrays, Array Methods and Nested Arrays

#### 1. Memory Layout and Indexing
JavaScript arrays are high-level, list-like objects whose prototype provides traversal and mutation operations. Array elements are indexed using zero-based integer keys mapped as object properties. The `length` property dynamically reflects the highest index plus one.

#### 2. Declarative Iteration vs. Imperative Loops
- **`forEach(callback)`**: Iterates through each array element, invoking the callback with arguments `(element, index, array)`. Unlike traditional loops, `forEach` cannot be terminated early with `break` or `continue`.
- **`filter(predicate)`**: Performs pure, non-mutating extraction. It returns a new array containing exclusively those elements for which the predicate returns a truthy value, leaving the original array intact.

#### 3. Multidimensional (Nested) Arrays
JavaScript does not possess native multidimensional matrices. Instead, multidimensional structures are formed as arrays of arrays. Accessing elements follows chained index notation:
```javascript
const grid = [[1, 2, 3], [4, 5, 6]];
const val = grid[1][2]; // Row index 1, Column index 2 -> Value 6
```

---

### Lab 6: JSON (JavaScript Object Notation) Text

#### 1. The JSON Specification
JSON (RFC 8259) is a universal, language-agnostic, text-based data interchange format. While derived from JavaScript object syntax, JSON imposes strict structural rules:
- Property keys must be wrapped in standard double quotes (`"key"`). Single quotes and unquoted identifiers are illegal.
- Supported value types: strings, numbers, booleans, `null`, arrays, and objects. Functions, `undefined`, and Symbols are unsupported.

#### 2. Serialization and Deserialization
- **`JSON.stringify(value)`**: Serializes in-memory JavaScript objects into a valid JSON string. Unsupported types (e.g. functions, `undefined`) are omitted from objects or converted to `null` in arrays.
- **`JSON.parse(text)`**: Parses a JSON text string, reconstructing the corresponding JavaScript object graph.

#### 3. Robust Error Handling (`try...catch`)
Attempting to parse malformed JSON text throws an uncaught `SyntaxError`, which halts the JavaScript thread. Enclosing `JSON.parse()` within a `try...catch` block intercepts runtime exceptions, allowing graceful error recovery:
```javascript
try {
    const data = JSON.parse(malformedText);
} catch (error) {
    console.log("Invalid JSON");
}
```

---

### Lab 7: Constructor Functions and Classes

#### 1. Prototypal Inheritance Mechanics
JavaScript uses prototype-based inheritance rather than classical class-based inheritance. Every JavaScript object possesses an internal link (`[[Prototype]]`, accessible via `Object.getPrototypeOf()` or `__proto__`) pointing to another object from which it inherits properties and methods.

#### 2. Constructor Functions and the `new` Keyword
A constructor function initializes an object instance when invoked with the `new` operator:
1. A brand new empty object is created: `{}`.
2. The new object's `[[Prototype]]` link is assigned to `ConstructorFunction.prototype`.
3. The execution context (`this`) within the constructor is bound to the new instance.
4. If the constructor does not explicitly return an object, `this` is returned automatically.

```
  +----------------------+                     +---------------------------------+
  |  Constructor: Student|                     |    Student.prototype            |
  |  - name, marks       | ---- .prototype --> |    - result() function          |
  +----------------------+                     +---------------------------------+
             ^                                                  ^
             | new Student("Asha", 88)                          | [[Prototype]] link
  +----------------------+                                      |
  |  Instance: student1  | -------------------------------------+
  |  - name: "Asha"      |
  |  - marks: 88         |  student1.result() delegates up the prototype chain!
  +----------------------+
```

#### 3. Prototype Methods vs. In-Constructor Methods
Defining methods on `Student.prototype` (e.g. `Student.prototype.result = ...`) ensures that all instances share a single memory reference to the function, conserving memory compared to defining methods inside the constructor.

#### 4. ES6 `class` Syntax
ES6 classes provide cleaner syntactic sugar over prototype chains:
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
```
Under the hood, methods declared inside the class body are placed directly on `Book.prototype`.

---

### Lab 8: Inheritance, Methods and Composition

#### 1. Class Inheritance (`extends` and `super`)
- **`extends`**: Establishes prototypal inheritance between parent and child classes, linking both instance prototypes and constructor functions.
- **`super()`**: Invokes the parent class constructor. In derived class constructors, `this` cannot be accessed before calling `super()`.
- **Method Overriding**: Subclasses can redefine parent methods to extend or specialize behavior.

#### 2. Encapsulation and Data Validation
Classes can encapsulate business rules and secrets (such as PIN validation). Exposing accessor/validation methods like `checkPin(number)` allows external callers to verify credentials without exposing the raw internal data or allowing direct mutation.

#### 3. Object Composition vs. Inheritance ("Favor Composition over Inheritance")
- **Inheritance ("is-a")**: Tightly couples derived classes to base classes (e.g., `Teacher is a Person`).
- **Composition ("has-a")**: Assembles complex objects out of smaller, specialized components (e.g., `Car has an Engine`). Composition avoids rigid class hierarchies, enhances modularity, and simplifies unit testing.

---

### Lab 9: DOM Manipulation, Validation, Storage & Quiz

#### 1. The Document Object Model (DOM)
The browser translates HTML into a tree structure of C++ / JavaScript objects known as the DOM:
- Elements are accessed via `document.getElementById()` or CSS selector queries (`document.querySelector()`).
- Content is modified via `textContent` (safe against Cross-Site Scripting, XSS) or `innerHTML` (parses raw HTML).

#### 2. Event-Driven Architecture
User interactions trigger asynchronous DOM Events:
- `addEventListener("click", callback)` attaches event listeners without overwriting existing handlers.
- `DOMContentLoaded` ensures script execution only after the DOM hierarchy has been completely parsed.
- `event.preventDefault()` suppresses default browser actions (such as full page reloads upon form submission).

#### 3. Web Storage API (`localStorage`)
`localStorage` provides synchronous, origin-bound key-value storage:
- **Persistence**: Data survives browser restarts and has no expiration date.
- **Capacity**: Approximately 5MB per origin (far exceeding 4KB cookie limits).
- **Methods**: `localStorage.setItem(key, value)`, `localStorage.getItem(key)`, `localStorage.removeItem(key)`. Values are serialized as UTF-16 strings.

---

### Lab 10: Objects and Destructuring

#### 1. Object Mutability under `const`
Declaring an object with `const` binds the variable identifier immutably to a memory reference address. However, the contents of the heap-allocated object remain mutable: properties can be updated (`student.marks = 81`), added, or deleted without altering the reference itself.

#### 2. ES6 Destructuring Assignment
Destructuring unpacks values from arrays or properties from objects into distinct variables:
- **Array Destructuring**: Based on positional ordering:
  ```javascript
  const [first, second] = ["Maths", "Science", "English"];
  ```
- **Object Destructuring**: Based on property key matching:
  ```javascript
  const { name, roll } = { name: "Rohan", roll: 12, marks: 81 };
  ```
Destructuring enhances readability, eliminates redundant assignment boilerplate, and facilitates clean function parameter extraction.

---

### Lab 11: Scope and Closures

#### 1. Scope Hierarchies and Variable Shadowing
- **Global Scope**: Identifiers declared outside functions or blocks are accessible globally.
- **Block Scope**: Identifiers declared with `let` and `const` inside `{}` are strictly isolated to that block.
- **Variable Shadowing**: If a variable inside a nested block shares an identifier with an outer variable, the inner variable temporarily shadows (masks) the outer variable within the block boundaries.

#### 2. Lexical Scoping and Closures
JavaScript employs **lexical scoping**: variable resolution depends on the physical location of declarations within the source code:
- **Closure**: A function bundled with references to its surrounding lexical environment.
- When an outer function executes and terminates, its local scope is not garbage collected if an inner function maintains active references to those variables.
- This enables private state management without global variables:
  ```javascript
  function makeCounter() {
      let count = 0; // Private enclosed state
      return function() { return ++count; };
  }
  ```

---

### Lab 12: Callbacks and Higher-Order Functions

#### 1. Higher-Order Functions (HOFs)
A function that accepts one or more functions as arguments or returns a function is defined as a Higher-Order Function.

#### 2. The Callback Pattern
A callback is a function passed into another function as an argument, intended to be executed at a specific lifecycle stage:
- **Synchronous Callbacks**: Executed immediately during the execution of the calling function (e.g. `applyTwice(addTen, 5)` or `repeatAction(3, callback)`).
- **Asynchronous Callbacks**: Deferred for later execution upon the completion of an asynchronous task (e.g. timer completion or network response).

#### 3. Functional Abstraction
HOFs abstract low-level procedural control flow into reusable declarative patterns, decoupling execution logic (e.g. iterating $N$ times) from operational logic (e.g. logging output).

---

### Lab 13: Reduce, Some, Every and Map

#### 1. Declarative Array Transformations
ES5+ introduced functional methods that encourage immutability and eliminate manual index-tracking loops:

| Method | Return Value | Purpose |
| :--- | :--- | :--- |
| **`reduce()`** | Accumulated single value | Iteratively folds array elements into an accumulator using a reduction callback. |
| **`some()`** | Boolean (`true` / `false`) | Evaluates if **at least one** element satisfies the predicate (existential check). Early-exits upon the first match. |
| **`every()`** | Boolean (`true` / `false`) | Evaluates if **all** elements satisfy the predicate (universal check). Early-exits upon the first failure. |
| **`map()`** | New transformed array | Projects each element through a transformer function, returning a new array of identical length. |

#### 2. The Value of Immutability
`map()` produces a newly allocated array, leaving the input array unchanged. Immutability eliminates unintended side-effects across shared state, which is essential for writing robust, bug-free software.

---

### Lab 14: Timers and Intervals

#### 1. Single-Threaded Concurrency & The Event Loop
JavaScript runs on a single main thread with a single Call Stack. To handle asynchronous operations (timers, network requests, user input) without freezing execution, JavaScript utilizes an Event Loop architecture:
1. **Call Stack**: Synchronous code executes frame by frame.
2. **Host APIs**: Functions like `setTimeout()` offload timer tracking to the host environment (browser / Node.js libuv).
3. **Task Queue (Macrotasks)**: When a timer expires, its callback is placed into the Task Queue.
4. **Event Loop**: Once the Call Stack is completely clear, the Event Loop transfers queued callbacks onto the stack for execution.

```
  [ Call Stack ]  <------- Event Loop (when stack is empty) <------- [ Macrotask Queue ]
   - console.log("Start")                                            - Timer callback
   - setTimeout(..., 0) ---> offload to timer subsystem
   - console.log("End")
```

#### 2. `setTimeout(fn, 0)` Behavior
Even with a delay of `0` milliseconds, `setTimeout` callbacks do not execute synchronously. They are scheduled into the Macrotask Queue, guaranteeing that all synchronous statements run to completion before the callback executes.

#### 3. Timers Lifecycle Management
- `clearTimeout(timerId)`: Deregisters a scheduled timeout prior to execution.
- `setInterval(fn, ms)`: Repeatedly pushes callbacks into the queue every `ms` milliseconds.
- `clearInterval(intervalId)`: Halts recurring interval execution, preventing resource leaks.

---

### Lab 15: Promises and Async/Await with Local Data

#### 1. The Evolution of Asynchronous JavaScript
Asynchronous code originally relied on nested callbacks, frequently leading to deeply indented, unmaintainable "Callback Hell". **Promises** (standardized in ES6) and **Async/Await** (introduced in ES2017) provide structured, readable patterns for managing asynchronous operations.

#### 2. Promise Anatomy & Lifecycle
A `Promise` is an object representing the eventual completion or failure of an asynchronous operation. A Promise exists in one of three states:
- **`pending`**: Initial state; neither fulfilled nor rejected.
- **`fulfilled`**: Operation completed successfully (`resolve(value)` was invoked).
- **`rejected`**: Operation failed (`reject(error)` was invoked).

Promises are immutable once settled; state transitions occur only once. Handlers are attached via `.then()` for success and `.catch()` for errors:
```javascript
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) resolve(marks);
        else reject(new Error("Marks out of range"));
    });
}
```

#### 3. Modern `async` and `await`
The `async/await` syntax allows asynchronous, Promise-based code to be written and read like traditional synchronous code:
- An `async` function implicitly wraps returned values in a resolved Promise.
- The `await` keyword pauses execution of the enclosing `async` function until the awaited Promise settles, without blocking the main JavaScript thread.
- Asynchronous rejections are intercepted cleanly using standard `try...catch` blocks:
  ```javascript
  async function run() {
      try {
          const result = await checkMarks(65);
          console.log(result);
      } catch (err) {
          console.log(`Caught: ${err.message}`);
      }
  }
  ```

---

## Instructions for Execution

### Running Node.js Tasks
All non-browser scripts are 100% compatible with modern Node.js versions (v18.x to v24.x). To execute any lab task, navigate into its folder and run:
```bash
# Example: Executing Lab 1 Tasks
cd Lab1
node Task1.js
node Task2.js
node Task3.js
```

### Running Browser-Based Tasks
For browser-based tasks (such as **Lab 1 Task 1** and all tasks in **Lab 9**):
1. Double-click the respective `.html` file (e.g., `Lab9/Task1.html`, `Lab9/Task4.html`) to launch it in any modern browser (Chrome, Edge, Firefox).
2. Open Developer Tools (`F12` or `Ctrl + Shift + I`) and view the **Console** tab to verify script outputs.
3. Interact with the DOM elements, input fields, buttons, and quizzes to test dynamic functionality.

---

## Screenshot Guidelines for Submission

Every individual lab folder contains an `images/` directory:
- Students are required to personally capture screenshots of their terminal outputs and browser interfaces.
- Save each screenshot using the naming convention specified in each lab's `README.md` (e.g., `images/Task1_output.png`, `images/Task2_output.png`).
- Because all Markdown image links are pre-configured in each lab's `README.md`, your screenshots will automatically render in the respective manual sections as soon as they are saved in the `images/` directory.
