# 🚀 Day 10 – TypeScript OOP & Advanced OOP Concepts

Welcome to **Day 09** of the TypeScript and Playwright learning series.

This repository focuses on advanced **Object-Oriented Programming (OOP)** concepts in TypeScript and their application in designing scalable and reusable Playwright automation frameworks.

---

## 📚 Topics Covered

### 🏗️ OOP Fundamentals

* Classes
* Objects
* Constructors
* Static Members
* Access Modifiers

  * `public`
  * `private`
  * `protected`

### 🔄 Inheritance

* `extends`
* Parent and Child Classes
* Constructor Inheritance
* `super()`
* Code Reusability
* Base Page Architecture

### 🔀 Polymorphism

* Runtime Polymorphism
* Method Overriding
* Method Overloading
* `override` Keyword
* Options Object Pattern

---

## 🎯 Learning Objectives

After completing this session, you will be able to:

* Create reusable classes and objects.
* Use constructors for object initialization.
* Apply static members appropriately.
* Control class members using access modifiers.
* Implement inheritance using `extends`.
* Apply runtime polymorphism through method overriding.
* Apply OOP principles to Playwright Page Object Model design.

---

## 🏗️ Playwright Framework Perspective

```text
BasePage
    │
    ├── Common Methods
    │
    ▼
LoginPage
    │
    ├── Login Actions
    │
    ▼
HomePage
    │
    ├── Navigation Actions
    │
    ▼
Test Cases
```

OOP concepts help build:

* Reusable Page Objects
* Base Classes
* Common Utilities
* Framework Abstractions
* Maintainable Automation Components

---

## 📚 Key Concepts

| Concept           | Purpose                          |
| ----------------- | -------------------------------- |
| Class             | Blueprint for objects            |
| Object            | Instance of a class              |
| Constructor       | Initializes objects              |
| Static            | Class-level members              |
| Access Modifiers  | Control member visibility        |
| Inheritance       | Reuse parent functionality       |
| Polymorphism      | Different runtime behavior       |
| Method Overriding | Redefine inherited behavior      |

---

## 🔑 Important Keywords

| Keyword      | Usage                                 |
| ------------ | ------------------------------------- |
| `extends`    | Class inheritance                     |
| `implements` | Class implementing an interface       |
| `super()`    | Invoke parent constructor             |
| `override`   | Explicitly override inherited methods |

---

## 📚 Best Practices

* Use `private` for implementation details that should remain internal.
* Use `protected` for functionality shared with child classes.
* Use `extends` when genuine inheritance relationships exist.
* Prefer composition when inheritance does not represent a clear relationship.
* Use `override` when redefining inherited methods.
* Keep Page Objects focused on page-specific behavior.

---

## 🎓 Interview Preparation

Key interview topics include:

* Class vs Object
* Constructor
* Static vs Non-Static Members
* Public vs Private vs Protected
* Inheritance and `super()`
* Runtime Polymorphism
* Method Overriding vs Overloading
* `extends` vs `implements`
* Purpose of the `override` keyword
* Options Object Pattern

---

## 🎯 Key Learning Outcome

By the end of this session, you will understand how **TypeScript OOP principles** can be applied to create reusable Page Objects, Base Classes, and scalable Playwright automation architectures.

---

## 👨‍💻 Author

**Bhuvanesh**

*TypeScript | Playwright | Test Automation | Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star**.
