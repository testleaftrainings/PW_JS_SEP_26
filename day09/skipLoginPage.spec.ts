import test from "@playwright/test"

test.use({storageState:'data/auth.json'})
test("Learn to skip login using the auth.json file", async({page})=>{
   await page.goto("https://uibank.uipath.com/accounts/account-apply")
   await page.getByRole('textbox',{name: "Give a Nickname to Your Account"}).fill('PW_SEP_26_Demo')
})