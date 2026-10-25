import { Page } from "@playwright/test"
import { HomePage } from "./home"
export class LoginPage {
    // page:Page
    // constructor(page:Page){
    //     this.page=page
    // }

    // parameter property in TypeScript.
    constructor(private page: Page) { } //spec.ts -->page--> login.ts--> 

    async enterUsername(username: string) {
        await this.page.getByRole("textbox", { name: "Username" }).fill(username)
    }
    async verifyUsername() {
        await this.page.getByRole("button", { name: "Log In" }).click()
    }
    async enterPassword(password: string) {
        await this.page.getByLabel("Password").fill(password)
    }
    async clickLoginButton() {
        await this.page.getByRole("button", { name: "Log In" }).click()
        await this.page.locator(`//div[@class='slds-icon-waffle']`).waitFor({ timeout: 60000 })
        return new HomePage(this.page);
    }
}