import { test, Locator, expect} from '@playwright/test';

const BASE_URL = 'https://conduit-api.bondaracademy.com'

const ENDPOINTS = {
    TAGS: '/api/tags',
    ARTICLES: '/api/articles',
    USER: {
        BASE: '/api/users',
        LOGIN: '/api/users/login'
    }
}

test.skip('Get Tags API - Not optimized', async ({ request }) => {

    const tagsResponse = await request.get('https://conduit-api.bondaracademy.com/api/tags');
    const tagsResponseJSON = await tagsResponse.json();

    expect(tagsResponse.status()).toBe(200);

    expect(tagsResponseJSON).toHaveProperty('tags');

    expect(tagsResponseJSON.tags.length).toBeGreaterThan(0);
    expect(tagsResponseJSON.tags.length).toBeLessThanOrEqual(10);
    
    
    expect(tagsResponseJSON.tags).toContain('GitHub');

    expect(tagsResponseJSON.tags[0]).toContain('Test');
})

test('Get Tags API - optimized', async({ request }) => {
    const response = await request.get(BASE_URL + ENDPOINTS.TAGS)
    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body).toHaveProperty('tags');

    const {tags} = body;

    //Two ways to write the same thing.
    expect(Array.isArray(tags)).toBe(true);
    expect(tags).toBeInstanceOf(Array);


    expect(tags).not.toHaveLength(0);

    expect(tags.length).toBeGreaterThan(0);
    expect(tags.length).toBeLessThanOrEqual(10);

    expect(tags).toContain('GitHub');
    expect(tags[0]).toContain('Test');
})

test('Get All Articles API', async({ request }) => {
    
    const response = await request.get(BASE_URL + ENDPOINTS.ARTICLES, {
        params: {
            limits: 10,
            offset: 0
        }
    })

    expect(response.status()).toBe(200)

    const body = await  response.json();

    const { articles, articlesCount } = body

    expect(Array.isArray(articles)).toBe(true);
    expect(articles.length).toBeLessThanOrEqual(10);

    expect(articlesCount).toBe(10);
})


type Article = {
    slug: string,
    title: string
}

test('Create and Delete Article API', async({ request }) => {
    
    const loginResponse = await request.post(`${BASE_URL}${ENDPOINTS.USER.LOGIN}`,{
        data: {
            user: {
                email: 'hitaansh@gmail.com',
                password: 'hitaansh'
            }
        }
    });

    expect(loginResponse.status()).toBe(200);

    const body = await loginResponse.json();

    expect(body).toHaveProperty('user');

    const { token: authToken } = body.user;

    expect(authToken).toBeTruthy();


    //create new article

    const createArticlePlayload = {
        article: {
            title: `Test Article ${Date.now()}`,
            description: 'Article About',
            body: 'This is body',
            tagList: []
        }
    }

    const createArticleResponse = await request.post(`${BASE_URL}${ENDPOINTS.ARTICLES}`, {
        data: createArticlePlayload,
        headers: {
            authorization: `Token ${authToken}`
        }
    })

    expect(createArticleResponse.status()).toBe(201);

    const createArticleResponseJSON = await createArticleResponse.json();

    expect(createArticleResponseJSON).toHaveProperty('article')
    expect(createArticleResponseJSON.article).toHaveProperty('title');
    expect(createArticleResponseJSON.article.title).toBe(createArticlePlayload.article.title)

    const articlesResponse = await  request.get(`${BASE_URL}${ENDPOINTS.ARTICLES}`, {
        params: {
            limit: 10,
            offset: 0
        },
        headers: {
            authorization: `Token ${authToken}`
        }
    });

    expect(articlesResponse.status()).toBe(200);

    const articleBody = await articlesResponse.json();
    expect(articleBody).toHaveProperty('articles')

    const createdSlug = createArticleResponseJSON.article.slug

    const createdArticle = articleBody.articles.find(
        (article: Article) => article.slug === createdSlug
    )

    expect(createdArticle).toBeTruthy();
    expect(createdArticle?.title).toBe(createArticlePlayload.article.title)


    const deleteArticleResponse = await request.delete(
        `${BASE_URL + ENDPOINTS.ARTICLES}/${createdSlug}`,{
        headers: {
            authorization: `Token ${authToken}`
        }
    })

    expect(deleteArticleResponse.status()).toBe(204);
})


//Get the live data from the fast.com website


test('Get final internet speed from fast.com', async({ page }) => {
    // test.setTimeout(5000)

    await page.goto('https://fast.com/');

    const speedValueElement = page.locator('#speed-value');
    const speedUnitElement = page.locator('#speed-units');

    //New locator for the succeeded state.
    const speedValueSucceeded = page.locator('#speed-value.succeeded');
    await speedValueElement.waitFor();
    await speedUnitElement.waitFor();

    console.log(await speedValueElement.innerText() + " " + await speedUnitElement.innerText());

    await speedValueSucceeded.waitFor({timeout:60 * 1000})

    const finalSpeed = await speedValueElement.innerText()

    console.log(`Final internet speed is: ${finalSpeed}`);
})


test('Get final internet speed from fast.com 1', async({ page }) => {
    await page.goto('https://fast.com/');

    const speedValueElement = page.locator('#speed-value');
    const speedUnitElement = page.locator('#speed-units');

    const speedValueSucceeded = page.locator('#speed-value.succeeded');
    await speedValueElement.waitFor();
    await speedUnitElement.waitFor();

    while(true){
        console.log(await speedValueElement.innerText() + " " + await speedUnitElement.innerText())

        const className = await speedValueElement.getAttribute('class');
        console.log(className);

        if(className?.includes('succeeded')){
            break;
        }
    }
})


test.only('Get final internet speed from fast.com 2', async({ page }) => {
    await page.goto('https://fast.com/');

    const speedValueElement = page.locator('#speed-value');
    const speedUnitElement = page.locator('#speed-units');

    await expect(speedValueElement).toHaveClass(/succeeded/, {timeout: 60 * 1000})

    const finalSpeed = await speedValueElement.innerText();

    console.log(`Final internet spedd is: ${finalSpeed}`);
})
    