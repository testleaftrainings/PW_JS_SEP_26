# 🚀 Day 06 – Playwright Locators, Codegen, Assertions

Welcome to **Day 06** of the Playwright learning series.

This repository focuses on **Playwright's Locator API**, **Playwright Codegen**, **Assertions**. These concepts are essential for building reliable, maintainable, and enterprise-ready UI automation frameworks using Playwright.

---

# 📖 Overview

Playwright simplifies browser automation by providing intelligent locator strategies, built-in assertions with auto-retry, powerful code generation capabilities, and seamless frame interaction.

This repository demonstrates how to:

* Identify web elements using Playwright's recommended locators
* Generate automation scripts using Playwright Codegen
* Validate application behavior using Generic and Locator Assertions
* Interact with elements inside iframes using Frame APIs
* Apply industry-standard automation best practices

---

# 📚 Topics Covered

## 🎯 Playwright Locators

Learn Playwright's built-in locator strategies designed for stable and resilient automation.

### Built-in Locators

* `getByRole()`
* `getByLabel()`
* `getByPlaceholder()`
* `getByText()`
* `getByAltText()`
* `getByTitle()`
* `getByTestId()`

### Locator Features

* Auto Waiting
* Auto Retry
* Strict Mode
* Lazy Evaluation
* Locator Chaining
* Locator Reuse

---

## 🤖 Playwright Codegen

Accelerate automation development using Playwright's built-in Code Generator.

Topics covered:

* Introduction to Playwright Codegen
* Recording Browser Actions
* Automatic Locator Generation
* Playwright Inspector
* Editing Generated Scripts
* Codegen Best Practices

---

## ✅ Generic Assertions

Generic Assertions validate JavaScript values without interacting with the UI.

Common Assertions:

* `toBe()`
* `toEqual()`
* `toContain()`
* `toMatch()`
* `toBeTruthy()`
* `toBeFalsy()`
* `toBeDefined()`
* `toBeUndefined()`
* `toBeNull()`
* `toBeGreaterThan()`
* `toBeLessThan()`

---

## 🎯 Locator Assertions

Locator Assertions validate UI elements and automatically retry until the expected condition is met.

Common Assertions:

* `toBeVisible()`
* `toBeHidden()`
* `toBeEnabled()`
* `toBeDisabled()`
* `toBeEditable()`
* `toHaveText()`
* `toContainText()`
* `toHaveValue()`
* `toHaveAttribute()`
* `toHaveCount()`
* `toBeChecked()`

---

## ⏱️ Timeout Management

Understand Playwright's timeout mechanisms.

Topics covered:

* Test Timeout
* Action Timeout
* Assertion Timeout
* Navigation Timeout

---

## 🔗 Locator Chaining

Build expressive and maintainable locator expressions using chained locators.

---

## 🧪 Classroom Activities

### Activity 1

Automate the Facebook Login workflow using Playwright Locators.

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Understand Playwright's recommended locator strategies.
* Generate automation scripts using Playwright Codegen.
* Edit and optimize generated scripts.
* Differentiate Generic Assertions and Locator Assertions.
* Understand Playwright's auto-waiting and auto-retry mechanisms.
* Configure assertion and action timeouts.
* Handle Frames using the appropriate Playwright API.
* Build scalable and maintainable UI automation scripts.

---

# 📂 Repository Structure

```text
Day06/
│
├── locators/
├── codegen/
├── assertions/
└── README.md
```

---

# 💻 Technologies Used

* Playwright
* TypeScript
* Node.js

---

# 🚀 Practical Implementations

## 🎯 Locator Strategies

Implemented Playwright locators using:

* Role
* Label
* Placeholder
* Text
* Alt Text
* Title
* Test ID

---

## 🤖 Playwright Codegen

Learn how to generate automation scripts directly from browser interactions.

Demonstrated concepts:

* Recording browser actions
* Automatic locator generation
* Playwright Inspector
* Editing generated scripts
* Converting recorded scripts into maintainable automation

---

## ✅ Assertions

Validate both application logic and UI using:

* Generic Assertions
* Locator Assertions

---

# 🏗️ Automation Workflow

```text
Launch Application
        │
        ▼
Playwright Codegen
        │
        ▼
Generate Locators
        │
        ▼
Refine Generated Code
        │
        ▼
Perform UI Actions
        │
        ▼
Validate with Assertions
        │
        ▼
Handle Frames (if required)
        │
        ▼
Complete Test Execution
```

---

# 📚 Key Concepts

| Concept           | Description                                |
| ----------------- | ------------------------------------------ |
| Locator           | Smart element finder with auto-waiting     |
| Role Locator      | Recommended locator based on accessibility |
| Codegen           | Generates Playwright automation code       |
| Inspector         | Interactive browser inspection tool        |
| Generic Assertion | Validates JavaScript values                |
| Locator Assertion | Validates UI elements with auto-retry      |
| Auto Waiting      | Waits for elements before actions          |
| Auto Retry        | Retries assertions until timeout           |

---

# 📚 Best Practices

* Prefer `getByRole()` whenever possible.
* Use `getByLabel()` for form elements.
* Use `getByTestId()` when stable test IDs are available.
* Prefer Playwright locators over CSS/XPath whenever feasible.
* Use Codegen as a starting point—not the final automation script.
* Refactor generated code into reusable methods or Page Objects.
* Keep assertions close to the actions they validate.
* Use Locator Assertions instead of manual waits.
* Prefer `frameLocator()` for interacting with iframes.

---

# 🛠 Tools Introduced

* Playwright Codegen
* Playwright Inspector
* HTML Report
* Playwright Test Runner

---

# ▶️ Getting Started

Install dependencies

```bash
npm install
```

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/example.spec.ts
```

Run tests in headed mode

```bash
npx playwright test --headed
```

Launch Playwright Codegen

```bash
npx playwright codegen
```

Launch Codegen for a specific application

```bash
npx playwright codegen https://example.com
```

Generate a Playwright test file

```bash
npx playwright codegen --target=playwright-test -o tests/example.spec.ts
```

Open the HTML Report

```bash
npx playwright show-report
```

---

# 🎓 Interview Preparation

This repository covers frequently asked Playwright interview topics, including:

* Playwright Locator Strategy
* `getByRole()` vs `getByText()`
* Locator Chaining
* Playwright Codegen
* Playwright Inspector
* Generic Assertions vs Locator Assertions
* Auto Waiting
* Auto Retry
* Assertion Timeout
* Action Timeout
* Best Practices for Stable Automation

---

# 🎯 Key Learning Outcome

By the end of this session, you will understand how to locate web elements using Playwright's recommended strategies, accelerate automation development with Codegen, validate applications using robust assertions. These skills form the foundation for building scalable, maintainable, and enterprise-grade Playwright automation frameworks.

---

# 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | UI Automation | Test Automation Framework Design*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue your Playwright learning journey!
