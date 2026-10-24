# 🚀 Playwright Day 13 –API Fundamentals

Welcome to **Day 13** of the Playwright learning series.

This repository focuses on **API Testing using Playwright**, covering REST API fundamentals, ServiceNow integration, HTTP requests, response validation, and API automation best practices.

---

## 📖 Overview

Playwright is more than a browser automation framework—it provides built-in support for testing REST APIs through the `APIRequestContext`.

This repository demonstrates how to perform API testing using Playwright by integrating with **ServiceNow REST APIs**, validating responses, chaining API requests, and applying industry-standard API testing practices.

### 🌐 API & Web Services Fundamentals

- What is a Web Service?
- Why Web Services are Required
- Monolithic vs Microservices Architecture
- HTTP Request & Response
- HTTP Headers
- HTTP Methods
- CRUD Operations
- HTTP Status Codes
- URL vs URI
- Base URL & Endpoint
- API Parameterization

### ⚙️ API Architectures

- SOAP
- REST
- GraphQL
- gRPC

Including:

- Architecture Comparison
- Performance
- Security
- Streaming
- Browser Support
- Real-world Use Cases

---

## 🎯 Learning Objectives

After completing this repository, you will be able to:

- Build data-driven Playwright tests
- Read test data from JSON files
- Execute tests across multiple environments
- Work with CSV test data
- Understand Web Services and REST APIs
- Explain HTTP methods and status codes
- Differentiate REST, SOAP, GraphQL, and gRPC
- Apply industry best practices for API testing


## 💻 Technologies Used

- Playwright
- TypeScript
- Node.js
- JSON
- CSV
- dotenv


## 🌍 API Concepts Covered

- Web Services
- REST APIs
- HTTP Protocol
- CRUD Operations
- HTTP Methods
- Headers
- Status Codes
- URL Anatomy
- URI vs URL


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