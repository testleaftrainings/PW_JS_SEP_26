# 🚀 Day 01 – Introduction to JavaScript

Welcome to **Day 01** of the JavaScript and Playwright learning series.

This repository introduces the fundamentals of **JavaScript**, its execution model, ECMAScript standards, JavaScript engines, programming styles, primitive data types, and variable declarations.

---

## 📚 Topics Covered

### 🟨 Introduction to JavaScript

* JavaScript Fundamentals
* Client-Side vs Server-Side JavaScript
* JavaScript and Node.js
* JavaScript vs Java
* Dynamic Typing
* Interpreted Language
* Just-In-Time (JIT) Compilation
* Imperative vs Declarative Programming

### 📜 ECMA & ECMAScript

* ECMA
* ECMAScript
* JavaScript Standardization
* JavaScript History
* ES6 / ECMAScript 2015
* Yearly ECMAScript Releases

### ⚙️ JavaScript Engines

* JavaScript Execution Environments
* V8
* Chakra
* WebKit
* SpiderMonkey

### 🔤 Primitive Data Types

JavaScript has **7 primitive types**:

* `string`
* `number`
* `boolean`
* `null`
* `undefined`
* `symbol`
* `bigint`

### 📦 Variable Declarations

* `let`
* `const`
* `var`
* Scope
* Reassignment
* Redeclaration
* Block Scope

---

## 🎯 Learning Objectives

After completing this session, you will be able to:

* Understand the fundamentals of JavaScript.
* Differentiate client-side and server-side JavaScript.
* Understand the role of ECMAScript.
* Explain JavaScript execution through engines.
* Understand interpreted execution and JIT compilation.
* Identify JavaScript primitive data types.
* Differentiate `let`, `const`, and `var`.
* Understand imperative and declarative programming styles.

---

## 🏗️ JavaScript Execution Overview

```text
JavaScript Code
      │
      ▼
JavaScript Engine
      │
      ├── Parsing
      │
      ├── Interpretation / Compilation
      │
      ├── JIT Optimization
      │
      ▼
Machine Execution
```

---

## 📚 Key Concepts

| Concept           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| JavaScript        | Versatile programming language                       |
| ECMAScript        | Specification that defines JavaScript                |
| JavaScript Engine | Executes JavaScript code                             |
| V8                | JavaScript engine used by Chrome and Node.js         |
| Dynamic Typing    | Variable types can change at runtime                 |
| JIT Compilation   | Runtime compilation and optimization                 |
| Primitive Types   | Basic non-object data types                          |
| `let`             | Block-scoped variable declaration                    |
| `const`           | Block-scoped declaration for non-reassigned bindings |
| `var`             | Function-scoped variable declaration                 |

---

## 🔄 `let` vs `const` vs `var`

| Feature                     | `let`         | `const`                          | `var`                |
| --------------------------- | ------------- | -------------------------------- | -------------------- |
| Scope                       | Block         | Block                            | Function             |
| Reassignment                | ✅ Yes         | ❌ No                             | ✅ Yes                |
| Redeclaration in Same Scope | ❌ No          | ❌ No                             | ✅ Yes                |
| Modern Usage                | ✅ Recommended | ✅ Preferred when no reassignment | ⚠️ Generally avoided |

---

## 💻 Example

```javascript
let browser = "Chrome";
browser = "Firefox";

const framework = "Playwright";

var language = "JavaScript";
language = "TypeScript";
```

---

## 🎯 JavaScript in Playwright

JavaScript fundamentals provide the foundation for Playwright automation.

```text
JavaScript Fundamentals
        │
        ▼
Functions & Arrays
        │
        ▼
Promises & Async/Await
        │
        ▼
TypeScript
        │
        ▼
Playwright
        │
        ▼
Test Automation
```

---

## 📚 Best Practices

* Prefer `const` when a variable does not need reassignment.
* Use `let` when reassignment is required.
* Avoid `var` in modern JavaScript unless there is a specific reason.
* Understand variable scope before modifying or accessing variables.
* Use meaningful variable names.
* Understand JavaScript's dynamic typing when working with test data.

---

## 🎓 Interview Preparation

Key interview topics include:

* What is JavaScript?
* JavaScript vs Java
* Client-Side vs Server-Side JavaScript
* What is ECMAScript?
* What is a JavaScript Engine?
* What is V8?
* Is JavaScript interpreted or compiled?
* What is JIT compilation?
* What is Dynamic Typing?
* What are the 7 primitive data types?
* Difference between `let`, `const`, and `var`
* Imperative vs Declarative Programming

---

## 🎯 Key Learning Outcome

By the end of this session, you will understand the **fundamentals of JavaScript, ECMAScript, JavaScript engines, execution models, primitive data types, and variable declarations**, providing the foundation required for learning TypeScript and Playwright automation.

---

## 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*

---

⭐ If you find this repository helpful, consider giving it a **Star**.