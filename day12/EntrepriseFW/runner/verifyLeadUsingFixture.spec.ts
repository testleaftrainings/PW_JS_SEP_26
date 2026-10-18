import { test } from "../fixtures/leaftapsFixture"
import { parse } from "csv-parse/sync"
import fs from "fs"
import Credentials from "../../../data/LF_Login.json"

let records: any[] = parse(fs.readFileSync("./data/LF_Leads.csv"), { columns: true, skipEmptyLines: true })

test.describe("POM along with Data Parameterization", { tag: "@POM" }, () => {
    for (const Credential of Credentials) {
        for (const formData of records) {
            test(`Verify Lead creation in the leaftaps application -user role is ${Credential.role} - ${formData.dataSetNo}`, async ({ LFlogin }) => {
                await LFlogin.enterUsername(Credential.username)
                await LFlogin.enterPassword(Credential.password)
                const welcomePage = await LFlogin.clickLoginButton()
                const homePage = await welcomePage.clickCrm()
                const leadPage = await homePage.clickLeads()
                const createLeadPage = await leadPage.clickCreateLeadButton()
                await createLeadPage.enterCompanyName(formData.companyName)
                await createLeadPage.enterFirstName(formData.firstName)
                await createLeadPage.enterLastName(formData.lastName)
                await createLeadPage.enterPhno(formData.phoneNumber)
                const viewLeadPage = await createLeadPage.clickCreateButton()
                viewLeadPage.verifyLead(formData.companyName)
            })
        }
    }
})