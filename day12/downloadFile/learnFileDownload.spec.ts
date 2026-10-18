import test, { expect } from "@playwright/test";
import path from "path";
import fs from 'fs'

test("Learn to download the file using saveAs()", async ({ page }) => {
    await page.goto("https://leafground.com/file.xhtml")
    const [fileDownloadDialog] = await Promise.all([page.waitForEvent('download'), page.getByRole("button", { name: " Download" }).click()])
    const filePath = path.join(__dirname, '../../data/', fileDownloadDialog.suggestedFilename())
    await fileDownloadDialog.saveAs(filePath)
    console.log(filePath);
    expect(fs.existsSync(filePath)).toBeTruthy()
})