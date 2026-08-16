import { test, expect } from '@playwright/test';

test('Negative Login Validation', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    //Opening Login Page
    await page.getByRole('link', {name: 'Sign in'}).click();

    //Invalid Credentials
    await page.getByLabel('Email address *').fill('qwerty@test.com');
    await page.getByLabel('Password *').fill('qwety123');

    //Login
    await page.getByRole('button', {name: 'Login'}).click();

    //Error Message Validation
    await expect(page.locator('[data-test="login-error"]')).toBeVisible();

    await expect(page.locator('[data-test="login-error"]')).toContainText('Invalid email or password');

    //Login Failure Validation
    await expect(page).toHaveURL(/auth\/login/);
});