import { test, expect } from '@playwright/test';

test('Complete Checkout Flow', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    //Step 1
    await test.step('Cart - Add product and proceed to checkout', async () => {

        await expect(page).toHaveTitle(/Practice Software Testing/i);

        //Adding product to cart
        await page.locator('[data-test="product-name"]').first().click();

        await page.getByRole('button', { name: /add to cart/i }).click();

        await expect(page.getByRole('alert')).toContainText('Product added to shopping cart.');

        await page.getByRole('link', { name: 'cart' }).click();

        await expect(page).toHaveURL(/checkout/);

        //Clicking the Proceed to checkotu button
        await page.getByRole('button', { name: 'Proceed to checkout' }).click();
    });

    //Step 2
    await test.step('Continue as Guest', async () => {

        //Validate Sign In Step
        await expect(page).toHaveURL(/checkout/);

        //Opening Continue as Guest tab
        await page.getByRole('tab', {name: 'Continue as Guest'}).click();

        //Filling Guest Details
        await page.locator('#guest-email').fill('hitaansh@test.com');

        await page.locator('#guest-first-name').fill('Hitaansh');

        await page.locator('#guest-last-name').fill('Maheshwary');

        //Continue as Guest
        await page.getByRole('button', {name: 'Continue as Guest'}).click();

        //Validate guest information is displayed
        await expect(page.getByText('Continuing as guest:')).toBeVisible();

        await page.getByRole('button', {name: 'Proceed to checkout'}).click();
    });

    //Step 3
    await test.step('Billing Address', async () => {

        //Verifing the Billing Address page
        await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();

        //Filling the details on the Billing Address Page
        await page.getByLabel('Country').selectOption({ label: 'India' });

        await page.getByLabel('Postal code').fill('400001');

        await page.getByLabel('House number').fill('1223');

        await page.getByLabel('Street').fill('MG Road');

        await page.getByLabel('City').fill('Mumbai');

        await page.getByLabel('State').fill('Maharashtra');


        const proceedButton = page.getByRole('button', { name: 'Proceed to checkout' });

        await expect(proceedButton).toBeEnabled();

        //Clicking on the proceed button
        await proceedButton.click();
    });

    //Step 4
    await test.step('Payment', async () => {

        //Checking if we are on the right step.
        await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

        //Selecting the Payment Method
        await page.getByLabel('Payment Method').selectOption('credit-card');

        //Filling the details of Credit Card
        await page.getByPlaceholder('Credit Card Number').fill('1234-5678-9012-3456');

        await page.getByPlaceholder('Expiration Date').fill('11/2029');

        await page.getByPlaceholder('CVV').fill('999');

        await page.getByPlaceholder('Card Holder Name').fill('Hitaansh Maheshwary');

        const confirmButton = page.getByRole('button', { name: 'Confirm' });

        //Assertion for checking that if the confirm button is visibe and enabled
        await expect(confirmButton).toBeVisible();
        await expect(confirmButton).toBeEnabled();

        //Clicking on the confirm button
        await confirmButton.click();
    });
});