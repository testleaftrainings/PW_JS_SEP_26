import test from "@playwright/test";
import { LoginPage } from "../pages/login";

test("TC001 - Creating a lead in the leaftaps application", async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/login")
    const lp = new LoginPage(page)
    await lp.enterUsername("demosalesmanager")
    await lp.enterPassword("crmsfa")
    const welcomePage = await lp.clickLoginButton()
    const homePage = await welcomePage.clickCrm()
    const leadPage = await homePage.clickLeads()
    const createLeadPage = await leadPage.clickCreateLeadButton()
    await createLeadPage.enterCompanyName("BirlaSoft")
    await createLeadPage.enterFirstName("Bhuvanesh")
    await createLeadPage.enterLastName(".")
    await createLeadPage.enterPhno("778866")
    const viewLeadPage = await createLeadPage.clickCreateButton()
    viewLeadPage.verifyLead("BirlaSoft")
})