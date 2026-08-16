import { test, expect } from '@playwright/test';

test('Search products', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/');

    //Search tool
    const searchText = 'Pliers';

    await page.locator('[data-test="search-query"]').fill(searchText);
    await page.getByRole('button', {name: 'Search'}).click();

    //Wait for search results to finish loading or else it will show all the tools
    const searchResultsContainer = page.locator('[data-test="search_completed"]');
    await expect(searchResultsContainer).toBeVisible();

    //Product names only from search results section
    const productTitles = searchResultsContainer.locator('[data-test="product-name"]');

    //Search results appear
    await expect(productTitles.first()).toBeVisible();
    const allTitles = await productTitles.allTextContents();
    await expect(page.getByText('Combination Pliers')).toBeVisible();
    console.log(allTitles);

    //Filtering out Unrelated products
    for(const title of allTitles){
        expect(title.trim().toLowerCase()).toContain(searchText.toLowerCase());
    }
});