import test, { chromium } from "@playwright/test"

test('Bypass Authentication using presistent context',async({})=>{

    const userDataDir ="./contextData"
    const perProfile = await chromium.launchPersistentContext(userDataDir,{
        headless:false,
        httpCredentials:{
            username:"admin",
            password:"testleaf"
        },
        permissions:["notifications"]
    })
    const page = await perProfile.newPage()
    await page.goto("https://leafground.com/auth.xhtml")
    await page.getByRole("button",{name: "Basic Auth"}).click()
    await page.waitForTimeout(3000)
})