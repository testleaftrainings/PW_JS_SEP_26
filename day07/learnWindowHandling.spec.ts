import test, { expect } from "@playwright/test";

// test("Learn Single and multiple window handling",async({context,page})=>{
//     await page.goto("https://leafground.com/window.xhtml")
//     // REGISTERING FOR THE EVENT IS DONE, HERE 
//     let pageRegistar = context.waitForEvent("page")
//     // TRIGGERING THE NEW WINDOW
//     await page.getByRole("button",{name: "Open", exact :true}).click()
//     // Promise Fullfilled
//     await page.waitForTimeout(2000)
//     const childPage = await pageRegistar
//     console.log(await childPage.title());
//     let emailField =childPage.getByRole("textbox",{name: "E-mail Address"})
//     await emailField.fill("bhuvanesh.moorthy@qeagle.com")
//     await expect(emailField).toHaveValue("bhuvanesh.moorthy@qeagle.com")
// })

test("Learn Single and multiple window handling", async ({ context, page }) => {
    await page.goto("https://leafground.com/window.xhtml")
    let [allWindows] = await Promise.all([context.waitForEvent("page"), page.getByRole("button", { name: "Open Multiple", exact: true }).click()])
    // REGISTERING FOR THE EVENT IS DONE --> index 0
    // TRIGGERING THE NEW WINDOW --> index 1
    // Promise Fullfilled --> page[]
    await page.waitForTimeout(3000)
    const allPageInstance = allWindows.context().pages()
    console.log("Total active pages in the automated browser is " + allPageInstance.length);
    // Fetch the page Instance of Dashboard page
    let instanceOfDashboardPage: any
    // Looping and fetching all the page instance inside the array[page]
    for (const childPage of allPageInstance) {
        const titleOfPage = await childPage.title()
        // Printing the title of the active pages
        console.log(titleOfPage);
        // Verifying the title first to store the instance of the page 
        if (titleOfPage === "Dashboard") {
            instanceOfDashboardPage = childPage
        }
    }
    // User Interactions in the Dashborad Page
    await instanceOfDashboardPage.bringToFront()
    let emailField = instanceOfDashboardPage.getByRole("textbox", { name: "E-mail Address" })
    await emailField.fill("bhuvanesh.moorthy@qeagle.com")
    await expect(emailField).toHaveValue("bhuvanesh.moorthy@qeagle.com")
})