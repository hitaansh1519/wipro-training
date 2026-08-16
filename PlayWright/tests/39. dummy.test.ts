import {test, expect} from '@playwright/test'

test('Automate Non-Editable Textbox Transition', async ({ page }) => {
await page.goto('http://127.0.0.1:5500/PlayWright/practice-websites/dummy.html');

//const nameInput = page.getByLabel('Name:');
const nameInput = page.getByRole('textbox', { name: 'Name:' })
const messageText = page. locator('#message');

await expect(nameInput).toHaveValue('Click me first');
await expect(nameInput) .toHaveAttribute( 'readonly');

await nameInput.click();

await expect(nameInput).not.toHaveAttribute('readonly');
await expect(nameInput).toHaveValue('');

await nameInput.fill('Harshit');
await expect(nameInput).toHaveValue('Harshit');

await page.pause();
})