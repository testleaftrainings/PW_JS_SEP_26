import test, { expect } from "@playwright/test"


let SF_ACCESS_TOKEN: any
let SF_Lead_Variable_ID: any

test.describe.serial("Salesforce Request Chaining", () => {

    // generate an Oauth token and use it to make an API request
    test("Generate an Oauth token for Salesforce and use it to make an API request", async ({ request }) => {
        const response = await request.post("https://orgfarm-626247aec2-dev-ed.develop.my.salesforce.com/services/oauth2/token", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "client_credentials",
                "client_id": "provide your client_id here",
                "client_secret": "provide your client_secret here"
            }
        })
        const responseBody = await response.json()
        SF_ACCESS_TOKEN = responseBody.access_token
        expect(response.status()).toBe(200)
        console.log("Access Token: " + SF_ACCESS_TOKEN)
        console.log("Response Body: " + JSON.stringify(responseBody))
    })

    //create an incident in the incidents table using the Oauth token generated in the previous test
    test("Create a lead in Salesforce using the generated Oauth token", async ({ request }) => {
        const response = await request.post("https://orgfarm-626247aec2-dev-ed.develop.my.salesforce.com/services/data/v65.0/sobjects/Lead", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SF_ACCESS_TOKEN}`
            },
            data: {

                "Salutation": "Mr.",
                "FirstName": "Sai",
                "LastName": "C",
                "Company": "TestLeaf Private Limited",

            }
        })

        const responseBody = await response.json()
        SF_Lead_Variable_ID = responseBody.id
        expect(response.status()).toBe(201)
        console.log("Lead Created with ID: " + SF_Lead_Variable_ID)
        console.log("Response Body: " + await response.text())
    })


    // fetch the lead created in the previous test using the ID, verify that the lead is found and the response status code is 200
    test("Get the lead created in the previous test using the ID, verify that the lead is found and the response status code is 200", async ({ request }) => {
        const response = await request.get(`https://orgfarm-626247aec2-dev-ed.develop.my.salesforce.com/services/data/v65.0/sobjects/Lead/${SF_Lead_Variable_ID}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SF_ACCESS_TOKEN}`
            }
        })
        expect(response.status()).toBe(200)
        console.log("Lead found with ID: " + SF_Lead_Variable_ID)
        console.log("Response Body: " + await response.text())
    })
})