import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/login"
import { SalesforceAPI } from "../utils/apiUtility"

// step 1 : create a customize type for the fixture
type salesforceObject = {
    SFlogin: LoginPage,
    SFapi: SalesforceAPI
}
// step 2 : create the re useable configuration like object creation
export const test = baseTest.extend<salesforceObject>({
    SFlogin: async ({ page }, use) => {
        await page.goto("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/")
        const loginObj = new LoginPage(page)
        await use(loginObj)
    },
    SFapi: async ({ request }, use) => {
        const apiObj = new SalesforceAPI(request);
        await apiObj.generateToken()
        await use(apiObj)
    }
})