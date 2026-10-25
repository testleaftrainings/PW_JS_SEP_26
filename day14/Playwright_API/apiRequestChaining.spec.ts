import test, { expect } from "@playwright/test"


let SNOW_ACCESS_TOKEN: any
let SNOW_INCIDENT_SYS_ID: any

test.describe.serial("API Request Chaining", () => {

    // generate an Oauth token and use it to make an API request
    test("Generate an Oauth token and use it to make an API request", async ({ request }) => {
        const response = await request.post("https://dev293148.service-now.com/oauth_token.do", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "provide your client_id here",
                "client_secret": "provide your client_secret here",
                "username": "admin",
                "password": "1eZlrA3%!KiO"
            }
        })
        const responseBody = await response.json()
        SNOW_ACCESS_TOKEN = responseBody.access_token
        expect(response.status()).toBe(200)
        console.log("Access Token: " + SNOW_ACCESS_TOKEN)
        console.log("Response Body: " + JSON.stringify(responseBody))
    })

    //create an incident in the incidents table using the Oauth token generated in the previous test
    test("Use the Oauth token to make an API request to create a incident in the incidents table", async ({ request }) => {
        const response = await request.post("https://dev293148.service-now.com/api/now/table/incident", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SNOW_ACCESS_TOKEN}`
            },
            data: {
                "short_description": "Test Incident from Playwright",
                "urgency": "3",
                "impact": "3"
            }
        })

        const responseBody = await response.json()
        SNOW_INCIDENT_SYS_ID = responseBody.result.sys_id
        expect(response.status()).toBe(201)
        console.log("Incident Created with Sys ID: " + SNOW_INCIDENT_SYS_ID)
        console.log("Response Body: " + await response.text())
    })

    // update the incident created in the previous test using the sys_id
    test("Update the incident created in the previous test using the sys_id", async ({ request }) => {
        const response = await request.patch(`https://dev293148.service-now.com/api/now/table/incident/${SNOW_INCIDENT_SYS_ID}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SNOW_ACCESS_TOKEN}`
            },
            data: {
                "short_description": "Asset apple imac [7373i837] has problems with the keyboard and mouse. Please replace the keyboard and mouse.",
                "urgency": "2",
                "impact": "2"
            }
        })

        const responseBody = await response.json()
        expect(response.status()).toBe(200)
        console.log("Incident Updated with Sys ID: " + SNOW_INCIDENT_SYS_ID)
        console.log("Response Body: " + JSON.stringify(responseBody))
    })


    // delete the incident created in the previous test using the sys_id
    test("Delete the incident created in the previous test using the sys_id", async ({ request }) => {
        const response = await request.delete(`https://dev293148.service-now.com/api/now/table/incident/${SNOW_INCIDENT_SYS_ID}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SNOW_ACCESS_TOKEN}`
            }
        })
        expect(response.status()).toBe(204)
        console.log("Incident Deleted with Sys ID: " + SNOW_INCIDENT_SYS_ID)
    })

    // get the incident created in the previous test using the sys_id, verify that the incident is deleted and the response status code is 404
    test("Get the incident created in the previous test using the sys_id, verify that the incident is deleted and the response status code is 404", async ({ request }) => {
        const response = await request.get(`https://dev293148.service-now.com/api/now/table/incident/${SNOW_INCIDENT_SYS_ID}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SNOW_ACCESS_TOKEN}`
            }
        })
        expect(response.status()).toBe(404)
        console.log("Incident not found with Sys ID: " + SNOW_INCIDENT_SYS_ID)
    })
})