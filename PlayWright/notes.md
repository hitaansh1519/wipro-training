npm init playwright@latest
This command will create the Playwright folder structure from scratch, and it will also automatically download the necessary browsers. 

playwright.config.ts - This is the most important file.
It is the heart of the Playwright framework. 

This is the configuration file for Playwright.
We keep all the common settings at one place, which is the configuration file.

From here we control:
1. Which browser to use
2. How many tests to run together
3. How much time to wait
4. Where the reports are saved
5. Whether to record videos
6. Whether to retry failed tests

testDir -> When Playwright runs, it doesn't guess where the test files are. We simply tell Playwright, "This is the path of my folder. Just go there and run my test cases from." 

reporter: 'html'    -> Playwright gives you an HTML report out of the box.
Playwright will generate an HTML report without writing any single line of code

npx playwright test 
When I run this command, Playwright will run all the test cases inside the test folder and by default in headless/invisible mode.

npx playwright test --headed
This command runs all the test cases, and all browsers would be shown.

By default, Playwright will run test cases in the headless mode. To see the browsers, we just have to add this flag --headed

projects section Means run the same test cases in different environments. Each object inside projects is one environment.

`node_modules` - This is the folder which is automatically created, and it holds all the packages/dependencies/libraries our project is using.

Never edit the note_modules folder manually.

Along with Playwright, Some other packages are also installed automatically, which are internally used by Playwright. These are called `supportive` or `transitive` dependencies.
This is only for your understanding. You never modify or touch these dependencies ever.

Direct dependency = What I install? For example, Playwright. 
Transitive dependency = What automatically comes along

package-lock.json - TODO. Figure out more about this.

.gitignore - This is a file that contains the names of all the files and folders that git should ignore. Do not track. Do not upload.
The purpose of this file is to stop unwanted files from going to the remote repository. 

Every test file should end with .spec.ts. 
In Playwright, every test file has to contain .spec.ts. 
Spec means specification. 
Other TypeScript files are just helper files. 

package.json -> This is the main file of any JavaScript project. It contains project details, dependencies, scripts. It is similar to pom.xml of Selenium. 

^1.60.0
1 -> This is the major version. 
60 -> this is the minor version. 
0 -> This is the patch version.

scripts section in package.json
Rather than remembering these lengthy commands, we can store them inside package.json inside the script section and assign a small nickname or an alias. 
The real term is custom script. 

In order to run any custom script, we run this command. 
npm run <customscriptname>

Inside script section, we don't need to use npx. 
Inside terminal, npx is mandatory. 

Instead of running the command `npm run test`, we can also run `npm test`. 
Why is it working? Because `test` is a special script. 
`start` is another special script.

Playwright-report is the folder which contains the actual HTML report. 
test-results is the folder which contains your test artefacts. For example:
- screenshots
- videos
- Trace

When I am running the test cases from the terminal, the test case runs and the browser gets closed automatically.

await page.pause() Is completely useless when you are running tests in headless.
To actually start the debugging, you have to run your test cases in headed mode. Then only you will see Playwright inspector. 

Resume
Step over - Run the current line and pause. It executes code one statement at a time.

await page.pause() This is used for learning and debugging Playwright tests. If you will run the test in the headed mode, it will open Playwright inspector, and now you can check your browser and you can verify its current state. 

In any given file, Playwright doesn't allow duplicate test case names. But in multiple files, you can do that. 

fullyParallel: true

By default, Playwright will run test cases in parallel mode only, not in sequential mode. 

Imagine you have two spec files. 
Spec file is the one that contains your Playwright test cases.
spec1 with 2 test cases
spec2 with 2 test cases

1. When you have fullyParallel: false
Spec 1 and spec 2 will run in parallel, but the test cases inside
these files will run in sequential mode only.

It means the spec files are running in parallel, but the test cases inside
are still running sequentially. 

Running 4 tests using 2 workers

2. When you have fullyParallel: true
Spec 1 and spec 2 will run in parallel, plus the test cases in
spec 1 and test cases in spec 2 will also run in parallel.

Running 4 tests using 4 workers

workers inside playwright.config.ts

Worker is a process that runs your test. 
If you have one worker, it means all the test cases will run in sequential mode. 
worker: 1 means No paralellism.

If you have four workers, it means four test cases can run in parallel at the same time. This means faster execution. 

With only a single worker, only one test can run at a time. Test 1 will start running. Once it is completed, then only Test 2 will start, then only Test 3 will start. This means all the test cases are running one after the other.

With 4 workers, all 4 test cases will run together, so total time will be much less.

Each worker in Playwright gets its
- own browser context
- its own session 
- its own cookies

This means all tests are fully isolated from each other. One test execution does not disturb another. 

When workers is set to 1, fullyParallel setting is Completely useless. workers: 1 Means we have disabled the parallelism for the entire Playwright project. 

If you want to modify any configuration setting at the run time, simply use --. 
npx playwright test --workers=6

The above command means use six workers, but only for this specific execution. I am not modifying the config file. 

More workers do not always mean more speed. It depends on your machine. 
If your kitchen has four stoves, you can cook four dishes at the same time. 
Imagine now you bring 6 cooks, but you still have four stoves.

Some cooks will wait, some will fight for space. The work will actually be slower. 
Same thing happens with CPU and memory. 

Playwright automatically checks your system. It looks at your CPU and your RAM and then chooses a safe number. 

When I do npx playwright test --workers=6
I'm telling Playwright to ignore your calculation. I want more parallel tests. Sometimes this helps, sometimes it hurts. If your machine is powerful, it has more RAM and more cores, six workers may be faster, but on most normal laptops, six workers will slow things down. Your CPU might become busy, your memory becomes fuller, your browser becomes heavy, and your performance might drop. 

Ideally, we let Playwright decide the optimal number of workers. 
The rule is: do not blindly increase workers. Default value is usually the best. 

If my requirement is to run the test cases only on Chrome browser without modifying the configuration file, I can run this command. 
npx playwright test --project=chromium

To run only a particular spec file and not all the spec files, run this command. 
npx playwright test tests/example.spec.ts --project=chromium
OR 
npx playwright test example.spec.ts --project=chromium
OR
npx playwright test example --project=chromium      Here `example` is like a pattern
And both the files contain this example pattern.

To run only a particular test case with a specific name, we can run this command. 
npx playwright test -g "Login test case" --project=chromium

We have two annotations: `skip` and `only`. 
To skip a particular test case, simply use `test.skip`.

Suppose I have a hundred test cases and I want to run only a single one.
Would I write test.skip 99 times? No.. 

Remove test.only once you are done. It is only used for temporary debugging.

The report is opened automatically only in case of a failure. When the test cases are passing, the report is not opened automatically.

The browser always gets closed when I'm running the test cases from the terminal.
When I am running my tests from the VS Code extension, the browser stays open by default. Even when I am running the test cases from the VS Code extension, the report is still generated, but it will not be opened even if the test case fails.

VS Code extension is meant for learning, debugging, stepping through tests, watching the browser, inspecting failures. 
Parallel execution and debugging do not go well together, so Playwright runs test cases sequentially when you are running from Test Explorer.
In this mode
workers are forced to 1.
Test cases run one by one. 
Browser actions are easier to observe. 
Output is easier to understand. 

Compared to terminal execution - npx playwright test
It uses multiple workers by default. Test cases will run in parallel. The execution is faster. 

Imagine you are debugging with four workers. 
Four browsers would open. 
Logs would be mixed together. It is very hard to follow the execution.
That would be chaos, so VS Code chooses clarity over speed. 

VS Code play button = Debug mode = 1 worker
Terminal = Execution mode = Multiple workers

Start Continuous Run 
This means
1. watch your files.
2. When the code changes, run the test cases automatically. 

When you first clicked the Start Continuous Run button
VS Code said, "OK, I'll watch the files. I'll auto run tests, but I do not know which test cases you care about, so it ran everything once." 

To open the UI mode, run this command. 
npx playwright test --ui

By default, in both the VS Code execution and UI mode, a single worker is there.
Only in terminal mode, it runs in multiple workers. 








Debugging means finding and fixing mistakes in our code. Every tester and developer does this almost daily, so we must learn it properly. 

When our test case fails, Playwright is not wrong. Sometimes in our code, locator data or logic could be wrong. Debugging helps us find where.

The basic idea of debugging 
Normally, when we run test cases, they run super fast.
We cannot see what is happening

so we do not know
1. where it failed
2. why it failed
3. what went wrong. 

This is where we use the debugging feature. 

Debugging means 
1. Slow down the test case. 
2. Stop it in the middle. 
3. Watch every step. 

So that we can understand the problem. 

How do we debug in Playwright? There are three simple ways.

Way 1 - Using page.pause()
It simply opens the Playwright inspector window. This pauses the test at that particular line. 

You can see the browser, inspect elements, try out locators, and check the current page state. 
Use this feature when you want to pause at a particular place.

Way 2 - Using --debug
This runs the whole test in debug mode. In this case, it will always run in headed mode automatically. 
The test starts as paused from the very first line itself.

You can step through it line by line.
You can use this feature when you do not know where the problem is. 

Run this command
npx playwright test example.spec.ts --debug

While debugging, we can watch browser behaviour. We can see if the page is loaded properly. We can verify the data. 

We are basically watching the test work. 

Debugging is temporary. Never keep page.pause in your final code. Make sure you are removing it once your test case is fixed. 

Way 3 - VS Code Debug Button 




Fixture is 