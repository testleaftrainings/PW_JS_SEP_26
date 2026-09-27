import test from "@playwright/test";

test("Learn to use Playwright Locators",async({page})=>{
    await page.goto(`https://testleafprivatelimited-dev-ed.develop.my.salesforce.com/`)
    // 1. locate by role --> implicit/ explicit
    await page.getByRole('textbox',{name:'Username'}).fill('bhuvanesh.moorthy@testleaf.com')
    await page.getByRole('textbox').press('Enter')
    //await page.getByRole('textbox',{name:'Password'}).fill('Testleaf@2027')
    // 2. locate by label --> DOM elements
    await page.getByLabel("Password").fill('Testleaf@2027')
    // 3. locate by text --> 
    let textRef = await page.locator('#logo_wrapper').getByText('Salesforce login').innerText()
    console.log(textRef)
    // 4. locate by image --> alt
    let imageStatus = await page.getByAltText('Salesforce login').isVisible()
    if(imageStatus===true){
    console.log("Salesforce icon is visibility status is "+imageStatus);
    }else{
         console.log("Salesforce icon is not visibility status is "+imageStatus);
    }
    await page.getByRole('button').click()
    await page.waitForTimeout(20000)
    // 5. locate by title -->
    await page.getByTitle('App Launcher',{exact: true}).click()
    //await page.getByRole('button',{name:"App Launcher"}).click()
    //console.log(textRef2)
    // 6. locate by placeHolder-->
    //<input placeholder="Babu Manickam" role="textbox" aria-readonly="false" 
    // aria-disabled="false">
    await page.getByPlaceholder('Search apps and items...').fill("sales")
    // 7. locate by testid --> 
    // page.getByTestId()
})