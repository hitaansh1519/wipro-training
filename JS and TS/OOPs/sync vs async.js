//sync vs async

//Synchronous execution: JavaScript runs code line by line.
//It does not move to the next line until the current line finishes execution.

console.log('Start');
console.log('Processing');
console.log('End');

//Javascript executes these statements in the exact order they appear.
//Nothing else can run unitl the current task finishes. This execution is called bloacking or synchronous in nature.

//All the Playwright commands are asynchronous in nature.

//Javascript is single-threadeed in nature. Javascript can do only one thing at a time.
//It executes code line by line, one task at a time.


console.log("Start")

// Simulating a time-consuming task

function fetchData() {
    let start = Date.now();
    while (Date.now() - start < 7000) {} // Blocks execution for 3 seconds
    return "Data loaded";
}

let data = fetchData();
console. log(data) ;

console. log("End");

//synchronous code is also called blocking code, as it blocks the further
// execution until the current task is completed.

/*
Many real-world tasks take time. For example,
fetching data from the server.
Reading file.
Waiting for a timer
Making some API calls.
*/

//Asynchronous programming or asynchronous code
console. log("Start")

setTimeout(()=>{
console. log("Async task finished")
}, 2000)

console. log("End")
//Open the URL.
//Enter the username.
//Enter the password.
//Click on the login button.

//Callback Hell and Pyramid of Doom
//The reason for these nested callbacks is dependency.
//Step one should finish first, then only step two should start, then only step three should start
setTimeout(()=>{
    console. log("Step 1")

    setTimeout(()=>{
        console. log("Step 2")

        setTimeout(()=> {
            console. log("Step 3")
        }, 1000)

    }, 1000)

}, 1000)

//Open the URL.
//Enter the username.
//Enter the password.
//Click on the login button.

//Sequential Set-Timeouts
console. log("Start");

setTimeout(()=> console.log("Step 1"), 1000);
setTimeout(()=> console.log("Step 2"), 1000);
setTimeout(()=> console.log("Step 3"), 1000);

console. log("End");



//Promise
//promise help us write asyncronous code in a more structured way

//a promise in Javascript does the same thing. It waits for a task to finish, and then either it succeeds or it fails.


//This function is returning a promise.
//This function is giving me a promise that I will complete this work sometime in future.

function delay(message, time){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, time);
    })
}


//then() ->
delay("hello", 1000)
.then(() => delay("Step 2", 1000))
.then(() => delay("Step 3", 1000));



//async and await
//With async and await, asynchoronous code looks almost like synchronous code.

//Technically, an asynchronous command is non-blocking in nature.
async function runTasks(){
    console.log("start");

    await delay("Step 1", 1000);
    await delay("Step 2", 1000);
    await delay("Step 3", 1000);

    console.log("End");
}

/*
First we had callbacks
Then we got promises.
And today, the most common approach in modern projects is async and await.

synchronous = wait
asynchronous = do not wait
*/

//###

//JavaScript can do only one thing at a time.

//There is a person cooking food.
//"I will not do anything else until the tea is ready."

//Synchronous behavior

console. log("Making tea")
console. log("tea got ready")
console. log("Serving tea")

//JavaScript waits for the current work to finish before moving to the next line.
//This is called synchronous execution.

//Synchronous means wait and move step by step.

//You put the tea on the stove and instead of waiting there doing nothing, you start cutting vegetables.
//This is called asynchronous execution.

//You started one task, but while it is happening in the background, you continued doing other work.

console. log("Start making tea")

setTimeout(()=>{
console. log("Tea is ready")
}, 2000)

console. log("Cutting vegetables")

//asynchronous = start the work and continue doing other things without waiting

//Synchronous code blocks the next task.

//Why does asynchronous programming really exist?
//Some tasks take time
// if JavaScript waits for every task to finish, applications would freeze and feel very slow


//Promise
//A promise simply means I promise I will finish this work in the future
//A promise always starts as 'pending'
//Eventually, the promise has to be either 'fulfilled'(the task is completed) or 'rejected (some failure happened).

delay("Step 1", 1000) //1st promise
.then(() => delay("Step 2", 1000)) //2nd promise
.then(() => console. log("Done"))

//Promises make asynchronous code cleaner than callbacks.

//The most modern syntax of working with promises is 'async' and 'await'.

//Async and await make asynchronous code look like normal step-by-step code.

//Because of this await, this asynchronous command starts behaving like synchronous.
await delay("Step 1", 1000) //DB query. 5 sec.
await delay("Step 2", 1000)
await delay("Step 3", 1000)

//If JavaScript worked only synchronously, the entire application would freeze while waiting for a slow task.





