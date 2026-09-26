import test from "@playwright/test";

test("Handling Dropdown",async({page})=>{


await page.goto("https://www.leafground.com/select.xhtml")

//select & options
await page.selectOption("//select[@class='ui-selectonemenu']",{label:'Playwright'})
await page.waitForTimeout(2000)
await page.selectOption(".ui-selectonemenu",{index:3})

await page.waitForTimeout(2000)
//Non select Dropdown
await page.locator("//label[text()='Select Country']").click()
await page.locator("//li[text()='India']").click()



})