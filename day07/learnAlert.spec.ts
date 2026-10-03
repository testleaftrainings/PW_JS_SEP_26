import test, { expect } from "@playwright/test";

test("learn to handle Modal alerts", async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml")
    page.on("dialog", async (alert) => {
        // Event is registered once after the url is loaded
        const alertType = alert.type()
        console.log(alertType);
        console.log(alert.message());
        // Action's to be handled after getting the type of alert
        // selection statement - if else block , 
        switch (alertType) {
            case 'confirm':
                await alert.accept()
                break;
            case 'prompt':
                // Enter a value and accept the alert 
                await alert.accept("Bhuvanesh")
                break;
            default:
                await alert.accept()
                break;
        }
    })

    // Modal alert --> it is not inspectable
    await page.locator(`//h5[text()=' Alert (Simple Dialog)']/following-sibling::button`).click()
    // 1. simple alert 
    // playwright will implicilty acknowledge's the alert, so no explicit treatment is needed.
    let simpleAlertVerification = await page.locator("#simple_result").innerText()
    console.log(simpleAlertVerification);
    // 2. Confirmation //h5[text()=' Alert (Confirm Dialog)']/following-sibling::button
    // playwright will implicilty Reject's the confirmation alert, 
    // but if you need to acknowledge the confirmation alert explicit treatment is needed.
    await page.locator(`//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button`).click()
    let confirmationAlertVerification = await page.locator("#result").innerText()
    console.log(confirmationAlertVerification);
    // 3. Prompt Alert //h5[text()=' Alert (Prompt Dialog)']/following-sibling::button
    // playwright will implicilty Reject's the Prompt alert, 
    // but if you need to acknowledge the prompt alert and enter the value, explicit treatment is needed.
    await page.locator(`//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button`).click()
    let promptAlertVerification = await page.locator("#confirm_result").innerText()
    await expect(page.locator("#confirm_result")).toContainText("User entered name as: Bhuvanesh");
    console.log(promptAlertVerification);

})