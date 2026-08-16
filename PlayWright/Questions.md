Basices ->

Ques. What are Hooks in Playwright?
Ans: Hooks mean a common setup or cleanup code that Playwright runs automatically before or after a test.
Example: beforeEach, beforeAll, afterEach, afterAll, fail, skip, only.

Ques. What are fixtures in Playwright?
Ans: Fixture is something that is already prepared in advance for you. This page represents one browser tab.

Ques. Why do we use 'await' in Playwright?
Ans: Asynchronous code/step means it is non-blocking in nature. So Playwright will not wait for it to complete. I have to
use await. Using await, I am forcing Playwright to wait for this step to complete, then only move on to the next line.
Using await, I am making this asynchronous code behave like synchronous code(blocking).

Ques. What are Locators?
Ans: Locators are the locating techniques.

Ques. There are how many locating strategies? Name them.
Ans: 


Ques. What are Single Page applications(SPA)
Ans: A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically rewrites its content as the user interacts with it.

Ques: Do we need to do something special in automation when we deal with these applications?
Ans: 



Upload

Ques. What path should be use Absolute path or Relative Path?


Ques allInnerText vs textContent

innerText




API TESTING

Ques. What are APIs?
Ans: API is a bridge between the two systems. Request means what we asked for. Response means what we get back. API testing means checking whether the API is working correctly or not and Playwright helps us automate this API testing.

Ques. What are status codes?
Ans: It's just a way server tells us the status of our request thorugh numbers.

Ques. What is the difference between toBe() and toEqual()?
Ans: toBe() is like a stricter check(===) whereas toEqual is like a loseCheck(==).

Ques.

Locator Name:

getByText ->
getByRole ->


Assertion Method Names:

toHaveValue() -> toHaveValue assertion does not fetch and store for later use. It is just for verification.
inputValue() -> For fetching and storing the value for later use.
toBe() -> toBe() is like ===

textContent() - It gives you the raw text without any style. It also
gives you the hidden text. Slightly faster than innerText
It returns exactly what is in the HTML, no matter how it is styled or displayed. 

innerText() - It gives you the styled text after applying CSS style/styles.
It does not give you the hidden text. Slightly slower.  
It returns what is actually rendered on the screen. Give me the text
a user actually sees.

inputValue() - It fetches the live value from the text field. 

All the above three methods fetch and store for later use. 