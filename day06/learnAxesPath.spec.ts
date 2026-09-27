import test from "@playwright/test";

test("Learn to use Axes Path", async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/login")
    // Axes path
    // 1. PARENT TO CHILD: --> Top to Bottom
    // syntax : xpathOfParent/childTagName
    // example : //p[@class='top']/input
    await  page.locator(`//p[@class='top']/input`).fill('DemoCSR')

    // 2. CHILD TO PARENT: --> Bottom to Top
    // syntax :  xpathOfchild/parent::parentTagName
    // example : //label[text()='Password']/parent::p

    // ancestors relation based 
    // 3. GRAND PARENT TO GRAND CHILD: Top to Bottom
    // syntax : xpathOfGrandParent//GcTagName
    // example : //form[@id='login']//input

    // 4. GRAND CHILD TO GRAND PARENT: --> Bottom to Top
    // syntax : xpathOfGrandChild/ancestor::GpTagname
    // example : //input[@class='decorativeSubmit']/ancestor::form

    // 5. ELDER SIBLING TO YOUNGER SIBLING: --> Top to Bottom
    // syntax : xpathOfES/following-sibling::YsTagname
    // example : //label[text()='Password']/following-sibling::input
    await  page.locator(`//label[text()='Password']/following-sibling::input`).fill('crmsfa')

    // 6. YOUNGER SIBLING TO ELDER SIBLING: --> Bottom to Top
    // syntax :  xpathOfYS/preceding-sibling::EStagname
    // example : //input[@name='PASSWORD']/preceding-sibling::label
    let textRef = await page.locator(`//input[@name='PASSWORD']/preceding-sibling::label`).innerText()
    console.log(textRef)

    // 7. ELDER COUSIN TO YOUNGER COUSIN (Top to Bottom):
    // syntax :  xpathOfEC/following::YCtagname
    // example : //input[@name='PASSWORD']/following::input
    await page.locator(`//input[@name='PASSWORD']/following::input`).click()

    // 8. YOUNGER COUSIN TO ELDER COUSIN (Bottom to Top):
    // syntax :  xpathOfYC/preceding::ECtagname
    // example : //input[@name='PASSWORD']/preceding::input
})