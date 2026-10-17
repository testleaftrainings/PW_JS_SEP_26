import test, { expect } from "@playwright/test";
import path from "path";

test("Learn to upload file using the setInputFiles", async ({ page }) => {
    await page.goto("https://leafground.com/file.xhtml")
    const uploadButton = page.locator(`//input[@type='file']`).first()
    console.log()
    await uploadButton.setInputFiles(path.join(__dirname, '../../data/QeagleLogo.jpeg'))
    const verifyFileName = page.locator(`.ui-fileupload-filename`)
    await expect(verifyFileName).toHaveText(/QeagleLogo/)
})

test.only("Learn to upload file using the setInputFile", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    const [uploadFileChooser] = await Promise.all([page.waitForEvent('filechooser'), page.locator(`//div[@id='drag-drop-upload']`).click()])
    await uploadFileChooser.setFiles([path.join(__dirname, '../../data/QeagleLogo.jpeg'),path.join(__dirname, '../../data/TestLeafLogo.jpeg')])
    // Select multiple files
// await page.getByLabel('Upload files').setInputFiles([
//   path.join(__dirname, 'file1.txt'),
//   path.join(__dirname, 'file2.txt'),
// ]);
    const verifyFileName = page.locator(`//div[@class='dz-filename']/span`).first()
    await expect(verifyFileName).toHaveText(/QeagleLogo/)

})