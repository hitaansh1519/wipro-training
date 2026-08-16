// Imagine you are testing an e-commerce website.

// When a user opens the Products page:
// UI sends request →
// GET /api/products
// Backend returns product list.

// Your test depends on:
// - Backend server being available
// - Database being up
// - Internet connection working
// - API returning expected data

// What if:
// - API is down?
// - Database is empty?
// - Backend team hasn't completed the API?
// - API response changes every day?

// Your UI tests become unstable.
// This is the problem Mocking solves.

// Mocking means replacing a real dependency with a fake controlled version.

// Instead of talking to the real server,
// we provide our own response.

// Mocking is the process of faking an API response during testing.

// Instead of using the real backend,
// we return our own data.

// Mocking is the interception of network requests and the substitution of actual server responses with predefined responses for testing purposes.

// Imagine a movie shoot.

// Actor:
// "Can I drive a real Ferrari?"
// Director:
// "No. Use this fake Ferrari prop."

// The movie still gets recorded.

// Similarly:

// Application:
// "Can I call the real API?"
// Tester:
// "No. Use this mocked API response."

// The application still works.

// Without Mocking:

//         UI
//         ↓
//         API
//         ↓
//         Database

// Problems:
// - Slow tests
// - Unstable tests
// - Dependency on backend
// - Data constantly changes
// - Difficult to test edge cases

// With Mocking:

//         UI
//         ↓
//         Mock Response

// Benefits:
// - Fast tests
// - Stable tests
// - Predictable data
// - Backend independence
// - Easy edge case testing

// Why Do We Use Mocking?
// 1. Backend Not Ready
// Frontend team can continue testing.

// 2. Faster Execution
// No network call.
// Tests execute much faster.

// 3. Stable Tests
// No server downtime issues.

// 4. Predictable Results
// Response never changes.

// 5. Test Edge Cases
// Simulate:
// - 404
// - 500
// - Empty response
// - Unauthorized access
// whenever needed.

// How Mocking Works Internally?

//     - Normal Flow

//         Browser
//         ↓
//         Request
//         ↓
//         Server
//         ↓
//         Response
//         ↓
//         Browser

//     - Mocked Flow

//         Browser
//         ↓
//         Request
//         ↓
//         Playwright Intercepts
//         ↓
//         Fake Response
//         ↓
//         Browser

// Request never reaches server.

// Playwright Mocking Architecture

// Playwright sits between:
// Browser ↔️ Server
// and intercepts network traffic.

// For interception Playwright provides:
// page.route()

// page.route() : Used to intercept requests.

// Syntax:
// await page.route(urlPattern, handler);

// Example:
// await page.route('**/api/users', async route => {

// });

// Once Playwright detects matching URL,
// handler executes.

// Route Lifecycle

// Step 1: Browser sends request
//             ↓
// Step 2: Playwright intercepts request
//             ↓
// Step 3: Tester decides:
//         - fulfill()
//         - continue()
//         - abort()
//             ↓
// Step 4: Request completes

// Route Object

// Inside handler:
// await page.route('**/api/users', async route => {

// });
// route contains request information.

// Request Object

// Access request details:
// const request = route.request();

// Useful methods:
//     request.url()
//     request.method()
//     request.headers()
//     request.postData()
//     request.postDataJSON()

// Types of Mocking in Playwright

// 1. Full Mocking: Replace entire response.

// 2. Partial Mocking: Modify only some data.

// 3. Error Mocking: Return failure responses.

// 4. Network Failure Mocking: Simulate internet issues.

// 5. Request Modification: Modify request before sending.

// route.fulfill():    Returns a custom response.
//                     Most commonly used method.

// Example:  
// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 200,
//         contentType: 'application/json',
//         body: JSON.stringify([
//             {
//                 id: 1,
//                 name: 'John'
//             }
//         ])
//     });
// });

// Server is never called.

// route.abort(): Blocks request completely.

// Example:
// await page.route('**/api/users', async route => {
//     await route.abort();
// });

// Result: Network request fails.

// route.continue(): Allows original request.

// Example:
// await page.route('**/api/users', async route => {
//     await route.continue();
// });

// Request reaches actual server.

// route.fetch(): Fetch original response first.

// Example:
// const response = await route.fetch();

// Used for partial mocking.

// Mocking Success Response

// Example:

// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 200,
//         contentType: 'application/json',
//         body: JSON.stringify([
//             {
//                 id: 1,
//                 name: 'John'
//             }
//         ])
//     });
// });

// Mocking Empty Response

// Example:
// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 200,
//         body: JSON.stringify([])
//     });
// });

// Used for: "No Data Found"

// Mocking 404 Error

// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 404
//     });
// });

// Mocking 500 Error

// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 500,
//         body: 'Internal Server Error'
//     });
// });

// Mocking Unauthorized User

// await page.route('**/api/users', async route => {
//     await route.fulfill({
//         status: 401
//     });
// });

// Mocking Network Failure

// await page.route('**/api/users', async route => {
//     await route.abort();
// });

// Simulates:
// - No internet
// - Server unreachable

// Partial Mocking

// Fetch original response.
// Modify it.
// Return modified response.

// Example:
// await page.route('**/api/users', async route => {
//     const response = await route.fetch();
//     const users = await response.json();
//     users.push({
//         id: 999,
//         name: 'Mock User'
//     });
//     await route.fulfill({
//         response,
//         body: JSON.stringify(users)
//     });
// });

// Modifying Request Headers

// await page.route('**/api/users', async route => {
//     const headers = {
//         ...route.request().headers(),
//         Authorization: 'Bearer DemoToken'
//     };
//     await route.continue({
//         headers
//     });
// });

// Mocking GraphQL Requests

// await page.route('**/graphql', async route => {
//     const body = route.request().postDataJSON();
//     if(body.operationName === 'GetUsers') {
//         await route.fulfill({
//             status: 200,
//             body: JSON.stringify({
//                 data: {
//                     users: [
//                         {
//                             id: 1,
//                             name: 'John'
//                         }
//                     ]
//                 }
//             })
//         });
//     }
// });

// Storing Mock Data in Fixture Files

// fixtures/users.json

// [
//     {
//         "id": 1,
//         "name": "John"
//     }
// ]

// Usage:
// import users from '../fixtures/users.json';
// await route.fulfill({
//     body: JSON.stringify(users)
// });

// Recommended for large projects.

// Best Practices

// 1. Mock only unstable dependencies.
// 2. Do not mock everything.
// 3. Keep mock data realistic.
// 4. Store large data in JSON files.
// 5. Test both success and failure paths.
// 6. Use mocking only where necessary.
// 7. Avoid duplicating backend logic.

// Quick Revision

// page.route()
// → Intercept Request

// route.fulfill()
// → Return Fake Response

// route.abort()
// → Block Request

// route.continue()
// → Allow Request

// route.fetch()
// → Fetch Original Response

// request()
// → Access Request Details

// postDataJSON()
// → Read Request Payload

// Summary

// Mocking is the process of intercepting network requests and returning controlled responses instead of contacting the real backend. It helps create faster, stable and predictable tests. Playwright provides page.route() for request interception and route.fulfill(), route.abort(), route.continue(), and route.fetch() for handling intercepted requests.



import { test, expect, Locator } from '@playwright/test';
import tags from '../test-data/tags.json'

test.describe('Mocking', () => {
    test.beforeEach(async ({ page }) => {

        //Let's mock the Get Tag API;
        await page.route('**/api/tags', async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(tags)
            })
        })

        //Mock articles API
        await page.route(' **/api/articles*', async route =>
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    articles: []
                })
            })
        )

        //Visit the login page.
        await page.goto('https://conduit.bondaracademy.com/login')


        //Perform the login
        await page.getByPlaceholder('Email').fill('hitaansh@gmail.com');
        await page.getByPlaceholder('Password').fill('hitaansh');
        await page.getByRole('button', { name: 'Sign in' }).click();

        await page.waitForURL('https://conduit.bondaracademy.com');

        test('Verify the popular tags', async ({ page }) => {
            for (const tag of tags.tags) {
                await expect(page.getByText(tag)).toBeVisible()
            }
        })
    })
})