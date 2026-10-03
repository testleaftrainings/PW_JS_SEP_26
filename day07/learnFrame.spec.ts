import test from "@playwright/test";

test("Learn to handling the Frame and nested Frames in the webpage", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")
    // Frame --> DOM inside a DOM
    console.log(page.frames().length);
    const allFrameContent = page.frames()
    for (let i = 0; i < page.frames().length; i++) {
        console.log(allFrameContent[i].url());
        console.log(allFrameContent[i].name());
    }

    // approach 1 : frame -->  It help to navigate from the main frame to the targetted Iframe
    await page.frame({ url: "https://leafground.com/default.xhtml" })?.getByRole("button", { name: "Click Me" }).click()

    // approach 2 : frameLocator --> It help to navigate from the main frame to the targetted Iframe
    // use case : nest iframe scenario --> frameLocator
    let innerFrame = page.frameLocator(`//iframe[@src='page.xhtml']`).frameLocator(`#frame2`).locator(`#Click`)
    await innerFrame.click()
    await page.waitForTimeout(3000)
    const content = await innerFrame.innerText()
    console.log(content)
})