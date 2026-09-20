# 🚀 Day 04 – Introduction to Playwright

Welcome to **Day 04** of the Playwright learning series.

This repository marks the beginning of browser automation with **Playwright**. It introduces Playwright's architecture, asynchronous execution model, browser communication, project configuration, page fixtures, DOM fundamentals, and locator strategies used to build reliable and maintainable automation scripts. The topics below are based on the Day 04 session content.

---

# 📖 Overview

Playwright is a modern, cross-browser automation framework designed for fast, stable, and reliable end-to-end testing. Unlike traditional browser automation tools, Playwright communicates directly with browser protocols, providing features such as auto-waiting, tracing, network interception, and powerful locator APIs.

This repository helps learners understand not only **how** Playwright works but also **why** it is faster and more reliable than previous automation approaches.

---

# 📚 Topics Covered

## ⚡ Asynchronous Programming in Playwright

* Why Browser Automation is Asynchronous
* Promises
* Async Functions
* Await Keyword
* Promise Resolution

---

## 🎯 Understanding `async` & `await`

* Async Functions
* Await Execution Flow
* Promise Lifecycle
* Auto Waiting
* Playwright Actions
* Event Loop Behavior

---

## 🏗️ Playwright Architecture

* Browser Automation Fundamentals
* Hybrid Architecture
* Browser Communication
* Browser Native Protocols
* Process Isolation
* Real-Time Communication

---

## 🔄 Browser Automation Models

* In-Process Automation
* Out-of-Process Automation
* Playwright Hybrid Model

---

## 🌐 Browser Communication

* W3C Protocol
* WebSocket Communication
* Stateful vs Stateless Communication

---

## 🧩 Browser Architecture

* Browser Process
* Renderer Process
* Network Process
* Service Worker Process

---

## ⚙️ Playwright Configuration

* Playwright Project Structure
* playwright.config.ts
* Browser Projects
* Workers
* Headless & Headed Mode
* Common Playwright Commands

---

## 📄 Page Fixture

* Built-in `page` Fixture
* Test Isolation
* Fresh Browser Context
* Browser Lifecycle

---

## 🌳 Document Object Model (DOM)

* DOM Fundamentals
* HTML Structure
* Parent-Child Relationship
* Elements & Attributes

---

## 🎯 Playwright Locators

* Locator API
* Lazy Evaluation
* Strict Mode
* Auto Waiting
* Multiple Element Handling
* Locator Methods


# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Understand why Playwright relies on asynchronous programming.
* Explain how `async` and `await` work internally.
* Describe Playwright's browser architecture.
* Differentiate Selenium, Cypress, and Playwright architectures.
* Configure a Playwright project.
* Understand the purpose of the `page` fixture.
* Navigate the DOM effectively.

---

# 📂 Repository Structure

```text
Day04/
│
├── introduction/
├── browser-architecture/
├── localConfig/
└── README.md
```

---

# 💻 Technologies Used

* Playwright
* TypeScript
* Node.js
* Chromium
* Visual Studio Code

---

# 🚀 Practical Implementations

### ⚡ Asynchronous Execution

* Promise-based browser interactions
* Async/Await implementation
* Auto Waiting
* Event Loop understanding

---

### ⚙️ Playwright Configuration

* Browser configuration
* Workers
* Headed mode
* Browser selection
* Playwright CLI commands


---

# 🏗️ Playwright Execution Flow

```text
Test Script
      │
      ▼
Playwright API
      │
      ▼
Browser Native Protocol
      │
      ▼
Browser Process
      │
      ▼
Renderer Process
      │
      ▼
DOM Interaction
      │
      ▼
Auto Waiting
      │
      ▼
Action Execution
      │
      ▼
Test Result
```

---

# 📚 Key Concepts

| Concept             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Promise             | Represents a future result of an asynchronous operation      |
| async               | Declares an asynchronous function that returns a Promise     |
| await               | Pauses execution until a Promise is resolved                 |
| Auto Waiting        | Built-in synchronization before every Playwright action      |
| Hybrid Architecture | Combines process isolation with direct browser communication |
| WebSocket           | Persistent browser communication protocol                    |
| Page Fixture        | Provides a fresh browser page for every test                 |
| DOM                 | Structured representation of a web page                      |

---

# 📚 Best Practices

* Always use `await` with Playwright actions.
* Use stable and unique locators.
* Avoid hard waits (`waitForTimeout()`).
* Leverage Playwright's built-in auto-waiting instead of explicit waits.
* Configure projects appropriately for development and debugging.
* Keep selectors readable and maintainable.

---

# ▶️ Getting Started

Install plawright 

```bash
npm init playwright@latest
```

Run all Playwright tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test filename.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Open the HTML report

```bash
npx playwright show-report
```

Launch Playwright Codegen


---

# 🎓 Interview Preparation

This repository covers frequently asked Playwright interview topics, including:

* Why is Playwright asynchronous?
* How do `async` and `await` work internally?
* What happens when `await page.click()` is executed?
* What is Playwright's Hybrid Architecture?
* Selenium vs Cypress vs Playwright
* W3C vs WebSocket
* Browser Architecture
* What is the `page` fixture?
* What is the DOM?
* What is Lazy Evaluation?

---

# 🎯 Key Learning Outcome

By the end of this session, you will understand Playwright's architecture, browser communication model, asynchronous execution, project configuration, DOM interaction, locator strategies, and CSS selector techniques. These concepts provide the foundation for building scalable, reliable, and maintainable browser automation frameworks.

---

# 👨‍💻 Author

**Bhuvanesh**

*Playwright | TypeScript | Browser Automation | Test Automation Frameworks*

---

⭐ If you find this repository helpful, consider giving it a **Star** and continue exploring the upcoming Playwright automation modules.
