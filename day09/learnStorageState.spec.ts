import test from "@playwright/test"

test("Learn to store the browser storage", async ({ page, context }) => {
    await page.goto("https://uibank.uipath.com/welcome")
    await page.getByRole('textbox', { name: "Username" }).fill('FebApiuser')
    await page.getByRole('textbox', { name: "Password" }).fill('Eagle@123')
    await page.getByRole('button', { name: "Sign In" }).click()
    await page.getByRole('button', { name: "I agree to the Privacy Policy →" }).click()
    await page.getByText('Apply For New Account ').click()
    await context.storageState({
        path: 'data/auth.json'
    });

    const data = await page.evaluate(() => ({
        ...localStorage
    }));
    console.log("Local storage fetched from the runtime" + data);

})