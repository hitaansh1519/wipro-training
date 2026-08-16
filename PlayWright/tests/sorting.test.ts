import { test, expect } from '@playwright/test';

test('Price High-Low Sorting Validation', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    //Selecting Price High-Low sorting
    await page.getByLabel('sort').selectOption('price,desc');

    //Capture all displayed prices
    const priceTexts = await page.locator('[data-test="product-price"]').allTextContents();

    const actualPrices = priceTexts.map(price => Number(price.replace('$', '').trim()));

    //Create a copy using spread operator
    const expectedPrices = [...actualPrices];

    //Sorting in descending order
    expectedPrices.sort((a, b) => b - a);

    //Validating sorting
    expect(actualPrices).toEqual(expectedPrices);
});