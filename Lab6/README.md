# EXPERIMENT NO. 06

> **Student Name:** Ankit Kumar
> **Student ID:** BCS2025392
> **Course:** B.Tech CSE (Second Year)  
> **Subject:** JavaScript Programming Lab (BCS354)  
> **University:** Invertis University, Bareilly  


---

## 1. Experiment Title:
**JSON Text**

## 2. Aim:
To demonstrate JavaScript Object Notation (JSON) serialization using JSON.stringify, deserialization using JSON.parse, and exception handling using try...catch.

## 3. Software / Tools Required:
- Node.js (v18+ or v24+), Visual Studio Code / Text Editor.

## 4. Theory:
1. **JSON Concept**: JSON (JavaScript Object Notation) is a lightweight, language-independent data-interchange format derived from JavaScript object syntax. Keys and strings in valid JSON must always be wrapped in double quotes (`"`).
2. **JSON.stringify()**: Serializes a JavaScript object or primitive value into a valid JSON string.
3. **JSON.parse()**: Deserializes a valid JSON string into corresponding JavaScript data structures.
4. **Exception Handling**: Attempting to parse malformed JSON causes a `SyntaxError`. Enclosing parsing logic in `try...catch` blocks prevents program crashes.

## 5. Algorithm / Procedure:
1. **Task 1**: Create student object with `name: "Rohan"` and `marks: [70, 80]`. Use `JSON.stringify()` to convert it to JSON text and print.
2. **Task 2**: Store JSON text `'{"city":"Pune","pin":411001}'`. Use `JSON.parse()` and print the `city` property.
3. **Task 3**: Store invalid JSON string `"{name: Rohan}"`. Attempt to parse inside a `try...catch` block and log `"Invalid JSON"` in the catch clause.

## 6. Program / Queries / Commands:
### Task 1 (Task1.js):
```javascript
const student = {
    name: "Rohan",
    marks: [70, 80]
};

const jsonString = JSON.stringify(student);
console.log(jsonString);
```

### Task 2 (Task2.js):
```javascript
const jsonText = '{"city":"Pune","pin":411001}';

const parsedData = JSON.parse(jsonText);
console.log(parsedData.city);
```

### Task 3 (Task3.js):
```javascript
const invalidJson = "{name: Rohan}";

try {
    const data = JSON.parse(invalidJson);
    console.log(data);
} catch (error) {
    console.log("Invalid JSON");
}
```

## 7. Input:
Task 1: Object { name: 'Rohan', marks: [70, 80] }.
Task 2: Valid JSON string '{"city":"Pune","pin":411001}'.
Task 3: Invalid JSON string '{name: Rohan}'.

## 8. Output:
### Task 1 Output:
```text
{"name":"Rohan","marks":[70,80]}
```

### Task 2 Output:
```text
Pune
```

### Task 3 Output:
```text
Invalid JSON
```

### Screenshots:
![Task 1 Output](images/Task1_output.png)
*Figure 6.1: Task 1 Output*

![Task 2 Output](images/Task2_output.png)
*Figure 6.2: Task 2 Output*

![Task 3 Output](images/Task3_output.png)
*Figure 6.3: Task 3 Output*

## 9. Result:
The experiment was performed successfully. Object serialization, JSON deserialization, and defensive parsing with try...catch were demonstrated and verified.

## 10. Viva-Voce Questions:
**Q1. What is the difference between a JavaScript object literal and JSON?**  
*Ans:* A JavaScript object literal can have unquoted keys, functions as values, single quotes, or undefined. JSON is strictly text, requires double-quoted property keys, and supports only strings, numbers, booleans, null, arrays, and objects.

**Q2. What types cannot be serialized into JSON using JSON.stringify()?**  
*Ans:* Functions, Symbols, and undefined are omitted in objects or converted to null in arrays. Circular object references throw a TypeError.

**Q3. Why is try...catch essential when calling JSON.parse()?**  
*Ans:* Because invalid or malformed JSON strings cause JSON.parse() to throw a runtime SyntaxError which terminates program execution if uncaught.

**Q4. What is the purpose of the replacer parameter in JSON.stringify()?**  
*Ans:* It allows filtering or transforming properties during serialization via an array of whitelisted keys or a custom mapper function.
