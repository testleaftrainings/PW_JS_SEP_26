import { test } from "../fixtures/salesforceFixture"

test("Verifying lead using fixture patten", async ({ SFlogin, SFapi }) => {
    // API 
    // Create a lead
    const leadId = await SFapi.createResource()
    // Fetch the lead
    const companyName = await SFapi.fetchResource(leadId)

    // Validating the Lead Create    
    // UI - Login    
    await SFlogin.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await SFlogin.verifyUsername()
    await SFlogin.enterPassword("Qeagle@2026")
    // UI - Home 
    const SFhome = await SFlogin.clickLoginButton()
    // UI - Leads
    const SFlead = await SFhome.navigateToLeadPage()
    // UI - Verify lead is Create or not
    await SFlead.searchLead(companyName)
})
