import { Page } from "playwright/test";

export class LeadPage {
    constructor(private page: Page) { }
    async searchLead(lastname: string) {
        await this.page.getByPlaceholder("Search this list...").fill(lastname)
        await this.page.getByPlaceholder("Search this list...").press("Enter")
    }
}