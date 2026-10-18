import { expect, Page } from "@playwright/test";

export class ViewLeadPage {
    constructor(private page: Page) { }

    async verifyLead(companyName: string) {
        await expect(
            this.page.locator("#viewLead_companyName_sp")
        ).toContainText(companyName);

        console.log("Lead created successfully");
    }

}