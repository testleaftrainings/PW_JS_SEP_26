import { Page } from "@playwright/test";
import { LeadPage } from "./leads";

export class MyHomePage{
    constructor(private page:Page){}

    async clickLeads(){
    await this.page.getByRole('link', { name: "Leads", exact: true }).click()
    return new LeadPage(this.page)           
    }
        
}