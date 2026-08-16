Playwright Notes

Ques. Why do we need browser Automation?

Ans: Playwright is browser automation tool.

1. Why do we need browser automation?

1. Suppose you are testing a web application

manually.

You open the browser, you enter the URL, you

type the ID and the password, and click on the

login button.

You are trying to verify whether the dashboard

is opening or not.

Imagine doing this ten times. Maybe

manageable.

Hundred times very painful.

Now imagine doing this every day.

Imagine doing this for different browsers,

different users with different test data and

different scenarios.

This becomes very boring, repetitive, and

time-consuming.

When humans repeat the same task again and

again, mistakes can happen.

- Maybe we can forget one step.

- Maybe we enter wrong data.

- Maybe we miss checking one message.

- Maybe we test in one browser but forget

another browser.

This is where automation helps us.

Automation means we write instructions once,

and then the tool can repeat those actions for

us.

So, instead of manually opening the browser

and clicking everything again and again, we

write code that tells the browser what to do.

That is where Playwright comes into the picture.

What is Playwright?
Playwright is a browser automation tool.

In simple words, Playwright allows us to
control a browser using code.

Just like a human can open a browser, click
on buttons, type into a text box, select a
drop down, upload a file, verify some text,
Playwright can also do these things through
code.

If I say:

- open this website
- click on this button
- enter this ID
- enter this password
- click Log In
  check whether the dashboard is visible
  Playwright can perform all these actions in the browser.

To make it simple, Playwright helps us
automate browser actions and verify
whether our web application is working
correctly or not.

What can Playwright do?

Playwright can do many things that a real user
does in the browser.

For example:

- It can open a website.
- It can click on buttons.
- It can type into input fields.
- It can select values from dropdowns.
- It can check checkboxes.
- It can upload files.
- It can handle multiple tabs.
- It can verify text on the page.
- It can check whether an element is visible or
  not.
- It can take screenshots.
- It can record videos.
  It can help us debug failed test cases.

- It can run tests in different browsers.
- It can run tests in headless mode, where
  the browser runs in the background.
- It can run tests in headed mode, where
  we can actually see the browser opening
  and actions happening.
  Playwright is not just a tool that clicks
  buttons. It is a complete modern
  automation tool for testing web
  applications.

What is the basic idea behind Playwright?

We write some code.

Playwright reads that code.
It controls the browser.
The browser performs actions on the web
application.
Then Playwright helps us verify the result.

Our test code
This is the code written by us.
For example, we may write code to open a
website. We may write commands to click
on a button, type into a text box, verify some
text.
So our test code contains the instructions.
It is like giving instructions to someone.

For example:

- Go to this website.
- Click this button.
- Type this value.
- Check this message.

In Playwright, we write these instructions using
Java, JavaScript, Python, TypeScript, C sharp.

await page.goto('https://google.com')

This code means go to this website, google.com.

await page.locator('login').click()

await page.locator('#username').fill('piyush')

Our code is simply giving instructions.

What is Playwright doing in between?

If we write code, how does the browser
understand it?

The browser does not directly understand our
testing code. This is where Playwright helps
us.
Playwright acts like a bridge between our code
and the browser.

Our code says click on this button.
Playwright understands this. Then Playwright
tells the browser to perform that action.

Playwright is the middle layer that controls the
browser for us.
Playwright does not blindly click or type.

When we ask Playwright to click on a button,
Playwright checks many things internally.

For example:

- Is the button present on the page?
- Is the button visible?
- Is the button enabled?
- Is the button stable?
- Is the button ready to receive the click?
  Only then Playwright performs the click.

This is one of the reasons Playwright is very
powerful.

It tries to behave like a smart automation tool. It
does not just rush and perform actions blindly.





The Browser

The next part is the browser. The browser is
where the actual website opens.
For example - Chrome, Edge, Firefox, Safari

Playwright can work with different browser
engines.
- Chromium, Firefox, WebKit
- Chromium is the browser engine used by
browsers like Chrome and Edge.
- Firefox has its own engine.
- WebKit is the browser engine used by
Apple Safari.

Playwright can run our test cases in different browsers. 
This is very useful because sometimes an application works properly in one browser but fails in another browser. 
With Playwright, we can test our application across different browsers.


The final part is the web application. This is the
actual application we are testing. It can be an e-
commerce website. It can be a banking
application. It can be a learning platform. It can
be an internal company application. It can be any
web application.

Playwright can work with any application. It will
simply open the application in the browser and
perform actions on it.

The complete flow is:
1. Our code gives an instruction.
2. Playwright understands the instruction.
3. It will control the browser.
4. The browser interacts with the web
application, and Playwright verifies the result.





A real-life example.

Suppose you want to test the login
functionality.
Manually, you would do this:
1. You would open the browser.
2. You would open the application URL.
3. Enter the user name.
4. Enter the password.
5. Click on the login.
6. Then you will check whether the dashboard
is available.

In Playwright, we will write the same steps in
code.
await page.goto('https://amazon.com/login')
await page.locator('username').fill('piy123')
await page.locator('password').fill('xyz123')
await page.locator('loginBtn').click()

PlayWright is doing what a manual tester would do but thorugh code.
Playwright is considered a modern automation tool because it is designed for modern web applications.
Today, web applications are not simple static pages. Many things happen dynamically.
Data loads after some time. 
Buttons appear after some API calls. 
Dropdowns open dynamically. Some elements become visible only after scrolling.
Some pages are single-page applications(SPA) where the full page does not reload.

Modern applications are fast, dynamic, interactive, so automation tools also need to handle these situations properly. 
Playwright provides many features that help us test modern web applications more reliably.

Auto waiting in Playwright.
One of the most important features of
Playwright is auto-waiting.

Suppose you open a website.
There is a login button, but the button does not
appear immediately.
It appears after 2 seconds.

If a human is testing manually, what will the
human do?
The human will naturally wait. The human will
see that the button has appeared, and then only
he can click on it.

Automation is different. Automation can be very
fast. If the script tries to click the button before
the button appears, the test will fail.
In older style, automation testers often have to
write waits manually.

For example, wait for two seconds.
Wait for the element to be visible. Wait for
the page to load.
But Playwright handles many of these
waiting situations automatically. When we
ask Playwright to click an element, it waits
until the element is ready.

It checks whether the element is visible,
enabled, stable, and then only it performs
the action.
This is called auto waiting.

Auto waiting does not mean Playwright will
wait forever. It means Playwright waits
intelligently up to a certain timeout. This
makes the test more stable.



Then is headless and headed mode.

Playwright can run test cases in two modes:
headed and headless.

Headed mode means the browser is visible.
You can see the browser opening. You can see
the website loading. You can see Playwright will
perform actions like click, type.

Headless mode means the browser runs in the
background (invisible mode). You do not see
the browser window. The test will run but
silently in the background. This is useful when
we run tests in CI/CD pipelines or on servers.

Headed mode means visible browser. Headless
mode means invisible browser running in the
background, but for beginners, headed mode is
useful because you can see what is happening.

Assertion

Automation is not only about performing actions.
Testing also means verification.
If we only open the website, type username, type
password, and click login.
We also need to verify whether the expected
result happened or not. This is where assertions
come in.

Assertion means checking expected results.
For example:
- Check whether dashboard is visible
- Check whether error message is displayed
- Check whether page title is correct
- Check whether button is displayed
- Check whether text is present

We use ' expect` for assertion.


For example, I expect dashboard text to be
visible on the page after the login is done.

If the dashboard is visible, the test will pass,
but if it is not visible, the test should fail.

Actions perform steps. Assertions verify the
results. Both are very important in automation testing.


Screenshots, Videos and Trace Viewer

When a test fails, we need to understand why it failed.
- Maybe the button was not visible.
- Maybe the page did not load.
- Maybe the text changed.
- Maybe the wrong page opened.
- Maybe the application had a bug.

Playwright gives us very useful debugging features.
- It can capture screenshots.
- It can record videos.
- It can generate trace files.

Trace viewer is one of the most useful features of Playwright.
It allows us to see what happened during the test. We can
see each step. We can see screenshots of each step. We can
inspect what the page looked like. This helps us debug
failures faster.

Playwright gives us very good debugging support. When a test
case fails, Playwright helps us understand what went wrong.


Cross browser Testing

Users may use different browsers.
- Some users will use Chrome.
- Some use Edge.
- Some use Firefox.
- Some use Safari.

As a tester, we need to make sure our application works
properly across different important browsers.

Playwright supports cross-browser testing.

It can run tests on Chromium, Firefox, WebKit.

This helps us check whether our application behaves
correctly in different browser environments. This is a very
important feature in the real project.




Parallel Execution

In real projects, we may have many test cases.

It may be 50 tests. It may be 100 tests. It may be 1000
tests.
If all the tests run one by one, it can take a lot of time.

Playwright supports parallel execution. It means
multiple tests can run at the same time. This helps
reduce the total execution time.

For example, if a hundred test cases take a hundred
minutes one by one, running them in parallel can
reduce the time significantly.

Playwright can run tests fasterby running multiple tests
in parallel.




Mobile Emulation

Many users access applications from mobile devices.

Playwright can emulate mobile devices. This means it
can behave like a mobile browser.

It means it can use mobile viewport size.
It can simulate a mobile user agent.

This helps us test how our application looks and behaves on
mobile screens. This does not completely replace testing on
real devices, but it is still very useful.

We have a dedicated tool for mobile testing, and that is
`Appium'.



API Testing

Playwright is mainly known for browser automation, but it
also supports API testing.

For example, we can test:
- login API
- create user API
- product search API

Modern applications depend heavily on APIs.



Playwright Architechture

Simple Architecture of Playwright

Architecture simply means how different parts are connected and how they communicate.

Test Code -> Playwright -> Browser -> Web Application

Test code is written by us. It contains instructions like:
- Open the URL
- Click on a button
- Type some text
- Verify the results

Playwright is a third-party tool/library/dependency that understands our instructions and controls the browser.

Browser is where the website opens.
Web Application: This is the actual application we are testing.

Here is the flow ->
We write the test. 
Playwright runs the test. 
It controls the browser. 
The browser performs actions on the web application. 
Playwright verifies whether the expected result happened or not.



+------------------+
|    Test Code     |
|------------------|
| Open URL         |
| Click Button     |
| Fill Forms       |
| Verify Results   |
+------------------+
          |
          v
+------------------+
|    Playwright    |
|------------------|
| Reads code       |
| Understands      |
| Auto-waits       |
| Controls browser |
+------------------+
          |
          v
+------------------+
|     Browser      |
|------------------|
| Chrome           |
| Firefox          |
| WebKit           |
+------------------+
          |
          v
+------------------+
| Web Application  |
|------------------|
| Login Page       |
| Dashboard        |
| APIs/UI Actions  |
+------------------+
          |
          v
+------------------+
| Verification     |
|------------------|
| Assertions       |
| Pass / Fail      |
| Screenshots      |
| Trace Viewer     |
+------------------+



What action am I performing?
Which element am I interacting with?
What result am I verifying?

For every test case, think:
- What is the user doing?
- What should happen after that?
- How can I verify it?

This thinking is more important than memorising
commands.

The Common Beginner Confusion

Many beginners think automation means only writing
code, but automation testing is not just coding.
Automation testing requires testing thinking.

- You should be able to understand the scenario.
- You should understand the expected result.
- You should understand what can go wrong.
- You should understand what should be verified.

Code is only the way to express that thinking.


For example, if you are testing login, do not just think, "I need to
type username and password."

- Think: what should happen after successful login?
- What should happen after invalid password?
- What should happen if username is blank?
- What should happen if password is blank?
- What error message should be shown?
- Should the user stay on the same page?
- Should the login button be disabled?

This is testing thinking.
Playwright helps us automate this thinking.



Ques. What are normal and transitive dependencies?
Ans: 

Ques: What are custom scripts?
Ans:

Ques: What would take more time Headless and Headed mode and why?
Ans: 