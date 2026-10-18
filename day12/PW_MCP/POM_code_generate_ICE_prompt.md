ICE Approch :
================

Instruction

1. Generate playwright typescript code for leaftaps application in creating a lead using Page Object Model, create seperate folder for tests and pages.

2. Make sure to add comments.

3. Make sure to follow the coding best practices.

4. Create test files to run a playwright script under tests and pages under page.

5. Data Credentials username : democsr2 , password : crmsfa 

6. The remaning data for test input can be generated using the faker library.

7. Compile and run the code after generation.

9. Debug for failures after the test run.

10. Show the report at the end.

Context

You are an AI asistant to generate the playwright typescript code for leaftaps application

Example

import test from "playwright/test";

test("Login page ",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("DemoSalesManager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click
    await page.click(`text='CRM/SFA'`)
    //get title of the page
    const pageTitle=await page.title()
    console.log(pageTitle)
})




/// Optimized Prompt

# Role

You are a Senior QA Automation Engineer with expertise in Playwright and TypeScript.

# Objective

Generate a production-ready Playwright TypeScript automation framework to verify the successful creation of a Lead in the Leaftaps CRM application.

# Application Details

Base URL:
http://leaftaps.com/opentaps/control/main

Login Credentials:
Username: democsr
Password: crmsfa

# Scenario

Automate the following business flow:

1. Launch the application.
2. Login using the provided credentials.
3. Navigate to CRM/SFA.
4. Navigate to Create Lead.
5. Populate all mandatory fields.
6. Generate dynamic test data using the Faker library (except username and password).
7. Submit the form.
8. Verify that the Lead is created successfully by validating the confirmation page.

# Framework Requirements

- Language: TypeScript
- Automation Tool: Playwright Test
- Design Pattern: Page Object Model (POM)

Project Structure:

```
pages/
tests/
```

Create:

- LoginPage
- HomePage
- CreateLeadPage
- createLead.spec.ts

# Coding Standards

- Use Playwright recommended locators.
- Avoid XPath whenever possible.
- Do not use page.waitForTimeout().
- Use explicit assertions with expect().
- Use meaningful method names.
- Keep the code modular and reusable.
- Add concise comments only where necessary.

# Execution

After generating the code:

1. Install any required dependencies.
2. Compile the project.
3. Execute the test.
4. If any compilation or runtime errors occur, fix them automatically.
5. Re-run the test until it passes.
6. Display the final Playwright HTML report command.

# Expected Output

Return only:

- Folder structure
- Source code
- Commands executed
- Test execution summary
- Final report location