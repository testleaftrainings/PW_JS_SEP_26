# 🚀 Playwright Day 14 – API Integration with Playwright

Welcome to **Day 14** of the Playwright learning series.

This repository focuses on **API Testing using Playwright**, covering REST API fundamentals, ServiceNow integration, HTTP requests, response validation, and API automation best practices.

---

## 📖 Overview

Playwright is more than a browser automation framework—it provides built-in support for testing REST APIs through the `APIRequestContext`.

This repository demonstrates how to perform API testing using Playwright by integrating with **ServiceNow REST APIs**, validating responses, chaining API requests, and applying industry-standard API testing practices.

---

## 📚 Topics Covered

### 🌐 REST API Fundamentals

- HTTP Headers
- HTTP Methods
- CRUD Operations
- Request Parameterization
- HTTP Status Codes
- URL Anatomy
- URI vs URL
- REST API Request Flow

### ☁️ ServiceNow API

- ServiceNow Overview
- ServiceNow Architecture
- Table API
- Incident Management
- UI vs REST API
- ServiceNow Record Creation Flow
- Incident Fields
- API Field Mapping

### ⚡ Playwright API Testing

- APIRequestContext
- GET Requests
- POST Requests
- PUT Requests
- PATCH Requests
- DELETE Requests
- Request Options
- Headers
- Query Parameters
- Request Body

### ✅ API Response Validation

- Status Code Validation
- Response Header Validation
- Response Body Validation
- Response Time Validation
- Field Validation
- Data Type Validation
- Object Validation
- Array Validation

### 🔗 API Method Chaining

- Create Record
- Retrieve Record
- Update Record
- Delete Record

### 📬 Postman vs Playwright

- Variable Management
- API Validation Comparison
- Best Practices

---

## 🎯 Learning Objectives

After completing this repository, you will be able to:

- Understand REST API fundamentals
- Perform CRUD operations using Playwright
- Work with ServiceNow Table APIs
- Send authenticated API requests
- Validate API responses
- Chain multiple API requests
- Compare API testing in Postman and Playwright
- Follow industry-standard API testing practices


## 💻 Technologies Used

- Playwright
- TypeScript
- Node.js
- REST APIs
- ServiceNow
- JSON

---

## 🚀 API Concepts Covered

| Category | Topics |
|----------|--------|
| HTTP | Methods, Headers, Status Codes |
| REST API | CRUD Operations |
| ServiceNow | Table API |
| Request | URL, Headers, Body, Parameters |
| Response | Status, Headers, Body |
| Validation | Assertions & Best Practices |

---

## 🔄 CRUD Operations

| Operation | HTTP Method |
|-----------|-------------|
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

---

## 🛠 Common Playwright API Methods

- `request.get()`
- `request.post()`
- `request.put()`
- `request.patch()`
- `request.delete()`

---

## ✅ Response Validation

The repository demonstrates validation of:

- HTTP Status Codes
- Response Headers
- Response Body
- Field Values
- Data Types
- Arrays
- Objects
- Business Rules

---

## 🔗 API Workflow

```text
Create Record
      │
      ▼
Retrieve Record
      │
      ▼
Update Record
      │
      ▼
Delete Record
```

---

## 📚 Best Practices

- Validate status codes before parsing the response.
- Verify response headers and body.
- Use `sys_id` for ServiceNow record operations.
- Store reusable values for API chaining.
- Separate test data from test logic.
- Keep API tests independent and maintainable.

---

## ▶️ Getting Started

Install dependencies

```bash
npm install
```

Run all API tests

```bash
npx playwright test
```

Run a specific API test

```bash
npx playwright test tests/api.spec.ts
```

---

## 🎓 Interview Preparation

This repository covers commonly asked interview topics, including:

- REST API Fundamentals
- HTTP Methods & Status Codes
- ServiceNow Table API
- APIRequestContext
- API Validation
- Request Parameterization
- Method Chaining
- Postman vs Playwright
- HTTP Headers
- Response Handling

---

## 📖 References

- Playwright Documentation
- ServiceNow REST API Documentation
- JSONPath Finder
- JWT.io
- Base64 Encode

---

## 👨‍💻 Author

**Bhuvanesh**

*Playwright | API Testing | TypeScript | Test Automation*

---

⭐ If you find this repository useful, consider giving it a **Star**.