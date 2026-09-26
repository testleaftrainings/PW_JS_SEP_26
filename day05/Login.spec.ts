import  test from '@playwright/test';


test('Login Page',async({page})=>{

    // browser-context-page -{page}
    await page.goto("https://leaftaps.com/opentaps/control/login")

    await page.locator("#username").fill("DemoCSR")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    //get title of the page
    const title=await page.title()
    console.log(title)

})

test('Login Page for Leaftaps',async({page})=>{

    // browser-context-page -{page}
    await page.goto("https://leaftaps.com/opentaps/control/login")

    await page.locator("#username").fill("DemoCSR")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    //get title of the page
    const title=await page.title()
    console.log(title)

})

test('Login Page for Leaftaps2',async({page})=>{

    // browser-context-page -{page}
    await page.goto("https://leaftaps.com/opentaps/control/login")

    await page.locator("#usernam").fill("DemoCSR")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    //get title of the page
    const title=await page.title()
    console.log(title)

    //xpath 
    await page.locator("//a[text()='New Releases']").first().click()
    await page.locator("//a[text()='New Releases']").last().click()
    await page.locator("//a[@class='nav-a  ']").nth(1).click()

    //collection based xpath - index value 1 to 5
    await page.locator("(//a[@class='nav-a  '])[2]").click()

})