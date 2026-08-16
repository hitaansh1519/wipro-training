//Question 1

const students = [
  { name: 'Aman', grade: 'A' },
  { name: 'Riya', grade: 'B' },
  { name: 'Karan', grade: 'A' },
  { name: 'Neha', grade: 'C' }
];
 
{
  A: ['Aman', 'Karan'],
  B: ['Riya'],
  C: ['Neha']
}


const students = [
  { name: 'Aman', grade: 'A' },
  { name: 'Riya', grade: 'B' },
  { name: 'Karan', grade: 'A' },
  { name: 'Neha', grade: 'C' }
];

function grades(students){

    return students.reduce((result, pointer) => {

        if(result[pointer.grade]) result[pointer.grade].push(pointer.name);

        else result[pointer.grade] = [pointer.name];

        return result;
    }, {})
}

const output = grades(students);

console.log(output);



//Question 3

// Problem
// Find repeated words typed back-to-back in a sentence.
// Case-insensitive check (Please = please).
// Output each repeated word once, in the order it appears.
// Keep the original form (casing) from the first occurrence.
// In One line - Given a sentence, find words that appear twice in a row (back‑to‑back), case‑insensitively, and output each such word once, preserving the original casing and the order of first appearance.
// Example
// Input:
// Please please help me me Quickly quickly
// Output:
// Please me Quickly

function makeStringShorter(text){

    const seen = [];
    const duplicate = [];

    text = text.split(' ');

    for(const word of text){
        if(!seen.includes(word.toLowerCase())) seen.push(word.toLowerCase());

        else duplicate.push(word.toLowerCase());
    }

    console.log(seen);
    console.log(duplicate);

    for(const acc of duplicate){
        let indi = text.indexOf(acc);
        text[indi] = '';
    }

    text = text.join(' ');

    return text;
}

const output = makeStringShorter("Please please help me me Quickly quickly");

console.log(output);



function findRepeatedWords(str) {
 
    let words = str.split(" ");
    let result = [];
 
    for (let i = 0; i < words.length - 1; i++) {
 
        if (words[i].toLowerCase() === words[i + 1].toLowerCase() && !result.includes(words[i])) {
 
            result.push(words[i]);
 
        }
 
    }
 
    console.log(result.join(" "));
}
 
findRepeatedWords("Please please help me me Quickly quickly");


function detectRepetition(sentence){

    let words = sentence.split(" ");

    let results = [];
    let seen = new Set();

    for(let i = 0; i < words.length - 1; i++){

        let current = words[i];
        let next = words[i + 1];

        if(current.toLowerCase() === next.toLowerCase()){

            if(!seen.has(current.toLowerCase())){

                results.push(current);

                seen.add(current.toLowerCase());
            }
        }
    }

    return results.join(" ");
}

console.log(
    detectRepetition("Please please help me me Quickly quickly")
);

//Question 4 

// Sort Strings by Last Character
 
// Username Sorting
// A system sorts usernames based on the last character of each username.

// If two usernames have the same last character, they must keep their original order.
 
// Sample Input
// 4
// alex ryan mona chris
 
// Sample Output
// mona ryan chris alex
 
function sortUsernames(usernames) {

    return usernames.sort((a, b) => {

        let lastA = a[a.length - 1];
        let lastB = b[b.length - 1];

        if (lastA > lastB) return 1;

        if (lastA < lastB) return -1;

        return 0;
    });
}

const usernames = ["alex", "ryan", "mona", "chris"];

console.log(sortUsernames(usernames));


 
// You are given an array of product names.
 
// Sort the products based on:
// Shortest name first
// If two products have the same length, sort them alphabetically


const products = [
    "Laptop",
    "Pen",
    "Mouse",
    "Book",
    "Keyboard",
    "Cup",
    "Mobile",
    "Bag"
];

products.sort((a, b) => {

    // Sort by length first
    if (a.length !== b.length) {
        return a.length - b.length;
    }

    // If lengths are same, sort alphabetically
    if (a > b) return 1;

    if (a < b) return -1;

    return 0;
});

console.log(products);


//i can use 
//it is available inside every function
//it doesn't work in the arrow function


//Question 1

// Problem 1 - Movie Ticket Booking

 
// The function should return:
 function bookTicket(name, seats = 1, category = "Silver") {

    return `${name} booked ${seats} seat in ${category} category`;
}

console.log(bookTicket("Piyush"));

console.log(bookTicket("Piyush", 3));

console.log(bookTicket("Piyush", undefined, "Gold"));
// "Piyush booked 1 seat in Silver category"
 
//Expected -> Piyush booked 1 seat in Silver category
 
//Expected -> Piyush booked 3 seat in Silver category
 
//Expected -> Piyush booked 1 seat in Gold category



//Question 2

// Problem 2 - Username Generator
 
// Create function:
 
function createUsername(name = "guest", number = 100){
    console.log(`${name}${number}`);
}
//guest100
 
createUsername()
//guest100
 
createUsername("piyush")
//piyush100
 
createUsername(undefined, 999)
// guest999
 
// Problem 3 - Salary Calculator
 
// Create function:
 
function calculateSalary(basicSalary, bonus = 0, tax = 10){
    console.log(`${basicSalary + bonus - tax}`);
}
 
// Formula:
// basicSalary + bonus - tax
 
calculateSalary(5000)
calculateSalary(5000, undefined, 50)
calculateSalary(5000, null, 50)
 
// Problem 4
// Create function:
 
function calculateArea(length, breadth = length){
    console.log(`${length*breadth}`)
}
calculateArea(5)
//25
 
calculateArea(5, 10)
//50
 
// Problem 5
function demo(a = 10, b = a + 5) {
    console.log(a, b);
}
 
demo();     //Output? 10 , 15
demo(20);   //Output? 20 , 25
demo(undefined, 50);    //Output? 10 , 50


//Destructring

const colors = ['red', 'green', 'blue']

// const first = colors [0]
// const second = colors [1]
// const third = colors [2]

const [first, second, third] = colors

console. log({first, second, third})


const results = [{
first: "Eliud", //goldWinner
last: "Kipchoge",
country: "Kenya",
},
{
first: 'Feyisa',
last: 'Lilesa',
country: 'Ethiopia'
},
{
first: 'Galen',
last: 'Rupp',
country: 'United States'
}]


// const [, { country }] = results

const [{first: goldWinner}, {country}] = results

console.log([{goldWinner}]);


//Question

let a = 10;
let b = 12;

[b, a] = [a, b];

console.log(a);
console.log(b);


//Question

//Swap First and Last Element only
const nums= [10, 20, 30, 40, 50];
 
[nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]];

console.log(nums);


//Question 

// The Task:
// From the apiResponse object, extract the following into variables.
 
// The title of the post.
 
// The name of the author, renamed to authorName.
 
// The tags array, but only the first two tags into variables primaryTag and secondaryTag.
 
// The rating, renamed to userRating. If it is missing, it must default to 5.
 
const apiResponse = {
  status: 200,
  data: {
    post: {
      title: "Mastering JS",
      meta: {
        author: { name: "Alice", id: 1 },
        stats: { views: 1000 }
      },
      tags: ["programming", "web", "tech"]
    }
  }
};
 
// Your code here:
const {
  data: {
    post: {
      title,
      meta: {
        author: { name: authorName }
      },
      tags: [primaryTag, secondaryTag],
    },
  }
} = apiResponse;


console.log(title, authorName, primaryTag, secondaryTag);



//Question

// Given an array of two users, use a single destructuring assignment
// to swap their positions in the array, but simultaneously extract
// the email of the user who ends up at index 0 into a variable called firstUserEmail.
 
let users = [
  { id: 1, email: 'admin@test.com' },
  { id: 2, email: 'guest@test.com' }
];
 
// Your code here:
[users[0], users[1]] = [{ email: firstUserEmail } = users[1],  users[0]];

// const { email: firstUserEmail } = users[0];
 
console.log(users[0].id); // Expected: 2
console.log(firstUserEmail); // Expected: 'guest@test.com'


//Question

//reverse a number

function reverseNumber(num) {
    
    let sign = 0;

    if(num < 0) sign = -1;

    else sign = 1;
 
    num = Math.abs(num);
 
    let reversed = 0;
 
    while (num > 0) {
 
        let digit = num % 10;

        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
 
    return reversed * sign;
}
 
console.log(reverseNumber(420));  
console.log(reverseNumber(-530));  
console.log(reverseNumber(1234));


function reverseNumber(num) {
 
    let sign = num < 0 ? -1 : 1;  //checks whether number is -ve or +ve
   
    let decimalPlaces = 0;  //stores how many digits are after decimal point
 
    if (num % 1 !== 0) {   //whether number is decimal or not
        decimalPlaces = num.toString().split('.')[1].length;  //counts digit after decimal
        //first converts to string ->split from decimal point -> [1] gets digit after decimal (mainly second element) -> gives length of second element
        num = num * (10 ** decimalPlaces);  //removes decimal temporarily
    }
    num = Math.abs(num);  //converts -ve number to +ve
 
    let reversed = 0;  //stores reversed number step by step
 
    while (num > 0) {
 
        let digit = num % 10;   //gets last digit
 
        reversed = reversed * 10 + digit;  //add digit to reversed
 
        num = Math.floor(num / 10); //gives me the smaller whole numbers
    }
 
    return reversed * sign;
}
 
console.log(reverseNumber(420));  
console.log(reverseNumber(-530));  
console.log(reverseNumber(1234));
console.log(reverseNumber(123.4))
 

function reverseNumber(num) {
    const isNegative = num < 0;
    // here we convert number to string and remove -sign
    let str = Math.abs(num).toString();
    // then reverse the string
    let reversedStr = str.split('').reverse().join('');
    // then convert back
    let reversedNum = parseFloat(reversedStr);
    //restoring -sign if needed
    return isNegative ? -reversedNum : reversedNum;
}
 
console.log(reverseNumber(420));
console.log(reverseNumber(-12345));
console.log(reverseNumber(123.45));
console.log(reverseNumber(-987.65));


function reverseDecimal(num) {
    const isNegative = num < 0
    let str = Math.abs(num).toString()
    let reversed = str.split("").reverse().join("")
    reversed = Number(reversed)
    return isNegative ? -reversed : reversed
}
 
console.log(reverseDecimal(1223.456))


function reverseNum(num) {
    num = String(num).split('');

    let i = 0;
    let j = num.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    console.log(Number(num.join('')));
}

reverseNum(123.456);

console.log("Call 98765 or 12345".match(/\d+/));

console.log("Call 98765 or 12345".match(/\d+/g));

//replace(replaceWhat, replaceWith)
console.log("hi    there     gfgf". replace(/\s+/g, " "));


//Question

// Replace Every K-th Word with Its Length
// Caption Shortener
// A social media app wants to shorten captions by replacing every k-th word with its character count.
// Sample Input
// 2
// Coding challenges are amazing to solve
// Sample Output
// Coding 10 are 7 to 5

const captionShorter = function(k, text){

    if(k <= 0) return;
    text = text.split(' ');

    for(let i = k - 1; i < text.length; i += k){
        let count = 0;
        for(letter of text) count++;

        text[i] = text[i].replace(/\w+/, count);
    }

    text = text.join(' ')
}

console.log(captionShorter(2, "Coding challenges are amazing to solve"));



const captionShorter = function(k, text) {

    if (k <= 0) return text;
    let words = text.split(' ');

    for (let i = k - 1; i < words.length; i += k) {
        words[i] = words[i].replace(/\w+/, words[i].length);
    }

    return words.join(' ');
}

console.log(captionShorter(2, "Coding challenges are amazing to solve"));


// Password Protector: Regex-Powered Security Check
// You are creating a system that validates a password before allowing user registration.
// Password Rules:
// It must be at least 8 characters long → else print "Password too short".
// It must contain at least one uppercase letter → else print "Must contain an uppercase letter".
// It must contain at least one digit → else print "Must contain a digit".
// It must contain at least one special character (!@#$%^&*) → else print "Must contain a special character".
// It must not contain spaces → else print "Spaces not allowed".
// If all rules pass → print "Valid password"
// Input Format
// A single string containing the password.
// Sample Input
// Weakpass
// Sample Output
// Must contain a digit

function passwordChecker(password){
    
    if(!password.length >= 8) return `Password to short`;

    if(!/[A-Z]/.test(password)) return `Must contain an uppercase letter`;

    if(!/\d/.test(password)) return `Must contain an number`;

    if(!/[!@#$%^&*]/.test(password)) return `Must contain a special character`;

    if(/\s/g.test(password)) return `Spaces not allowed`;

    return `Valid password`;
}

console.log(passwordChecker('Hitaansh@123'));

//Question

// For this array, move all the zeros to the end.
 
// const a = [1, 0, 2, 0, 3, 0]
 
// Solution - [1, 2, 3, 0, 0, 0]
 
function moveZeroToEnd(nums){

    let first = 0;
    let last = nums.length-1;

    while(first < last){
        if(nums[first] === 0 && nums[last] !== 0){
            swap(nums[first++], nums[last--]);
        }

        else if(nums[last] === 0){
            last--;
        }
        else first++;
    }

    return nums;
}

console.log(moveZeroToEnd([1, 0, 2, 0, 3, 0]));


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function moveZeroToEnd(nums){

    let first = 0;
    let last = nums.length - 1;

    while(first < last){

        if(nums[first] === 0 && nums[last] !== 0){
            swap(nums, first, last);
            first++;
            last--;
        }

        else if(nums[first] !== 0){
            first++;
        }

        else if(nums[last] === 0){
            last--;
        }
    }

    return nums;
}

console.log(moveZeroToEnd([1, 0, 2, 0, 3, 0]));

//using filter methods

const a = [1, 0, 2, 0, 3, 0];
function moveZeros(arr) {
  let nonZeros = arr.filter((num) => num !== 0);
  let zeros = arr.filter((num) => num === 0);
  return [...nonZeros, ...zeros];
}
 
console.log(moveZeros(a));


//Using Reduce

function moveZeros(nums){

    let cnt = 0;

    const result = nums.reduce((acc, cur) => {

        if(cur !== 0) acc.push(cur);
        else cnt++;

        return acc;
    },[])

    for(let i = 0; i < cnt; i++){
        result.push(0);
    }

    return result;

}

console.log(moveZeros([1, 0, 2, 0, 3, 0]))
 


//Using unshiift and push

function moveZeros(nums){

    const result = [];

    nums.forEach(num => {
        if(num === 0) result.push(num);

        else result.unshift(num);
    })

    return result;
}

console.log(moveZeros([1, 0, 2, 0, 3, 0]));