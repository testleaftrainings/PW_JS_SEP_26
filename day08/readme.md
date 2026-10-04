# 🚀 Day 08 – Advanced Playwright Interactions & Data Parameterization

Welcome to **Day 08** of the Playwright learning series.

This repository focuses on **Playwright Test Organization, Annotations, Hooks, Data Structures, Data Parameterization, Storage State, and Browser Storage**.

---

## 📖 Overview

This session focuses on:

- Organizing Playwright tests using `test.describe()`
- Using annotations and tags
- Managing test execution with hooks
- Creating detailed reports with `test.step()`
- Working with JavaScript/TypeScript data structures
- Implementing data-driven testing using JSON and CSV
- Managing authentication using `storageState()`
- Understanding Local Storage, Session Storage, and Cookies

---

## 📚 Topics Covered

### 🧪 Playwright Test Organization

- `test.describe()`
- Nested `test.describe()`
- Test structure
- Test grouping by feature/module
- Enterprise test organization

```typescript
test.describe('Lead Management', () => {
    test('Create Lead', async () => {});
    test('Edit Lead', async () => {});
});
```

**Important:** `test.describe()` can be nested, but `test()` cannot be nested inside another `test()`.

---

### 🏷️ Test Annotations

Built-in annotations covered:

| Annotation | Purpose |
|---|---|
| `test.only()` | Run only selected tests |
| `test.skip()` | Skip a test |
| `test.fail()` | Expect the test to fail |
| `test.fixme()` | Mark a known broken test |
| `test.slow()` | Triple the test timeout |

---

### 🏷️ Tags

Tags help categorize and execute specific groups of tests.

```typescript
test('Create Lead', {
    tag: '@smoke'
}, async () => {});
```

Run tagged tests:

```bash
npx playwright test --grep @smoke
```

Exclude a tag:

```bash
npx playwright test --grep-invert @smoke
```

---

### 📝 Custom Annotations

Custom annotations can add metadata to Playwright reports.

```typescript
annotation: {
    type: 'issue',
    description: 'JIRA-101'
}
```

Runtime annotations can also be added using:

```typescript
testInfo.annotations.push({
    type: 'test_case',
    description: 'TC-101'
});
```

---

### 📋 `test.step()`

`test.step()` groups actions into meaningful business steps and improves HTML report readability.

```typescript
await test.step('Login', async () => {
    // Login actions
});
```

Supports:

- Nested steps
- Returning values
- `box: true`

```typescript
const id = await test.step('Get Lead Id', async () => {
    return '1001';
});
```

---

## 🔄 Playwright Hooks

| Hook | Execution |
|---|---|
| `beforeAll()` | Once before all tests |
| `beforeEach()` | Before every test |
| `afterEach()` | After every test |
| `afterAll()` | Once after all tests |

Typical flow:

```text
beforeAll()
    ↓
beforeEach()
    ↓
Test
    ↓
afterEach()
    ↓
afterAll()
```

Common use cases include authentication, test data setup, cleanup, screenshots, and resource management.

---

## 🔗 TestNG to Playwright Mapping

| TestNG | Playwright |
|---|---|
| `@BeforeSuite` | Global Setup |
| `@AfterSuite` | Global Teardown |
| `@BeforeTest` | `beforeAll()` |
| `@AfterTest` | `afterAll()` |
| `@BeforeMethod` | `beforeEach()` |
| `@AfterMethod` | `afterEach()` |
| `@Test` | `test()` |
| `enabled = false` | `test.skip()` |
| DataProvider | Arrays + iteration / parameterization |

---

## 🗂️ Data Structures

Data structures help organize and manage test data efficiently.

### Array

```typescript
const browsers = [
    "chrome",
    "edge",
    "firefox",
    "safari"
];
```

Common automation usage:

- Test data
- URLs
- Browser names
- User roles
- Expected values

### Object

```typescript
const config = {
    username: "DemoCSR",
    password: "crmsfa",
    url: "https://leaftaps.com"
};
```

Common usage:

- Configuration
- API payloads
- Test data
- Environment settings

### Nested Object

```typescript
const environments = {
    qa: {
        url: "https://qa-app.com"
    },
    prod: {
        url: "https://prod-app.com"
    }
};
```

---

## 🔄 Data Parameterization

Parameterization allows the **same test logic to execute with different data**.

### Methods Covered

1. JSON Parameterization
2. CSV Parameterization
3. Environment Parameterization

Benefits:

- Avoid duplicate tests
- Separate test data from test logic
- Improve maintainability
- Increase test coverage
- Reuse the same test with multiple datasets

---

## 📄 JSON Parameterization

JSON is commonly used for structured test data.

```json
[
    {
        "TcaseId": "TC001",
        "Username": "democsr",
        "Password": "crmsfa"
    }
]
```

Import and use:

```typescript
import credentials from "./Data/loginData.json";

for (const data of credentials) {
    test(`Login with ${data.Username}`, async ({ page }) => {
        await page.fill('#username', data.Username);
        await page.fill('#password', data.Password);
    });
}
```

Benefits:

- Easy to maintain
- Separate data from test logic
- Supports multiple datasets
- Useful for regression testing

---

## 📊 CSV Parameterization

CSV is useful for tabular and business data.

Install the parser:

```bash
npm install csv-parse
```

Read and parse CSV:

```typescript
import fs from "fs";
import { parse } from "csv-parse/sync";

const records = parse(
    fs.readFileSync("Data/login.csv"),
    {
        columns: true,
        skip_empty_lines: true
    }
);
```

### CSV Processing Flow

```text
CSV File
   ↓
fs.readFileSync()
   ↓
Raw CSV Content
   ↓
csv-parse
   ↓
Array of Objects
   ↓
Playwright Test Data
```

---

## 🆚 JSON vs CSV

| Format | Requirement | Common Usage |
|---|---|---|
| JSON | Direct import | API data, configuration, test data |
| CSV | `fs` + CSV parser | Business data, Excel exports |

---

## 🔐 Storage State

`storageState()` is used to persist authentication-related browser storage and reuse an authenticated session.

Save authentication state:

```typescript
await context.storageState({
    path: 'auth.json'
});
```

Reuse it:

```typescript
test.use({
    storageState: 'auth.json'
});
```

### Captured

- Cookies
- Local Storage

### Not Captured

- Open tabs
- DOM/UI state
- Scroll position
- Session Storage

The key idea is **authentication persistence**, not a complete browser snapshot.

---

## 💾 Browser Storage

### Local Storage

- Persistent until explicitly deleted
- Shared across tabs of the same origin
- Accessible through JavaScript
- Commonly used for application data and JWT tokens

### Session Storage

- Specific to a browser tab
- Cleared when the tab is closed
- Accessible through JavaScript

### Cookies

- Automatically sent with HTTP requests
- Support expiration
- Can be `HttpOnly`
- Commonly used for authentication

---

## 📊 Browser Storage Comparison

| Feature | Local Storage | Session Storage | Cookies |
|---|---|---|---|
| Lifetime | Persistent | Until tab closes | Until expiry |
| Shared Across Tabs | Yes | No | Yes |
| Sent with Requests | No | No | Yes |
| JavaScript Access | Yes | Yes | Non-HttpOnly |
| HttpOnly | No | No | Yes |
| Authentication | Sometimes | Rarely | Very common |

---

## 🔍 Accessing Browser Storage

### Local Storage

```typescript
const data = await page.evaluate(() => ({
    ...localStorage
}));
```

### Session Storage

```typescript
const data = await page.evaluate(() => ({
    ...sessionStorage
}));
```

### Cookies

```typescript
const cookies = await context.cookies();
```

`page.evaluate()` runs JavaScript inside the browser context, while the test itself runs in the Node.js context.

---

## 🎯 Learning Objectives

After completing Day 08, you will be able to:

- Organize tests using `test.describe()`
- Apply Playwright annotations and tags
- Use hooks effectively
- Create readable reports using `test.step()`
- Work with arrays, objects, and nested objects
- Implement JSON-based parameterization
- Implement CSV-based parameterization
- Reuse authentication using `storageState()`
- Understand Local Storage, Session Storage, and Cookies
- Apply data-driven testing concepts in Playwright frameworks

---

## 🏗️ Day 08 Learning Flow

```text
Playwright Framework
        │
        ├── Test Organization
        │      ├── describe
        │      ├── annotations
        │      ├── tags
        │      └── hooks
        │
        ├── Reporting
        │      └── test.step()
        │
        ├── Data Structures
        │      ├── Arrays
        │      ├── Objects
        │      └── Nested Objects
        │
        ├── Parameterization
        │      ├── JSON
        │      └── CSV
        │
        └── Authentication
               └── storageState()
```

---

## 📚 Best Practices

- Group related tests using `test.describe()`.
- Use tags for Smoke, Regression, and feature-based execution.
- Use annotations for useful test metadata.
- Use hooks only for setup and cleanup activities.
- Use `test.step()` for meaningful business-level reporting.
- Separate test data from test logic.
- Prefer parameterization instead of duplicating test cases.
- Use JSON for structured test/configuration data.
- Use CSV when working with tabular business data.
- Reuse authentication with `storageState()` where appropriate.
- Understand the difference between Local Storage, Session Storage, and Cookies.

---

## 🎓 Interview Preparation

Common interview topics:

- What is `test.describe()`?
- Can `test.describe()` be nested?
- Can one `test()` be nested inside another?
- Difference between `test.skip()`, `test.fail()`, and `test.fixme()`
- What is `test.slow()`?
- Tags vs Annotations
- What is `test.step()`?
- Can `test.step()` return a value?
- Explain Playwright hooks
- `beforeAll()` vs `beforeEach()`
- TestNG vs Playwright annotations
- What is data parameterization?
- JSON vs CSV parameterization
- Why is `fs` required for CSV?
- What is `storageState()`?
- What does `storageState()` capture?
- Local Storage vs Session Storage vs Cookies
- Why use `...localStorage` with `page.evaluate()`?

---

## 🎯 Key Learning Outcome

By the end of Day 08, learners can build a more **structured, maintainable, data-driven, and reusable Playwright automation framework** using test organization, hooks, annotations, parameterization, and authentication persistence.

---

## 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*