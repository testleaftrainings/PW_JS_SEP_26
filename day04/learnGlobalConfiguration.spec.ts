import test from "@playwright/test";

test("learn about playwright config file",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
const titleOfPage = await page.title()
   if (titleOfPage==="Leaftaps - TestLeaf Automation Platform") {
    console.log("title is verified successfully")
   } else {
    console.log("verification failed")
   }

})