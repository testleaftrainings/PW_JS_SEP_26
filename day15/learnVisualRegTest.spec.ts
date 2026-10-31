import test, { expect } from "@playwright/test"

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
            //-----------------Network Mocking---------------------------------
            // googlesyndication // googletagmanager //googleads1.g3.doubleclick.net
           await page.route('**/*googleads.g.doubleclick.net/**', route => route.abort());
            await page.route('**/*googletagmanager.com/**', route => route.abort());
await page.route('**/*googlesyndication.com/**', route => route.abort());
           
            await page.goto("https://my-location.org/")
            let mapView = page.locator(`[id="map"]`)
            await mapView.scrollIntoViewIfNeeded()
            let mapLat = page.locator(`#latitude`)
            let mapLong = page.locator(`#longitude`)
            //await mapView.screenshot({path: `screenshot/${location.locationName}.png`})
             await page.waitForTimeout(3000)
            //--------------------Visual Regression Testing------------------------------
            await expect(mapLat).toHaveScreenshot(`${location.locationName}_${location.lat}.png`,{maxDiffPixelRatio:0.02})
            await expect(mapLong).toHaveScreenshot(`${location.locationName}_${location.long}.png`,{maxDiffPixelRatio:0.02})
            await expect(mapView).toHaveScreenshot(`${location.locationName}.png`,{maxDiffPixelRatio:0.04})
           
        }) // scope of the test ends here
    }) // scope of the describe
} // for each loop