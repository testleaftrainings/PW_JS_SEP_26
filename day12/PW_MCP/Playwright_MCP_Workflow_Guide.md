# Playwright MCP Workflow (Planner → Generator → Healer)

## Prerequisites

Ensure the following are installed:

-   Node.js (Latest LTS)
-   Visual Studio Code / VS Code Insiders
-   GitHub Copilot Chat Extension
-   Playwright Extension (if required)
-   GitHub Copilot Agent enabled
-   Internet connection

------------------------------------------------------------------------

## Step 1: Create a New Workspace

``` bash
mkdir Playwright-MCP-Demo
cd Playwright-MCP-Demo
```

Open the folder in VS Code.

``` bash
code .
```

------------------------------------------------------------------------

## Step 2: Initialize a New Playwright Project

``` bash
npm init playwright@latest
```

Follow the prompts:

-   TypeScript
-   tests folder
-   GitHub Actions (Optional)
-   Install Browsers → Yes

------------------------------------------------------------------------

## Step 3: Install the Latest Playwright Test Package

``` bash
npm install -D @playwright/test@latest
```

------------------------------------------------------------------------

## Step 4: Verify Installation

Open **package.json** and confirm:

``` json
"devDependencies": {
  "@playwright/test": "^latest"
}
```

------------------------------------------------------------------------

## Step 5: Initialize Playwright Agents

From the project root:

``` bash
npx playwright init-agents --loop=vscode
```

> Replace `vscode` with your preferred supported client if required.

------------------------------------------------------------------------

## Step 6: Open GitHub Copilot Chat

Open **GitHub Copilot Chat** and switch to:

**Planner Agent**

------------------------------------------------------------------------

## Step 7: Planner Agent Prompt

``` text
Application URL:
http://leaftaps.com/opentaps/control/main

Credentials:
Username: democsr2
Password: crmsfa

Test Scenario:

Create a comprehensive Playwright test plan for the following scenario.

1. Launch the application.
2. Login using the provided credentials.
3. Navigate to CRM/SFA.
4. Navigate to Create Lead.
5. Create a new Lead.
6. Verify the Lead is created successfully.

Include:
- Preconditions
- Test Data
- Test Steps
- Expected Results
- Validation Points
- Possible Edge Cases

The output should be structured so it can be directly used by the Generator Agent.
```

------------------------------------------------------------------------

## Step 8: Review the Planner Output

-   Validate the workflow.
-   Review navigation steps.
-   Confirm assertions and validations.
-   Save or attach the planner output.

------------------------------------------------------------------------

## Step 9: Switch to Generator Agent

Prompt:

``` text
Using the attached Planner output, generate a complete Playwright TypeScript automation framework.

Requirements:

- Use Playwright Test
- Follow Page Object Model (POM)
- Create reusable locators
- Use meaningful method names
- Add assertions
- Generate production-ready code
```

Expected Output:

-   Test file
-   Page Objects
-   Reusable methods
-   Assertions
-   Playwright implementation

------------------------------------------------------------------------

## Step 10: Execute the Test

Run all tests:

``` bash
npx playwright test
```

Run a specific test:

``` bash
npx playwright test tests/createLead.spec.ts
```

------------------------------------------------------------------------

## Step 11: Review Execution

-   Validate test execution.
-   Verify assertions.
-   Review Playwright reports.

------------------------------------------------------------------------

## Step 12: Switch to Healer Agent (If Required)

Prompt:

``` text
Analyze the generated Playwright code.

The test is failing with the following error:

<Attach Error Log>

Fix the issue while preserving the existing framework structure.

Update only the affected code.
```

The Healer Agent should:

-   Analyze failures
-   Fix locators
-   Resolve synchronization issues
-   Improve assertions
-   Regenerate corrected code

------------------------------------------------------------------------

## Step 13: Re-run the Test

``` bash
npx playwright test
```

Repeat the Planner → Generator → Healer cycle until the test passes
successfully.

------------------------------------------------------------------------

# Workflow Summary

``` text
Create Workspace
        │
        ▼
Initialize Playwright
        │
        ▼
Install Latest Playwright Test
        │
        ▼
Initialize Playwright Agents
        │
        ▼
Planner Agent
        │
Generate Test Plan
        │
        ▼
Generator Agent
        │
Generate Playwright Code
        │
        ▼
Execute Test
        │
        ▼
Any Errors?
   │           │
  Yes         No
   │           │
   ▼           ▼
Healer Agent  Completed
   │
Fix Code
   │
   ▼
Run Test Again
```

## Best Practices

-   Start with the **Planner Agent**.
-   Validate the generated plan before code generation.
-   Use the **Generator Agent** to create production-ready automation.
-   Use the **Healer Agent** only to resolve issues in generated code.
-   Re-run the tests after every fix.
