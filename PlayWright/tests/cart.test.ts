import { test, expect } from '@playwright/test';

test('Cart Functionality Validation', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    const products = page.locator('[data-test="product-name"]');

    //Product 1
    const product1Name = (await products.nth(0).textContent())?.trim();

    await products.nth(0).click();

    const product1PriceText = await page.locator('[data-test="unit-price"]').textContent();

    const product1Price = Number(product1PriceText?.replace('$', '').trim());

    //Increaseing quantity from 1 to 2
    await page.locator('#btn-increase-quantity').click();

    //Validating quantity selector
    await expect(page.getByRole('spinbutton')).toHaveValue('2');

    //Adding Product 1 (quantity 2)
    await page.getByRole('button', {name: /add to cart/i}).click();

    //Toast Validation
    await expect(page.getByRole('alert')).toContainText('Product added to shopping cart.');


    //Return to Homepage
    await page.goto('https://practicesoftwaretesting.com/');


    //Product 2
    await products.nth(1).click();

    const product2PriceText = await page.locator('[data-test="unit-price"]').textContent();

    const product2Price = Number(product2PriceText?.replace('$', '').trim());

    //Adding Product 2
    await page.getByRole('button', {name: /add to cart/i}).click();

    //Toast Validation
    await expect(page.getByRole('alert')).toContainText('Product added to shopping cart.');

    
    //Opening Cart
    await page.locator('[data-test="nav-cart"]').click();

    //Cart badge validation
    await expect(page.locator('[data-test="cart-quantity"]')).toHaveText('3');

    //Product Validation
    await expect(page.getByText(product1Name!)).toBeVisible();


    //Quantity Validation
    const quantityInputs = page.getByRole('spinbutton');

    await expect(quantityInputs.nth(0)).toHaveValue('2');

    await expect(quantityInputs.nth(1)).toHaveValue('1');

    //Subtotal Validation
    const expectedTotal = (product1Price * 2) + product2Price;

    const actualTotalText = await page.locator('[data-test="cart-total"]').textContent();

    const actualTotal = Number(actualTotalText?.replace('$', '').trim());

    expect(actualTotal).toBe(expectedTotal);
});