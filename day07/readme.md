# 🚀 Day 07 – Playwright Frames, Alerts & Windows

Welcome to **Day 07** of the Playwright learning series.

This repository focuses on handling **Frames, JavaScript Dialogs, Event Listeners, File Uploads, and Multiple Windows/Tabs** using Playwright.

---

## 📖 Overview

This session focuses on:

* Working with iframes using `frameLocator()`, `frame()`, and `frames()`
* Handling JavaScript alerts, confirms, prompts, and `beforeunload`
* Understanding `page.on()` and `page.waitForEvent()`
* Handling file chooser events
* Managing new tabs and windows
* Understanding `page.waitForEvent('popup')` vs `context.waitForEvent('page')`
* Using `Promise.all()` for event synchronization

---

## 📚 Topics Covered

### 🖼️ Frames

* Main Frame and Child Frames
* `page.frameLocator()`
* `page.frame()`
* `page.frames()`
* Interacting with elements inside iframes
* Frame discovery and metadata
* Selenium `switchTo().frame()` vs Playwright frame handling

### 🔀 Frame API Comparison

| API              | Purpose                               |
| ---------------- | ------------------------------------- |
| `frameLocator()` | Interact with elements inside a frame |
| `frame()`        | Access a specific Frame object        |
| `frames()`       | Get all frames on the page            |

**Recommended for most UI interactions:**

```typescript
await page
    .frameLocator('#loginFrame')
    .locator('#username')
    .fill('admin');
```

---

## 🚨 JavaScript Dialogs

JavaScript dialogs are **browser-native dialogs** and are not part of the DOM.

Covered dialogs:

* `alert`
* `confirm`
* `prompt`
* `beforeunload`

### Dialog APIs

```typescript
dialog.type()
dialog.message()
dialog.accept()
dialog.dismiss()
dialog.defaultValue()
```

### Event Handling

```typescript
page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});
```

For a one-time dialog:

```typescript
const dialog = await page.waitForEvent('dialog');
```

---

## 🎧 Event Listeners

Playwright event listeners allow tests to react to browser events.

Common events:

* `dialog`
* `popup`
* `request`
* `response`
* `console`
* `filechooser`
* `crash`

### `page.on()` vs `page.waitForEvent()`

| API                   | Purpose                        |
| --------------------- | ------------------------------ |
| `page.on()`           | Continuous event listener      |
| `page.waitForEvent()` | One-time event synchronization |

---

## 📂 File Upload

File chooser handling using event synchronization:

```typescript
const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.locator('#upload').click()
]);

await fileChooser.setFiles('./test-data/sample.pdf');
```

### Key Principle

```text
Listen First → Trigger Action → Capture Event
```

`Promise.all()` helps ensure the event listener is registered before the action triggers the event.

---

## 🪟 Multiple Windows & Tabs

### `page.waitForEvent('popup')`

Used when the **current page directly opens another page/tab**.

```typescript
const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('text=Terms')
]);
```

### `context.waitForEvent('page')`

Used when **any new page is created within the browser context**.

```typescript
const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=Open New Tab')
]);
```

### Important

```typescript
page.waitForEvent('page')
```

is **invalid** because the `Page` object does not emit a `page` event. The `page` event belongs to `BrowserContext`.

---

## 🔄 Popup vs Context Page

| Scenario                                  | Use                            |
| ----------------------------------------- | ------------------------------ |
| Current page opens a new tab              | `page.waitForEvent('popup')`   |
| Any page in context can create a new page | `context.waitForEvent('page')` |
| Need all frames                           | `page.frames()`                |
| Need to interact inside iframe            | `page.frameLocator()`          |

---

## 🎯 Learning Objectives

After completing Day 07, you will be able to:

* Interact with elements inside iframes
* Differentiate `frameLocator()`, `frame()`, and `frames()`
* Handle JavaScript dialogs
* Validate dialog messages and types
* Use `page.on()` and `page.waitForEvent()`
* Handle file chooser events
* Handle new tabs and windows
* Differentiate popup and context-level page events
* Use `Promise.all()` for reliable event handling

---

## 🏗️ Playwright Event Handling Flow

```text
Playwright Event Handling
        │
        ├── Frames
        │     ├── frameLocator()
        │     ├── frame()
        │     └── frames()
        │
        ├── Dialogs
        │     ├── alert
        │     ├── confirm
        │     ├── prompt
        │     └── beforeunload
        │
        │
        └── Windows / Tabs
              ├── popup
              └── page
```

---

## 📚 Best Practices

* Prefer `frameLocator()` for normal iframe interactions.
* Use `frame()` when frame metadata or a specific `Frame` object is required.
* Use `frames()` for frame discovery and debugging.
* Register event listeners **before** triggering the action.
* Prefer `waitForEvent()` for one-time event synchronization.
* Use `Promise.all()` when an action triggers an event.
* Use `popup` when the current page opens the new page.
* Use `context.waitForEvent('page')` when monitoring page creation at context level.

---

## 🎓 Interview Preparation

Common interview topics:

* What is an iframe?
* `frameLocator()` vs `frame()`
* `frame()` vs `frames()`
* How does Playwright handle frames without switching?
* What are JavaScript dialogs?
* Why can't locators handle alerts?
* `page.on()` vs `page.waitForEvent()`
* How do you handle a prompt?
* `page.waitForEvent('popup')` vs `context.waitForEvent('page')`
* Why is `page.waitForEvent('page')` invalid?
* Why is `Promise.all()` used with event handling?

---

## 🎯 Key Learning Outcome

By the end of Day 07, learners can confidently handle **iframes, browser dialogs, file chooser events, and multiple windows/tabs** using Playwright's event-driven APIs.

---

## 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*
