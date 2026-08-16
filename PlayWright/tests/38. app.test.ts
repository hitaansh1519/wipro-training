import {test} from '@playwright/test'

test('practice', async({page})=>{
    await page.goto('http://127.0.0.1:5500/PlayWright/practice-websites/app.html');

    // await page.pause();

    //clicking on the 'Primary Action' button
    await page.getByRole('button', { name: 'Primary Action' }).click();

    //clicking on the 'Toggle Button' button
    await page.getByRole('button', { name: 'Toggle Button' }).click();

    //clicking on the 'Div with button role' button 
    await page.getByRole('button', { name: 'Div with button role' }).click();

    //filling the username testbox
    await page.getByRole('textbox', { name: 'Username:' }).fill('Hitaansh');

    //checking the 'checkbox' 
    await page.getByRole('checkbox', { name: 'Accept terms' }).check()

    await page.getByRole('menuitem', { name: 'Home' }).getByRole('link').click()
})


test('practice1', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/PlayWright/practice-websites/automationpy.html');

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    for (const day of days) {
        await page.getByLabel(day).check();
    }

    await page.pause();
}); 
