
console.log("Welcome to Typescript")

//Syntax:
//let/const myvar: type = value
//int number = 4;

let myString = "Words!!!!"
myString = 100

//I am creating a rule that this variable can only be a number.
//And if I try breaking this rule, TypeScript will yell at me. 
//Static checking
let myNumber: number = 42

myNumber = "Hello World"

//In spite of the error, you are still allowed to run your TypeScript code. 
console.log(myNumber)

//The whole point of writing TypeScript is it will be turned into regular
//JavaScript at the end of the day that we can run in either Node.js or the browser.

//Type Inference
//It refers to the TypeScript compiler's ability to infer types
//from certain values in your code.

//The any type
//This feature is unique in TypeScript and not present in JS. 
//It turns off the type checking for this variable. So it is kind of
//defeating the purpose of using typescript.
let myData: any = "This is my data"
myData = 100
myData = true

//Delayed initialization
//Normally, when you declare a variable in TypeScript, you give it a value right away. 
let count: number = 5       //Initialized immediately. 

//Sometimes you do not know the value at the time of declaration.

let name1: string           //Declared but not initialised yet.
name1 = "Piyush"            //Initialised later. 
console.log(name1)

//Delayed initialisation means I'll tell you the data type now,
//but I'll give the value later on.

//Implicit any
//Typescript tries to guess the type of a variable.
//If you don't give a data type or an initial value, TypeScript
//will assume it is any. 

//Here we are turning off the type checking, which means I am
//losing TypeScript's main benefit. 
let data    //No type, no value. TS will assume datatype as any. 
data = 5
data = "hello"
data = true

//Functions
function greet(){
    console.log("Hello, welcome to TypeScript.")
}

greet()

//Duplicate function implementation.
function greet(){
    console.log("Hello, welcome to TypeScript.")
}

//private int sum(int a, int b) {}
function greetUser(string){
    console.log("Hello " + name)
}

greetUser("Piyush")
greetUser()     //Expected 1 arguments, but got 0.

//Function with return value 
function add(a: number, b: number): number{
    return a + b
}

let sum = add(5)
console.log("Sum is: ", sum)

//Default Parameters
//We can also give default values to parameters. 

function greetUserDefault(name: string = "Guest"){
    console.log("Hello, " + name)
}

greetUserDefault()
greetUserDefault('Rahul')

//Optional Parameters 
//Sometimes, parameters may not always be provided. We use a ?
//to mark them as optional.

function printMessage(msg?: string): void{
    if(msg){
        console.log("Message", msg)
    } else {
        console.log("No message provided")
    }
    
}

printMessage("Hello")
printMessage()

//Anonymous function Contextual Typing

const numbers = [1, 2, 3]
numbers.forEach(function(num){
    console.log(num.toUpperCase())
})

const names = ['Rahul', 'Priya', 'Amit']
names.forEach((name) => {
    console.log(name.toLowerCase())
})

//Contextual typing means typescript determines the type based on where the function is used. 
//TypeScript sometimes guesses the type correctly by looking at the surrounding code. 

//The void type
//The void type helps TypeScript understand that this function is only
//meant to perform an action, not return a value.

//TODO - The never type

//Arrays
const names1: Array<string> = ["hello", "world"]

const numbers1: number[] = [1, 2, 3]

//int[] nums = {1, 2, 3}

//Type safety in arrays
//TypeScript enforces element types. 
numbers1.push(10)
numbers1.push("hi")

let values: (string | number)[] = [1, "hello", 2, "world"]

let nums: readonly number[] = [1, 2, 3]

nums[0] = 100   //Index signature in type 'readonly number[]' only permits reading.
console.log(nums)
// nums.push(4)

//Tuple(Special type of array)

//Objects

// function printName(name: {first: string, last: string}){
//     console.log(`${name.first} ${name.last}`)
// }

// function greetPerson(person: {first: string, last: string}){
//     console.log(`${person.first}`)
// }

//This part -> {first: string, last: string} Is repeating again
//and again in both the functions. This is looking ugly and hard to maintain.

//The solution is a type alias.
//Type alias is just a way to give a name to a type so that we can reuse it.

type Name = {
    first: string,
    last: string
}

function printName(name: Name){
    console.log(`${name.first} ${name.last}`)
}

function greetPerson(person: Name){
    console.log(`${person.first}`)
}

printName({first: 'Piyush', last: 'Gupta'})

//The Name type is reusable. I can reuse it anywhere I want.

type ID = string | number

// let userId: number | string
let userId: ID
userId = 100
userId = "Hello"

/*
The type alias means nickname. 
We use it to avoid repeating the same type again and again. 
It makes your code cleaner and easier to maintain.
*/

//Optional Properties
type Person = {
    first: string,
    last?: string
}

//Every object that is using the `Person` type should contain both the properties.
const p1: Person = {
    first: 'Rahul',
    last: 'Sharma'
}


const printName1 = (person: Person) => {
    if(person.last){
        return `${person.first} ${person.last}`
    }
    return person.last
}

console.log(printName1({first: "Rahul", last: "Sharma"}));
console.log(printName1({first: "Rahul"}));

type Student = {
    readonly name: string,
    rollNo: number,
    phone?: string
}

//Every student must have a name and a roll number, but a phone number is optional. 

const s1: Student = {
    name: "abc",
    rollNo: 101
}

s1.name = "Hello"           //Cannot assign to 'name' because it is a read-only property.

const s2: Student = {
    name: "Priya",
    rollNo: 102,
    phone: "12345678"
}

//Literal types
//A literal restricts a variable to specific exact values only, not just a type. 

//These are the only four allowed values for this variable. 
let direction: "left" | "right" | "up" | "down"

console.log(direction)      //Variable 'direction' is used before being assigned.

direction = "left"
direction = "right"
direction = "hello"

let status1: "success" | "error"

//Tuples
//It is an array with a fixed length and ordered with a fixed set of types. 

//I want an array that has a number followed by a string.
let myTuple: [number, string]

//enums - This is unique to TypeScript and it does not exist in JavaScript. 

//Interfaces
/*
Interface is like a blueprint. 

It tells you what properties an object should have
what type those properties should be
but it does not contain actual data. 

For example, you can say a student should have a name and age. 

*/

interface Student1 {
    name: string,
    age: number
}

//Now, any object you create using this interface must follow this structure.
const s4: Student1 = {
    name: 'Amit',
    age: 30
}

//Interface defines the shape of an object. 

type Student2 = {
    name: string,
    age: number
}

const s5: Student2 = {
    name: 'Amit',
    age: 30
}

//1. Interfaces are extendable. 
//You can easily extend an interface. 

interface Person2 {
    name: string
}

interface Student3 extends Person2 {
    age: number
}

//2. Interfaces can be merged. 

interface User {
    name: string
}

interface User {
    age: number
}

//TypeScript will merge both these interfaces automatically. 
//The final shape becomes this. 

{
    name: string
    age: number
}

//Types are more flexible. They can do things interfaces cannot. 

type Status = 'success' | 'error'
type A = {name: string}
type B = {age: number}

type C = A & B

//Interfaces can not do union. 

/*
Use the interface when:
1. You are defining an object structure.
2. You are working with classes.
3. You expect extension.

Use types when:
1. You need union
2. You need more flexibility
3. You are combining multiple types

*/


//Question 1
// Create variables with proper types
// Create the following variables with correct TypeScript types:
// studentName
// studentAge
// isEnrolled
// marks
// city
// Example values can be your choice.

const studentName: string = 'Hitaansh';
const studentAge: number = 23;
const isEnrolled: boolean = true;
const marks: number[] = [100, 99, 98, 97];
const city: string = 'Bathinda';



//Question 2

// 2. Create a function to greet a user

// Write a function called greetUser.

// It should accept a user name as a string and return this message:

// Hello, Rahul

// Requirements:

// parameter should have type
// return type should be mentioned

function greetUser1(userName: string): string {
    return `Hello${userName}`;
}

console.log(greetUser1('Hitaansh'));



//Question 3

// 3. Create a function to add two numbers

// Write a function called add.

// It should accept two numbers and return their sum.

// Example:

// add(10, 20)

// Expected output:

// 30

// Requirements:

// both parameters should be numbers
// return type should be number

function addition(a: number, b: number): number {
    return a + b;
}

console.log(addition(1, 2));


//Question 4

// Create a function to check adult or minor

// Write a function called isAdult.

// It should accept age as a number.

// If age is 18 or more, return true.

// Otherwise, return false.

// Requirements:

// parameter type should be number
// return type should be boolean

function isAdult(age: number): boolean {
    return age >= 18 ? true : false;
}

console.log(isAdult(20));


//Question 5

// Create an array called students.

// It should contain at least 5 student names.

// Then print each student name using a loop.

const students: string[] = ['Hitaansh', 'Shetty', 'Rahul', 'Aman', 'Abhinav'];

for (const student of students) {
    console.log(`${student}`);
}


//Question 6

// Find total marks

// Create an array of marks:

// const marks = [80, 75, 90, 60, 85]

// Write a function called getTotalMarks.

// It should accept an array of numbers and return the total.

// Requirements:

// parameter type should be given
// return type should be given

const marks1: number[] = [80, 75, 90, 60, 85];

function getTotalMarks(marks1: number[]): number {

    let total = 0;
    for (const mark of marks1) {
        total += mark;
    }

    return total;
}

console.log(getTotalMarks(marks1));


//Question 7

// Find average marks

// Write a function called getAverageMarks.

// It should accept an array of numbers and return the average.

// Example:

// getAverageMarks([80, 70, 90])


function getAverageMarks(marks: number[]): number {
    let total1: number = 0;

    for (const mark of marks) {
        total1 += mark;
    }

    const avg: number = total1 / marks.length;

    return avg;

}

console.log(getAverageMarks([80, 70, 90]));



//Question 8

// Find highest mark

// Write a function called getHighestMark.

// It should accept an array of numbers and return the highest number.

// Do not use Math.max in the first attempt.


function getHighestMark(marks: number[]): number {

    if (marks.length === 0) return 0;

    let max: number = 0;

    for (const mark of marks) {
        max = mark > max ? mark : max;
        //max = Math.max(mark, max);
    }

    return max;
}


console.log(getHighestMark([80, 75, 90, 60, 85]));


//Question 9

// Create an array of marks.
// Write a function called getPassedMarks.

// It should return only marks greater than or equal to 40.

// Example:
// getPassedMarks([20, 45, 80, 35, 60])

// Expected output:
// [45, 80, 60]

// Requirements:
// input type: array of number
// return type: array of number


function getPassedMarks(marks: number[]): number[] {

    if (marks.length === 0) return [];

    const passingMarks: number[] = [];

    for (const mark of marks) {
        if (mark >= 40) passingMarks.push(mark);
    }

    return passingMarks;
}

console.log(getPassedMarks([20, 45, 80, 35, 60]));



//Question 10

// Create a function called convertToUppercase.

// It should accept an array of names and return a new array with all names in uppercase.

// Example:

// convertToUppercase(["rahul", "amit", "neha"])

// Expected output:

// ["RAHUL", "AMIT", "NEHA"]


function convertToUpperCase(naams: string[]): string[] {

    if (naams.length === 0) return [];

    const upperCaseNames: string[] = [];

    for (const naam of naams) {
        upperCaseNames.push(naam.toUpperCase());
    }

    return upperCaseNames;
}

console.log(convertToUpperCase(["rahul", "amit", "neha"]));


function convertToUpperCase1(naams: string[]): string[] {

    if (naams.length === 0) return [];

    return naams.map((naam: string) => {
        return naam.toUpperCase();
    })
}

console.log(convertToUpperCase1(["rahul", "amit", "neha"]));


//Question 11

// Write a function called containsJavaScript.

// It should accept a string and return true if the text contains the word JavaScript.

// Example:

// containsJavaScript("I am learning JavaScript")

function containsJavaScript(str: string): boolean {

    const pattern: RegExp = /JavaScript/i;
    return pattern.test(str);

}

console.log(containsJavaScript("I am learning JavaScript"));


//Question 12

// Write a function called containsDigit.

// It should return true if the text contains at least one number.

// Example:

// containsDigit("Order number is A123")

function containsDigit(str: string): boolean {

    return /\d/.test(str);
}

console.log(containsDigit("hit123"));


//Question 13

// Write a function called isOnlyDigits.

// It should return true only if the complete string contains digits only.

// Example:

// isOnlyDigits("12345") // true
// isOnlyDigits("123abc") // false

function isOnlyDigits(str: string): boolean {
    return /^[0-9]+$/.test(str)

}

console.log(isOnlyDigits("12345"));
console.log(isOnlyDigits("12qwe"));



//Question 14

// Check if name contains only letters

// Write a function called isValidName.

// It should return true only if the name contains alphabets only.

// Example:

// isValidName("Rahul") // true
// isValidName("Rahul123") // false

// Now try modifying your regex so that it should also work for space

function isValidName(str: string): boolean {
    return /^[A-Za-z ]+$/.test(str);
}

console.log(isValidName('Hitaa nsh'));
console.log(isValidName('Hitaansh123'));


//Question 15

// Check if mobile number has exactly 10 digits

// Write a function called isValidMobileNumber.

// It should return true only if the input has exactly 10 digits.

function isValidMobileNumber(str: string): boolean {
    return /^[0-9]{7,10}$/.test(str);
}

console.log(isValidMobileNumber('1234567890'));
console.log(isValidMobileNumber('1234567'));


//Question 16

// Check if password has at least 8 characters

// Write a function called isValidPasswordLength.

// It should return true if password length is at least 8 characters.

function isValidPasswordLength(str: string): boolean {
    return /^.{8}$/.test(str);
}

console.log(isValidPasswordLength("Hitaansh"));
console.log(isValidPasswordLength("hello"));


//Question 17

// Find all digits in a string

// Write a function called findDigits.

// It should return all digits from a string.

// findDigits("A1B2C3")

// Output - ["1", "2", "3"]

function findDigits(str: string): string[] | null {

    return str.match(/\d/g);

}

console.log(findDigits("A1B2C3"));


function findDigits1(str: string): string[] | null {

    return str.match(/\d+/g);

}

console.log(findDigits1("A123BC45"));


//Question 18

// Replace all spaces with hyphen

// Write a function called replaceSpacesWithHyphen

// replaceSpacesWithHyphen("hello world from typescript")

// Output - hello-world-from-typescript

function replaceSpacesWithHyphen(str: string): string {
    str = str.replaceAll(/\s/g, '-');

    return str;
}

console.log(replaceSpacesWithHyphen('hello world from typescript'))


//Question 19

// Create an interface for Product

// Create an interface called Product.

// It should have:

// id
// name
// price
// inStock

// Then create 3 product objects using this interface.

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean
}

const product1: Product = {
    id: 1,
    name: 'p1',
    price: 100,
    inStock: true
}

const product2: Product = {
    id: 2,
    name: 'p2',
    price: 200,
    inStock: false
}

const product3: Product = {
    id: 3,
    name: 'p3',
    price: 300,
    inStock: true
}

console.log(product1);
console.log(product2);
console.log(product3);


//Question 20

// Using the Product interface, write a function called getDiscountedPrice.

// It should accept:

// product
// discount percentage

// It should return the final price after discount.

// Example:

// getDiscountedPrice(product, 10)

// If price is 1000, output should be: 900


function getDiscountedPrice(product: Product, discount: number): string {

    const finalPrice = product.price - (product.price * (discount / 100));

    return `If price is ${product.price}, output should be: ${finalPrice}`
}


console.log(getDiscountedPrice(product3, 10));


//Question 21

// Create an array of products.
// Write a function called getAvailableProducts.
// It should return only products where inStock is true.

// id, name, price, inStock

const arrProducts = [];

arrProducts.push(product1);
arrProducts.push(product2);
arrProducts.push(product3);

function availableProduct(arrProducts: Product[]): Product[] {

    const availProduct: Product[] = [];

    arrProducts.forEach(prod => {
        if (prod.inStock === true) availProduct.push(prod);
    })

    return availProduct;
}

console.log(availableProduct(arrProducts));


// function getAvailableProducts(productsArray: Product[]): Product[] {
//     return productsArray.filter((product: Product) => product.inStock)
// }


//Question 22

// Create an interface called Employee.

// It should have:

// id
// name
// department
// salary

// Create an array of employees.

// Write a function called getEmployeesByDepartment.

// It should accept:

// employees array
// department name

// It should return employees from that department.


interface Employee {
    id: number,
    name: string,
    department: string,
    salary: number
}

const employee1: Employee = {
    id: 1,
    name: 'Viper',
    department: 'Controller',
    salary: 5000
}

const employee2: Employee = {
    id: 2,
    name: 'Jett',
    department: 'Dualist',
    salary: 6000
}

const employee3: Employee = {
    id: 3,
    name: 'Brimstone',
    department: 'Controller',
    salary: 5500
}

const employees = [];
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employees);


function getEmployeesByDepartment(employees: Employee[], department: string): Employee[] {

    return employees.filter(
        employee => employee.department === department
    );
}

console.log(getEmployeesByDepartment(employees, "Controller"));

