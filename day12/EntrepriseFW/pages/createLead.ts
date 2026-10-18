import { Page } from "@playwright/test";
import { ViewLeadPage } from "./viewLead";

export class CreateLead {
   constructor(private page: Page) { }

   async enterCompanyName(companyName: string) {
      await this.page.locator("#createLeadForm_companyName")
         .fill(companyName);

   }
   async enterFirstName(firstName: string) {
      await this.page.locator("#createLeadForm_firstName")
         .fill(firstName);
   }
   async enterLastName(lastName: string) {
      await this.page.locator("#createLeadForm_lastName")
         .fill(lastName);
   }

   async enterPhno(phoneNumber: string) {
      await this.page.locator("#createLeadForm_primaryPhoneNumber")
         .fill(phoneNumber);
   }

   async clickCreateButton() {
      await this.page.locator("input[name='submitButton']").click();
      return new ViewLeadPage(this.page)
   }
}