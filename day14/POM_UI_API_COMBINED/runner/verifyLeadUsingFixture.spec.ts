import { test } from "../fixtures/salesforceFixture"

test("Verifying lead using fixture patten", async ({ SFlogin }) => {
    await SFlogin.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await SFlogin.verifyUsername()
    await SFlogin.enterPassword("Qeagle@2026")
    const SFhome = await SFlogin.clickLoginButton()
    const SFlead = await SFhome.navigateToLeadPage()
    await SFlead.searchLead("MechJR")
})
