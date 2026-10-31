# 🚀 Playwright Day 15 – Device Emulation, Geolocation, Visual Regression Testing & Persistent Context

Welcome to **Day 15** of the Playwright learning series.

This repository introduces advanced Playwright capabilities used in modern automation frameworks, including **Device Emulation**, **Geolocation Testing**, **Visual Regression Testing**, and **Persistent Browser Context**.

These features enable testers to validate responsive applications, location-aware functionality, visual consistency across releases, and browser sessions that persist across executions.

---

# 📖 Overview

Modern web applications must provide a consistent experience across multiple devices, geographical locations, and browser sessions.

This repository demonstrates how Playwright simplifies advanced testing scenarios by providing built-in support for:

* Mobile device emulation
* Browser geolocation
* Visual comparison using screenshots
* Persistent browser contexts (Non-Incognito Mode)

These capabilities are widely used in enterprise automation frameworks to improve test reliability and application quality.

---

# 📚 Topics Covered

## 📱 Device Emulation

* Mobile Device Emulation
* Tablet Emulation
* Responsive UI Testing
* Built-in Device Profiles
* Custom Viewport Configuration
* User Agent Emulation

---

## 📍 Geolocation Testing

* Browser Geolocation
* Mocking User Location
* Granting Location Permissions
* Testing Location-Based Applications
* Regional Feature Validation

---

## 🖼️ Visual Regression Testing

* Screenshot Comparison
* Baseline Image Generation
* Snapshot Assertions
* Detecting UI Changes
* Regression Validation

---

## 💾 Persistent Browser Context

* Persistent Context (`launchPersistentContext()`)
* Non-Incognito Browser Sessions
* User Data Directory
* Session Persistence
* Browser Profile Reuse
* HTTP Basic Authentication
* Browser Permissions
* Authentication Bypass

---

# 🎯 Learning Objectives

After completing this repository, you will be able to:

* Emulate different mobile and desktop devices.
* Test applications with custom geolocation settings.
* Perform visual regression testing using Playwright snapshots.
* Launch browsers with persistent contexts.
* Reuse browser sessions across executions.
* Handle HTTP Basic Authentication.
* Grant browser permissions programmatically.
* Apply advanced Playwright features in enterprise automation projects.

---

# 📂 Repository Structure

```text
Day15/
│
├── tests/
│   ├── device-emulation.spec.ts
│   ├── geolocation.spec.ts
│   ├── visual-regression.spec.ts
│   └── persistent-context.spec.ts
│
├── screenshots/
│
├── contextData/
│
├── playwright.config.ts
│
└── README.md
```

---

# 💻 Technologies Used

* Playwright
* TypeScript
* Node.js
* Chromium
* Browser Context API

---

# 🚀 Practical Implementations

## 📱 Device Emulation

Implemented responsive testing using Playwright's built-in device descriptors to validate application behavior across multiple screen sizes.

---

## 📍 Geolocation Testing

Configured browser geolocation and granted location permissions to test location-aware application functionality.

---

## 🖼️ Visual Regression Testing

Captured and compared screenshots using Playwright snapshot assertions to detect unintended UI changes.

---

## 💾 Persistent Context

Implemented browser session persistence using `launchPersistentContext()`.

The repository demonstrates:

* Reusing browser profiles
* Storing browser data locally
* HTTP Basic Authentication
* Browser permissions
* Authentication bypass

---

# 🏗️ Advanced Testing Workflow

```text
Launch Browser
        │
        ▼
Select Device Profile
        │
        ▼
Set Browser Location
        │
        ▼
Grant Browser Permissions
        │
        ▼
Launch Persistent Context
        │
        ▼
Execute Test
        │
        ▼
Capture Screenshot
        │
        ▼
Compare with Baseline
        │
        ▼
Validate Application
```

---

# 📚 Key Concepts

| Module              | Description                                       |
| ------------------- | ------------------------------------------------- |
| Device Emulation    | Test responsive applications on different devices |
| Geolocation         | Simulate user location                            |
| Visual Regression   | Detect unexpected UI changes                      |
| Persistent Context  | Reuse browser sessions                            |
| HTTP Authentication | Handle Basic Authentication                       |
| Browser Permissions | Grant permissions programmatically                |

---

# 📚 Best Practices

* Use Playwright's built-in device profiles instead of manually configuring viewports.
* Capture baseline screenshots only after the UI has been verified.
* Keep visual snapshots under version control.
* Use Persistent Context only when session persistence is required.
* Avoid storing sensitive browser profiles in public repositories.
* Store authentication credentials securely using environment variables.

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

Run Device Emulation tests

```bash
npx playwright test tests/device-emulation.spec.ts
```

Run Geolocation tests

```bash
npx playwright test tests/geolocation.spec.ts
```

Run Visual Regression tests

```bash
npx playwright test tests/visual-regression.spec.ts
```

Run Persistent Context tests

```bash
npx playwright test tests/persistent-context.spec.ts
```

---

# 🎓 Interview Preparation

This repository covers commonly asked Playwright interview topics, including:

* Device Emulation
* Built-in Device Profiles
* Responsive Testing
* Geolocation Testing
* Browser Permissions
* Visual Regression Testing
* Snapshot Assertions
* Persistent Browser Context
* Incognito vs Persistent Context
* HTTP Basic Authentication
* Browser Session Persistence

---

# 📖 References

* Playwright Documentation
* Chromium Browser Documentation
* MDN Web Docs

---

# 👨‍💻 Author

## **Bhuvanesh**

**Playwright | TypeScript | UI Automation | API Automation | Advanced Playwright | Framework Design**

---

⭐ If you found this repository helpful, consider giving it a **Star** and follow the repository for upcoming Playwright learning sessions.
