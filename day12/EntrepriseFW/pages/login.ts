import { Page } from "@playwright/test"
import { WelcomePage } from "./welcome"

export class LoginPage {
    // page:Page // gloabal property of the class

    // constructor(page:Page){ // local variable which is as argument from the test()
    //     this.page = page
    // }

    constructor(private page: Page) { }

    async enterUsername(username: string) {
        await this.page.locator("#username").fill(username)
    }
    async enterPassword(password: string) {
        await this.page.locator("[name='PASSWORD']").fill(password)
    }
    async clickLoginButton() {
        await this.page.locator(".decorativeSubmit").click()
        return new WelcomePage(this.page)
    }
}