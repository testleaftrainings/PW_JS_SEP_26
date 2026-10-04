import test, { expect } from "@playwright/test";
import Credentials from "../../data/LF_Login.json";
import { parse } from "csv-parse/sync"
import fs from "fs"

const appUrl = "https://leaftaps.com/opentaps/control/login"

// parse -->
// args 1 --> file location
// args 2 --> customizied Rule to parse into object
let records: any[] = parse(fs.readFileSync("./data/LF_Leads.csv"), { columns: true, skipEmptyLines: true })



// const adminUsername= "demosalesmanager"
// const adminPassword="crmsfa"

// array 
// const adminCredentials= ["demosalesmanager","crmsfa"]
// const guestCredentials= ["democsr","crmsfa"]

// Object Literals
// const Credentials =[{
//     role : "admin",
//     username : "demosalesmanager",
//     password : "crmsfa"
// },
// {
//     role : "guest",
//     username : "democsr",
//     password : "crmsfa"
// }]



test.describe("Learn Parameterization", { tag: "@Parameterization" }, () => {
    for (const Credential of Credentials) {
        for (const formData of records) {
            test(`Learn JSON parameterization - user role is ${Credential.role} - ${formData.dataSetNo}`, async ({ page }) => {
                await page.goto(appUrl)
                await page.locator("#username").fill(Credential.username)
                await page.locator("[name='PASSWORD']").fill(Credential.password)
                await page.locator(".decorativeSubmit").click()
                await page.locator(`text='CRM/SFA'`).click()
                await page.getByRole('link', { name: "Leads", exact: true }).click()
                await page.getByRole("link", { name: "Create Lead" }).click();

                // Enter Lead details
                await page.locator("#createLeadForm_companyName")
                    .fill(formData.companyName);

                await page.locator("#createLeadForm_firstName")
                    .fill(formData.firstName);

                await page.locator("#createLeadForm_lastName")
                    .fill(formData.lastName);

                await page.locator("#createLeadForm_primaryPhoneNumber")
                    .fill(formData.phoneNumber);

                // Create Lead
                await page.locator("input[name='submitButton']").click();

                // Verify Lead creation
                await expect(
                    page.locator("#viewLead_companyName_sp")
                ).toContainText(formData.companyName);

                console.log("Lead created successfully");

            })
        }
    }
})