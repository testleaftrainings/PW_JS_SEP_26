# 🚀 Day 11 – Abstraction, Environment Parameterization & Playwright File Handling

## 📌 Overview
This session covers TypeScript OOP concepts, environment parameterization, Playwright event handling, file upload/download operations, and browser event management.

## 📚 Topics Covered

### 1. Abstraction & TypeScript OOP
- Abstraction vs. encapsulation
- Interfaces and abstract classes
- Interface vs. abstract class
- `extends` and `implements` keywords
- Access modifiers and inheritance
- Method overriding and polymorphism
- Applying OOP concepts to reusable Playwright frameworks

### 2. Environment Parameterization
- Configuring DEV, QA, UAT, STG, and PROD environments
- Using `process.env` and `.env` files
- Loading environment configurations using `dotenv`
- Managing environment-specific URLs and credentials
- Running tests against different environments
- JSON vs. CSV vs. environment-based parameterization

### 3. Playwright Event Listeners
- `page.on()` vs. `page.waitForEvent()`
- Handling dialogs, popups, requests, responses, and file chooser events
- Understanding `Promise<T>` and asynchronous execution
- Using `Promise.all()` to synchronize events and actions
- `page.waitForEvent('popup')` vs. `context.waitForEvent('page')`

### 4. File Upload
- Uploading files using `setInputFiles()`
- Handling custom upload interfaces using the `filechooser` event
- Uploading multiple files
- Using `Promise.all()` to avoid missing events
- Managing file paths and troubleshooting upload issues

### 5. File Download
- Handling downloads using `page.waitForEvent('download')`
- Saving files using `download.saveAs()`
- Retrieving temporary download paths
- Creating unique filenames using timestamps
- Using `path.join()` for cross-platform file paths
- Configuring Node.js types in `tsconfig.json`

## 🎯 Learning Objectives
By the end of this session, learners should be able to:

- Explain and implement abstraction using interfaces and abstract classes.
- Configure Playwright tests for multiple environments.
- Handle browser events and new tabs using the appropriate event APIs.
- Automate file upload and download workflows.
- Use promises effectively for event synchronization.
- Manage file paths and environment configuration in a TypeScript project.

## 💡 Best Practices
- Keep environment configuration separate from test logic.
- Store secrets securely and add `.env` files to `.gitignore`.
- Use `Promise.all()` when waiting for an event while triggering its action.
- Use `path.join()` for cross-platform file paths.
- Use `page.waitForEvent('popup')` for popups opened by the current page and `context.waitForEvent('page')` to detect new pages across the context.

## 🎤 Interview Preparation
- What is the difference between abstraction and encapsulation?
- How does an interface differ from an abstract class?
- How do you configure environment parameterization in Playwright?
- What is the difference between `page.on()` and `page.waitForEvent()`?
- Why is `Promise.all()` useful for file chooser events?
- How do you upload and download files using Playwright?
- What is the difference between `page.waitForEvent('popup')` and `context.waitForEvent('page')`?

## 🏆 Key Learning Outcome
Learners gain an understanding of TypeScript abstraction, environment-based test execution, Playwright event handling, and file operations for building maintainable automation tests.

## 👨‍💻 Author
**Bhuvanesh**