import { APIRequestContext } from "@playwright/test";

export class SalesforceAPI {
    private SF_Access_TOKEN!: string
    private resourceId!: string

    constructor(private request: APIRequestContext) { }
    async generateToken() {
        const response = await this.request.post("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/services/oauth2/token", {

            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "client_credentials",
                "client_id": "############################",
                "client_secret": "############################",
            }
        });
        let responseBody = await response.json()
        this.SF_Access_TOKEN = responseBody.access_token
        console.log(this.SF_Access_TOKEN, response.status())
    }
    async createResource(): Promise<string> {
        const response = await this.request.post("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/services/data/v67.0/sobjects/Lead", {
            headers: {
                "Authorization": `Bearer ${this.SF_Access_TOKEN}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:
            {
                "Salutation": "Mr.",
                "FirstName": "Bhuvanesh",
                "LastName": "M",
                "Company": "QualiTest"
            }
        });
        let responseBody = await response.json()
        this.resourceId = responseBody.id
        console.log(response.status(), this.resourceId)
        console.log(await response.text())
        return responseBody.id
    }
    async fetchResource(resourceid: string): Promise<string> {
        const response = await this.request.get(`https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/services/data/v67.0/sobjects/Lead/${resourceid}`,
            {
                headers: {
                    "Authorization": `Bearer ${this.SF_Access_TOKEN}`,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
        let responseBody = await response.json()
        console.log("Company name of the resource is ", responseBody.Company)
        return responseBody.Company
    }
}