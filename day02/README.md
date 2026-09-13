# 🚀 Day 02 – JavaScript Fundamentals: Operators, Conditionals, Loops, Hoisting & Strings

Welcome to **Day 02** of the JavaScript learning series.

This repository covers essential JavaScript programming concepts required for building effective **Playwright automation scripts**, including **Operators, Conditional Statements, Loops, Hoisting, and Strings**.

---

## 📖 Overview

This session focuses on:

* Performing operations using JavaScript operators
* Making decisions using conditional statements
* Repeating operations using loops
* Understanding JavaScript hoisting behavior
* Understanding String creation and core behavior
* Working with commonly used String helper methods

These concepts form the foundation for writing dynamic and reusable automation logic.

---

## 📚 Topics Covered

### ➕ Operators

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Increment & Decrement Operators
* `==` vs `===`
* Pre-increment vs Post-increment

---

### 🔀 Conditional Statements

* `if`
* `if...else`
* `else if`
* Nested Conditions
* `switch`

Common automation use cases:

* Browser selection
* Environment selection
* Conditional test execution
* Validation logic

---

### 🔁 Looping Statements

* `for`
* `while`
* `do...while`
* `for...in`
* `for...of`

| Loop         | Common Use                       |
| ------------ | -------------------------------- |
| `for`        | Known number of iterations       |
| `while`      | Repeat while a condition is true |
| `do...while` | Execute at least once            |
| `for...in`   | Iterate object properties        |
| `for...of`   | Iterate iterable values          |

---

### ⬆️ Hoisting

Understanding how JavaScript processes declarations before execution.

* `var` hoisting
* `let` and `const` hoisting
* Temporal Dead Zone (TDZ)
* Function declaration hoisting

Key behavior:

```javascript
console.log(value);
var value = 10;
```

`var` is hoisted and initialized with `undefined`.

```javascript
console.log(value);
let value = 10;
```

`let` remains in the **TDZ** until its declaration is evaluated, resulting in a `ReferenceError`.

---

## 🔤 Strings

A **String** is an immutable sequence of characters.

### Core String Behavior

* Strings are primitive data types
* Strings are immutable
* String methods return new strings
* Index starts from `0`

Example:

```javascript
let str = "Playwright";

console.log(str[0]); // P
```

---

### 🏗️ String Creation

#### 1. String Literal

```javascript
let str = "Playwright";
```

* Creates a primitive string
* Lightweight and commonly used
* Recommended approach

```javascript
typeof str; // "string"
```

#### 2. String Constructor

```javascript
let str = new String("Playwright");
```

* Creates a String object
* Uses the constructor
* Rarely used in real projects

```javascript
typeof str; // "object"
```

**Recommendation:** Prefer String literals in normal JavaScript, TypeScript, Node.js, and Playwright projects.

---

## 🛠️ String Helper Methods

| Method          | Purpose                                                       |
| --------------- | ------------------------------------------------------------- |
| `slice()`       | Extracts part of a string; supports negative indexes          |
| `substring()`   | Extracts part of a string; negative values are treated as `0` |
| `charAt()`      | Returns the character at a specified index                    |
| `indexOf()`     | Returns the first occurrence index                            |
| `lastIndexOf()` | Returns the last occurrence index                             |
| `includes()`    | Checks whether text exists                                    |
| `startsWith()`  | Checks the beginning of a string                              |
| `endsWith()`    | Checks the ending of a string                                 |
| `replace()`     | Replaces the first matching value                             |
| `replaceAll()`  | Replaces all matching values                                  |
| `split()`       | Converts a string into an array                               |
| `trim()`        | Removes spaces from the beginning and end                     |
| `toUpperCase()` | Converts characters to uppercase                              |
| `toLowerCase()` | Converts characters to lowercase                              |
| `concat()`      | Combines strings                                              |
| `repeat()`      | Repeats a string                                              |
| `match()`       | Searches using Regular Expressions                            |
| `search()`      | Searches using Regular Expressions                            |
| `padStart()`    | Adds characters at the beginning                              |
| `padEnd()`      | Adds characters at the end                                    |

### Example

```javascript
let browser = "Chrome,Edge,Firefox";

console.log(browser.split(","));
// ["Chrome", "Edge", "Firefox"]

console.log("playwright".toUpperCase());
// PLAYWRIGHT

console.log("5".padStart(3, "0"));
// 005
```

### Important String Differences

**`slice()` vs `substring()`**

```javascript
"Playwright".slice(-3);      // "ght"
"Playwright".substring(-3);  // "Playwright"
```

**`replace()` vs `replaceAll()`**

```javascript
"Java Java".replace("Java", "TS");
// "TS Java"

"Java Java".replaceAll("Java", "TS");
// "TS TS"
```

---

## 🎯 Learning Objectives

After completing Day 02, you will be able to:

* Use different JavaScript operators
* Differentiate `==` and `===`
* Use logical and comparison operators
* Implement conditional logic
* Select appropriate looping statements
* Differentiate `for...in` and `for...of`
* Explain JavaScript hoisting and TDZ
* Understand String creation and immutability
* Use commonly required String helper methods
* Apply String operations in automation scenarios

---

## 🏗️ JavaScript Fundamentals Flow

```text
JavaScript Fundamentals
        │
        ├── Operators
        │      ↓
        │  Perform Operations
        │
        ├── Conditions
        │      ↓
        │  Decision Making
        │
        ├── Loops
        │      ↓
        │  Repeated Execution
        │
        ├── Hoisting
        │      ↓
        │  Declaration Behavior
        │
        └── Strings
               ↓
        Text Manipulation
```

---

## 📚 Best Practices

* Prefer `===` over `==` for strict comparison.
* Use meaningful variable names.
* Prefer `let` and `const` over `var`.
* Use `const` when reassignment is not required.
* Choose loops based on the use case.
* Avoid unnecessary nested conditions.
* Use braces `{}` for better readability.
* Prefer String literals over `new String()`.
* Remember that String methods do not modify the original String.
* Understand hoisting rather than intentionally depending on it.

---

## 💻 Technologies Used

* JavaScript
* Node.js
* Visual Studio Code

---

## ▶️ Getting Started

Check Node.js:

```bash
node --version
```

Run a JavaScript file:

```bash
node filename.js
```

Example:

```bash
node operators.js
```

---

## 🎓 Interview Preparation

Common interview topics covered:

* `==` vs `===`
* `&&` vs `||`
* Pre-increment vs Post-increment
* `if...else` vs `switch`
* Types of loops
* `for...in` vs `for...of`
* What is Hoisting?
* `var`, `let`, and `const` hoisting
* Temporal Dead Zone
* Function declaration hoisting
* What is String immutability?
* String literal vs String object
* `slice()` vs `substring()`
* `replace()` vs `replaceAll()`
* `for...in` vs `for...of`
* Common String helper methods

---

## 🎯 Key Learning Outcome

By the end of Day 02, learners can apply **JavaScript operators, conditions, loops, hoisting concepts, and String manipulation techniques** to build more effective and maintainable **Playwright automation scripts**.

---

## 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue with the upcoming JavaScript and Playwright learning modules.