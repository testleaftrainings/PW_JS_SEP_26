import test from '@playwright/test';
import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '../../data/DEV_LF.env') });
// process --> os operation
// env --> environmental varibale can be accessed

const fileName = process.env.terminalEnvVariable
const result = dotenv.config({path:`./data/${fileName}_LF.env`})
if(result.error){
    console.log("ENV file could not be loaded",result.error)
}else{
    console.log("ENV file loaded successfully");
}
console.log(process.env.APP_URL,
    process.env.ADMIN_USERNAME,
    process.env.PASSWORD,
    process.env.DB_PORT,
    process.env.HOSTNAME,
    process.env.HOSTPASS);

test('Login Page',async({page})=>{

    // browser-context-page -{page}
    await page.goto(process.env.APP_URL as string)
    await page.locator("#username").fill(process.env.ADMIN_USERNAME  as string)
    await page.locator("[name='PASSWORD']").fill(process.env.PASSWORD  as string)
    await page.locator(".decorativeSubmit").click()
    await page.locator(`text='CRM/SFA'`).click()

    //get title of the page
    const title=await page.title()
    console.log(title)

})
