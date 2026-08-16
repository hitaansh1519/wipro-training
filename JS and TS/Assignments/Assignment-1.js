//Question 1:

//Part 1
let score = 50;
score += 10;
console.log(`The score is: ${score}`);

//Part 2
let num1 = 10;
num1 = (num1 * 2) - 5;
console.log(`The result is ${num1}`);

//Question 2:

let balance = 1000;
balance -= 250;
balance += 500;
balance = balance + (balance/100)*10; //or balance *= 1.10;
console.log(`The final balance is ${balance}`);

//Question 3:

let x = "5";
let y = 2;
console.log(x + y);
console.log(x * y);

/*In this the value of x is of STRING type and the value of y is of NUMBER type
  So in the first senario the '+' operator acts as a concatination operator and 
  the value of y is typecasted to STRING type.
  
  Whereas in the second senario we have a multiple operator and it just multiply
  both the values after typecasting the numaric value.
  */

//Question 4

//Given code
const total = 100 // Here the variable is of constant type.
total += 50 // And here we are trying to update that constant variable value.

//Correct code
let total = 100 
total += 50


//Question 5

console.log(typeof 100);   //number
console.log(typeof "100"); //string
console.log(typeof true);  //boolean


//Question 6

const result = "hello" * 5;
console.log(typeof result); // The result is NaN and it's type is Number.

//Question 7

console.log(typeof NaN); // The type of NaN is a number;

//Question 8

let num = "50";
num = Number(num);
num += 10;
console.log(num);

// Question 9

console.log("5" - 2); // In this we consider '-' as a subtraction operator and typecast the number operant to a STRING.
console.log("5" + 2); //Whereas in this senario we treat the addition operator as CONCATINATION operator and typecast the number value to STRING and concatinate both the values;

// Question 10

console.log(typeof "abc" * 2);
console.log(typeof "10" / 2);
console.log(typeof (true + 1));

// Question 11

const str = "JavaScript";

//first character
console.log(str[0]);

//last character
console.log(str[str.length - 1]);


//Question 12

let msg = "Automation";

console.log(msg.slice(0, 4))
console.log(msg.slice(6));

//Question 13

let str = "JavaScript";

console.log(str.at(-1));


//Question 14

const text = "I love javascript";

console.log(text.includes('love'));


//Question 15

const text = "javascript";
console.log(text.indexOf('script'));

//Question 16

const word = 'hello world';
console.log(word.slice(6));


//Question 17

const text = "cat is cute";
console.log(text.replace('cat', 'dog'));

//Question 18

const email = ' TEST@GMAIL.COM ';
console.log(email.trim().toLowerCase());


//Question 19

const product = ' iphone-15-pro '

const result = product.trim().replaceAll('-', ' ').toUpperCase();

console.log(result);



//CHECK OUT QUESTION 11 AND 13 ONCE AGAIN