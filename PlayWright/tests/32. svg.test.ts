import { expect, Locator, test, FrameLocator } from '@playwright/test'

test('Flipkart', async ({ page }) => {
    await page.goto('https://www.flipkart.com')

    // await page.locator('input[name="q"]').fill('Macbook')
    await page.getByRole('textbox', {name: 'Search for Products, Brands and More'}).fill('Macbook')

    //This will also work
    // await page.locator('input[name="q"]:not([readonly])').fill('Macbook')
    await page.keyboard.press('Enter')

    await page.pause()
})


/*
all() - Give me an array of all the matching elements "right now"
It does not wait for elements to appear.
*/

test('Pet Disease Alerts', async ({ page }) => {
    test.slow()
    await page.goto('https://petdiseasealerts.org/forecast-map#/')

    // It gives the page enough time to finish loading.
    await page.waitForTimeout(5000)

    const frameEle: FrameLocator = page.frameLocator('iframe[id^="map-instance"]')
    let allStates: Locator[] = await frameEle.locator('//[local-name()="svg" and @id="map-svg"]//[local-name()="g" and @id="regions"]/*[local-name()="g" and @class="region"]').all()

    console.log('Total number of regions.', allStates.length)
    await page.pause()
}) 

test('Pet Disease Alerts1', async ({ page }) => {
    test.slow()
    await page.goto('https://petdiseasealerts.org/forecast-map#/')

    // It gives the page enough time to finish loading.
    //await page.waitForTimeout(5000)

    const frameEle: FrameLocator = page.frameLocator('iframe[id^="map-instance"]')
    let allStates = frameEle.locator('//[local-name()="svg" and @id="map-svg"]//[local-name()="g" and @id="regions"]/*[local-name()="g" and @class="region"]')
    
    // Here I have added explicit wait for individual region
    //await expect(allStates.first()).toBeVisible()
    //await expect(allStates).toHaveCount(51)
    await allStates.first().waitFor({state: 'visible'})

    const totalRegions = await allStates.count()

    console.log('Total number of regions.', totalRegions)
    await page.pause()
}) 

test('Pet Disease Alerts2', async ({ page }) => {
    test.slow()
    await page.goto('https://petdiseasealerts.org/forecast-map#/')

    // It gives the page enough time to finish loading.
    //await page.waitForTimeout(5000)

    const frameEle: FrameLocator = page.frameLocator('iframe[id^="map-instance"]')
    let allStates = frameEle.locator('svg#map-svg g#regions > g.region')
    
    // Here I have added explicit wait for individual region
    //await expect(allStates.first()).toBeVisible()
    //await expect(allStates).toHaveCount(51)
    await allStates.first().waitFor({state: 'visible'})

    //const totalRegions = await allStates.count()
    const stateElements = await allStates.all()

    console.log('Total number of regions.', stateElements.length)

    for (const e of stateElements) {
        const stateName = await e.getAttribute("id")
        console.log(stateName)
    }
    //await page.pause()
}) 


test('Pet Disease Alerts3', async ({ page }) => {
    test.slow()

    await page.goto('https://petdiseasealerts.org/forecast-map#/')

    const frameEle = page.frameLocator('iframe[id^="map-instance"]')

    const allStates = frameEle.locator(
        'svg#map-svg g#regions > g.region'
    )

    await expect(allStates.first()).toBeVisible()

    const totalRegions = await allStates.count()

    for (let i = 0; i < totalRegions; i++) {

        const state = allStates.nth(i)

        await state.hover()

        const stateName = await state.getAttribute('id')

        console.log(stateName)
    }

    await page.pause()
})

test('Pet Disease Alerts - Print all regions using mouse.move()', async ({ page }) => {
    test.slow()

    await page.goto('https://petdiseasealerts.org/forecast-map#/')

    const frameEle: FrameLocator = page.frameLocator('iframe[id^="map-instance"]')
    let allStates: Locator = frameEle.locator('svg#map-svg g#regions > g.region')

    await expect(allStates.first()).toBeVisible()

    const totalRegions = await allStates.count()

    console.log(`Total Regions: ${totalRegions}`)

    for (let i = 0; i < totalRegions; i++) {
        const state = allStates.nth(i)
        const stateName = await state.getAttribute('id')
        const box = await state.boundingBox()

        if (!box) {
            console.log(`Bounding box not found for ${stateName}`)
            continue
        }

        // Move mouse to center of the region
        await page.mouse.move(
            box.x + box.width / 2,
            box.y + box.height / 2,
            {steps: 20}
        )
        console.log(stateName)
    }
    //await page.pause()
})

/*
await page.mouse.click(x, y)
await page.mouse.move()
*/