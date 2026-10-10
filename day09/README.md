# 🚀 Day 09 – TypeScript Fundamentals

Welcome to **Day 09** of the JavaScript, TypeScript, and Playwright learning series.

This repository focuses on TypeScript fundamentals and their practical application in building **type-safe, maintainable, and reusable Playwright automation frameworks**.

---

## 📖 Overview

This session focuses on:

- TypeScript installation and execution
- Static type checking and type inference
- TypeScript data types
- `any` vs `unknown`
- `never` and tuples
- Arrays, objects, and nested objects
- Type aliases, union types, and intersection types
- Type narrowing and type assertion
- Enums and environment configuration
- Data-driven testing using JSON and CSV
- Environment parameterization

---

## 📚 Topics Covered

### ⚙️ TypeScript Introduction

- Installing TypeScript globally and locally
- Initializing `tsconfig.json`
- Compiling TypeScript using `tsc`
- Executing TypeScript using `ts-node`
- Static type checking
- IntelliSense and auto-suggestions
- TypeScript benefits in Playwright automation

```bash
npm install --save-dev typescript
npx tsc --init
npx ts-node filename.ts
```

### 🔤 Type System and Data Types

| Type | Purpose |
|---|---|
| `number` | Numeric values and execution counts |
| `string` | Credentials, URLs, and text |
| `boolean` | Validation results |
| `undefined` | Value not assigned |
| `null` | Intentional absence of a value |
| `any` | Accepts any type without type safety |
| `unknown` | Accepts any type but requires validation |
| `never` | Represents a value that never occurs or a function that never returns normally |
| `tuple` | Represents an array with defined element types and positions |

### 🛡️ `any` vs `unknown`

```typescript
let data: any = "Hello";
data.toUpperCase(); // Allowed by TypeScript

let value: unknown = "Hello";

// Type checking is required
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

**Best practice:** Prefer `unknown` when the data type is not known, and validate the value before using it.

### 🗂️ Data Structures

- Arrays
- Objects
- Nested objects
- Type aliases
- Union types (`|`)
- Intersection types (`&`)
- Type narrowing
- Switch-based environment selection

```typescript
type Browser = "chrome" | "edge" | "firefox" | "safari";

type Credentials = {
    username: string;
    password: string;
};

type EnvironmentUrl = {
    url: string;
};

type TestConfig = Credentials & EnvironmentUrl;
```

### 🔍 Type Narrowing and Type Assertion

**Type narrowing** checks a value's type before using it.

```typescript
let value: unknown = "Playwright";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

**Type assertion** tells TypeScript to treat a value as a specified type. It does not convert the actual value.

```typescript
let value: unknown = "Playwright";
console.log((value as string).toUpperCase());
```

Prefer type narrowing when possible because it provides runtime validation.

### 🔢 Enums

Enums define named constants for fixed sets of values.

Common automation use cases:

- Browser types
- Execution status
- Environment names
- User roles
- Payment and order status

```typescript
enum ExecutionStatus {
    PASS = "PASS",
    FAIL = "FAIL",
    SKIP = "SKIP"
}
```

The session also covers numeric enums, string enums, and the differences between enums and type aliases.

---

## 🔄 Data Parameterization

Parameterization allows the same test logic to execute with different inputs.

### JSON Parameterization

- Store structured test data in JSON files.
- Import the data into test files.
- Iterate through multiple datasets.
- Separate test data from test logic.

### CSV Parameterization

Install the CSV parser:

```bash
npm install csv-parse
```

Read and parse CSV data:

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

### Environment Parameterization

Run the same tests against Dev, QA, UAT, Staging, or Production using environment-specific configuration.

```typescript
const env = process.env.ENV || "qa";
```

**Key benefit:** Reuse test logic without hardcoding environment URLs and credentials.

---

## 🔐 Authentication and Storage State

The session also introduces authentication persistence using Playwright's `storageState()`.

```typescript
await page.context().storageState({
    path: "auth.json"
});
```

Reuse the saved state:

```typescript
test.use({
    storageState: "auth.json"
});
```

Topics include:

- Browser context
- Authentication cookies
- Local Storage
- Session Storage
- `storageState()`
- Accessing browser storage using `page.evaluate()`
- Reading cookies using `context.cookies()`

---

## 🎯 Learning Objectives

After completing Day 09, you will be able to:

- Explain the benefits of TypeScript in Playwright frameworks.
- Apply type annotations and type inference.
- Differentiate `any`, `unknown`, and `never`.
- Work with tuples and structured data.
- Create reusable types using type aliases.
- Apply union and intersection types.
- Understand type narrowing and type assertion.
- Use enums for fixed framework values.
- Implement JSON, CSV, and environment parameterization.
- Reuse authentication using `storageState()`.
- Understand Local Storage, Session Storage, and Cookies.

---

## 🏗️ TypeScript in Playwright Frameworks

```text
TypeScript Fundamentals
        │
        ├── Type Safety
        │     ├── Annotations
        │     ├── Inference
        │     └── Narrowing
        │
        ├── Data Modeling
        │     ├── Arrays & Objects
        │     ├── Type Aliases
        │     ├── Union & Intersection
        │     └── Enums
        │
        ├── Parameterization
        │     ├── JSON
        │     ├── CSV
        │     └── Environment Variables
        │
        └── Authentication
              └── Storage State
```

---

## 📚 Best Practices

- Enable strict type checking where practical.
- Prefer inferred types when the type is obvious.
- Avoid `any` when a safer type is available.
- Validate `unknown` values before using them.
- Prefer type narrowing over unsafe type assertions.
- Use type aliases for reusable data structures.
- Use union types to restrict allowed values.
- Use enums or literal unions for fixed framework options.
- Separate test data from test logic.
- Store environment-specific configuration separately.
- Keep credentials and tokens out of source control.

---

## 🎓 Interview Preparation

Common interview topics:

- Why use TypeScript instead of JavaScript?
- What is static type checking?
- Type annotation vs type inference
- `any` vs `unknown`
- What is `never`?
- What is a tuple?
- Type alias vs union type vs intersection type
- Type narrowing vs type assertion
- Enum vs type alias
- How does TypeScript improve Page Object Model design?
- JSON vs CSV parameterization
- How do you manage multiple environments?
- What does `storageState()` capture?
- Local Storage vs Session Storage vs Cookies

---

## 🎯 Key Learning Outcome

By the end of Day 09, learners can use TypeScript's type system and data modeling features to build **safer, reusable, and maintainable Playwright automation frameworks**, with parameterized test data and reusable authentication state.

---

## 👨‍💻 Author

**Bhuvanesh**

*JavaScript | TypeScript | Playwright | Test Automation*