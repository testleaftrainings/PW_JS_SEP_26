import test from "@playwright/test";

test.describe.parallel("lead management",{tag:"@CRM"},() => {
    // beforeAll hook that is executed once per worker process before all tests.   
    test.beforeAll("Basic Directory at project level", async () => {
        console.log("ALL the require folder directory is created successfully here");
    })

    // beforeEach hook that is executed before each test. 
    test.beforeEach("Basic Test configuration is done", async ({ page }) => {
        await page.goto("https://leaftaps.com/opentaps/control/login")
        await page.locator("#username").fill("demosalesmanager")
        await page.locator("[name='PASSWORD']").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
        await page.locator(`text='CRM/SFA'`).click()
        await page.getByRole('link', { name: "Leads", exact: true }).click()
    })

    test("create lead", async ({ page }) => {
        await page.getByRole('link', { name: "Create Lead", exact: true }).click()
    })

    test("merge lead", async ({ page }) => {
        await page.getByRole('link', { name: "Merge Leads", exact: true }).click()
    })

    // afterEach hook that is executed after each test.
    test.afterEach("Fetch Execution Status", ({ }, testInfo) => {
        console.log(testInfo.title, testInfo.status, testInfo.error);
    })

    // afterAll hook that is executed once per worker after all tests
    test.afterAll("Global Tear Down", () => {
        console.log("Close all the currently active resources");
    })

})