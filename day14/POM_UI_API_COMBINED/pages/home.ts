import { Page } from "@playwright/test";
import { LeadPage } from "./lead";

export class HomePage {
    constructor(private page: Page) { }
    async navigateToLeadPage() {
        await this.page.getByRole("link", { name: "Leads" }).click()
        return new LeadPage(this.page)
    }
}