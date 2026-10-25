import test from "@playwright/test";
import { LoginPage } from "../pages/login";

test("Learn to verify lead using the reuseable methods", async ({ page }) => {

    //await page.goto("https://login.salesforce.com/?locale=in")
    await page.goto("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/")
    const lp = new LoginPage(page)
    await lp.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await lp.verifyUsername()
    await lp.enterPassword("Qeagle@2026")
    const hp = await lp.clickLoginButton()
    const leadPage = await hp.navigateToLeadPage()
    await leadPage.searchLead("MechJR")

})