import test, { chromium } from "@playwright/test";

test("learn to launch the browser",async()=>{
    //Playwright can also be used to control the Google Chrome or Microsoft Edge browsers
   const chromeBrowser =  await chromium.launch({channel:"chrome",headless:true})
   const context =  await chromeBrowser.newContext()
   const page = await context.newPage()
   await page.goto("https://www.google.com/")
   const titleOfPage = await page.title()
   if (titleOfPage==="Google") {
    console.log("title is verified successfully")
   } else {
    console.log("verification failed")
   }

}) // entry point for the playwright execution