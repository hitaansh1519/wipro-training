import { test, expect } from '@playwright/test';

test('Homepage Validation', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com');

    //Homepage loaded
    await expect(page).toHaveURL('https://practicesoftwaretesting.com');

    //Page title validation
    await expect(page).toHaveTitle(/Practice Software Testing/i);

    //Navigation Menu assertion
    const navigationMenu = page.getByRole('navigation');
    await expect(navigationMenu).toBeVisible();

    //Search Box menu assertion
    const searchBox = page.locator('[data-test="search-query"]');
    await expect(searchBox).toBeVisible();

    //Product cards displayed
    const productCards = page.locator('[data-test^="product-"]');

    await expect(productCards.first()).toBeVisible();

    const count = await productCards.count();
    expect(count).toBeGreaterThan(0);
});