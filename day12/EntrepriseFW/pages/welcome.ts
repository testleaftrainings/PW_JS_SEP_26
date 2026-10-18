import { Page } from "@playwright/test";
import { MyHomePage } from "./home";

export class WelcomePage{
    constructor(private page:Page){}
    
    async clickCrm(){
    await this.page.locator(`text='CRM/SFA'`).click()
    return new MyHomePage(this.page)
    }
}