import { test, expect } from '@playwright/test';

test('Product Details Validation', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    const firstProduct = page.locator('[data-test="product-name"]').first();

    const productName = await firstProduct.textContent();

    await firstProduct.click();

    //Product title validation
    await expect(page.locator('[data-test="product-name"]')).toHaveText(productName!);

    //Product price validation
    await expect(page.locator('[data-test="unit-price"]')).toBeVisible();

    //Product image validation
    await expect(page.getByRole('img', { name: productName! })).toBeVisible();

    //Add To Cart button
    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
});