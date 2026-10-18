import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/login"

// STEP 1 : CUSTOM TYPE FOR THIS FIXTURE
type leaftapsObject = {
    LFlogin: LoginPage
}

// STEP 2 : IMPLEMENT THE REUSEABLE CONFIGURATION
export const test = baseTest.extend<leaftapsObject>({
    LFlogin: async ({ page }, use) => {
        await page.goto("https://leaftaps.com/opentaps/control/login")
        const loginObject = new LoginPage(page)
        await use(loginObject)
    }
})