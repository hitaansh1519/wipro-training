
/*
https://demo.nopcommerce.com/

<a href="/apparel" aria-expanded="false" aria-haspopup="menu"
role="button" class="menu_link" tabindex="0">Apparel</a>

It's a link behaving as a button. Because of role="button"

Actual identity - it is a link
But role is button - So, it is a link behaving as a button.


*/

import {expect, test} from '@playwright/test'

test('Mouse Hover', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/')

    await page.getByRole('button', {name: 'Electronics'}).hover()
    await page.getByRole('button', {name: 'Apparel'}).hover()
})

test('Mouse Right Click', async({page}) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    page.locator('div', {hasText: 'Demo Simple Text Menu'});

    //Right Click
    await page.getByText('right click me', {exact: true}).click({button: 'right'});
    
})

test('Mouse Double Click', async({page}) => {
    await page.goto('http://127.0.0.1:5500/PlayWright/practice-websites/automationpy.html');

    const field2Textbox = page.locator('#field2')
    //Verify that the field 2 is empty.
    await expect(page.locator('#field2')).toBeEmpty();

    //Now perform the double click action.
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();

    await expect(field2Textbox).toHaveValue('Hello World!');
})

test.only('Mouse drag and drop action', async({ page }) => {
    await page.goto('http://127.0.0.1:5500/PlayWright/practice-websites/automationpy.html')

    //Source element
    const source = page.locator('#draggable')

    //Target element
    const target = page.locator('#droppable')

    await source.dragTo(target)

    await page.pause()

})