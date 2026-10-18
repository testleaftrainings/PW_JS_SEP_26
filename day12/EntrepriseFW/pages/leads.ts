import { Page } from "@playwright/test";
import { CreateLead } from "./createLead";

export class LeadPage{
constructor(private page:Page){}
async clickCreateLeadButton(){
await this.page.getByRole("link", { name: "Create Lead" }).click();
return new CreateLead(this.page)
}

}