# 🚀 Day 12 – Playwright MCP Server, CLI & GitHub Copilot Agents

## 📌 Overview
This session introduces an AI-assisted Playwright automation workflow using GitHub Copilot Agents, Playwright MCP Server, and Playwright CLI. Learners explore the Planner, Generator, and Healer workflow for planning, generating, executing, and repairing automation tests using the Page Object Model (POM).

## 📚 Topics Covered

### 1. Playwright Project Setup
- Initialize a Playwright TypeScript project
- Install and update `@playwright/test`
- Initialize Playwright agents using `npx playwright init-agents --loop=vscode`
- Install Playwright CLI and its skills
- Configure the Playwright MCP Server
- Verify CLI and Playwright installations

### 2. Playwright MCP Server & CLI
- Introduction to Playwright MCP Server
- Using browser inspection to understand application behavior
- Inspecting the live DOM and identifying reliable locators
- Using Playwright CLI for browser interaction and automation workflows
- Understanding the interaction between AI agents, MCP, CLI, and the browser

### 3. Planner Agent
- Analyze business requirements
- Identify the end-to-end business flow and navigation
- Define preconditions and test data
- Identify validation points, expected results, risks, and edge cases
- Recommend Page Object and test file structures
- Generate an execution plan without writing automation code

### 4. Generator Agent
- Convert the Planner output into a Playwright automation framework
- Implement the Page Object Model
- Generate page classes and test specifications
- Use Faker for realistic, unique test data
- Apply recommended Playwright locators and explicit assertions
- Avoid hard waits and follow clean coding practices
- Compile, execute, debug, and rerun tests

### 5. Healer Agent
- Analyze failed tests, stack traces, and execution reports
- Inspect the live application using Playwright MCP
- Diagnose locator, synchronization, navigation, authentication, and assertion issues
- Repair affected code while preserving test objectives
- Rerun failed tests and verify the fixes
- Report root causes, code changes, and remaining failures

### 6. End-to-End Automation Workflow
- Set up the Playwright project and tools
- Generate the execution plan
- Review and approve the plan
- Generate the automation framework
- Execute the tests
- Analyze failures and apply fixes
- Rerun tests and review the HTML report

## 🎯 Learning Objectives
By the end of this session, learners should be able to:

- Configure a Playwright TypeScript project with MCP and CLI tools.
- Understand the roles of Planner, Generator, and Healer agents.
- Convert business requirements into structured automation plans.
- Generate POM-based automation using live application inspection.
- Diagnose and repair test failures systematically.
- Execute tests and review Playwright HTML reports.

## 💡 Best Practices
- Follow the Planner → Generator → Healer workflow.
- Review and approve the execution plan before generating code.
- Inspect the live application instead of guessing locators.
- Use recommended Playwright locators and web-first assertions.
- Avoid fixed waits such as `page.waitForTimeout()`.
- Keep page objects and test specifications separate.
- Never weaken assertions or remove tests just to achieve a passing result.
- Protect credentials and avoid exposing secrets in source code, logs, screenshots, and reports.

## 🎤 Interview Preparation
- What is the purpose of the Playwright MCP Server?
- What is the difference between Playwright MCP Server and Playwright CLI?
- What are the responsibilities of Planner, Generator, and Healer agents?
- How does browser inspection improve locator reliability?
- How can AI agents help generate a POM-based Playwright framework?
- How should a Healer Agent diagnose and repair failed tests?
- Why should generated automation be reviewed and executed before acceptance?

## 🏆 Key Learning Outcome
Learners understand how to combine GitHub Copilot Agents, Playwright MCP Server, and Playwright CLI to plan, generate, execute, and repair TypeScript-based Playwright automation using the Page Object Model.

## 👨‍💻 Author
**Bhuvanesh**