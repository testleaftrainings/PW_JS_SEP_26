import test from "@playwright/test"
const locations = [{
    locationName: "Bombay_IIT",
    lat: 19.1326,
    long: 72.9110
},
{
    locationName: "Delhi_IIT",
    lat: 28.5459,
    long: 77.1861
}]
for (const location of locations) {

    test.describe.serial("Multiple GEO location mocking", async () => {
        // Mocked GEO location
        test.use({
            permissions: ["geolocation"]
            , geolocation: {
                latitude: location.lat,
                longitude: location.long
            }
        })

        test(`Learn Geolocation mocking using Browser API ${location.locationName}`, async({ page }) => {
            await page.goto("https://my-location.org/")
            let mapView = page.locator(`[id="map"]`)
            await mapView.scrollIntoViewIfNeeded()
            await page.waitForTimeout(3000)
            await mapView.screenshot({path: `screenshot/${location.locationName}.png`})
        }) // scope of the test ends here
    }) // scope of the describe
} // for each loop