 
//Primitive Types
//They store a single value and are not objects. Simple and Basic Values.
 
/*
1. number
2. string
3. boolean
4. null
5. undefined
 
Technically, there are two more: Symbol and BigInt.  
*/
 
//1. numbers
//JavaScript has one data type for numbers, that is `number`.
//- Positive numbers
// - Negative numbers
// - Whole numbers
// - Decimal numbers
 
50, 100, 4.5, -100, -777
 
//In JavaScript, we can store a maximum of 16 decimal places.
//The moment we try to cross 16 decimal places, JavaScript loses the precision.
1.0000000000000009 //Output: 1.0000000000000009
 
//The modulus/remainder(%) operator.
//It gives the remainder of a division operation.
 
//Spacings don't matter in JavaScript.
//Exponentiation operator (**) is used to calculate the power of a number.
//2 ** 3 means 2 cube.
//2 ** 2 means 2 square.
 
//NaN and Infinity
//NaN stands for Not a Number. It is a special value that represents an invalid number.
 
//JavaScript is case sensitive, so first N and last N are capitalised.
//-Infinity is a special value that represents negative infinity.
 
//We have something as negative zero(-0)
 
//Variable declaration and assignment
// int number = 10;     Java syntax
 
//Syntax - let/const <variableName> = variableValue
 
//We should never use var. var is considered as legacy/older JS.
 
//Legacy JS - Modern JS
//2015 - ES2015/ES6
 
//Declaration + Assignment
let counter = 10
 
//Counter is the name of the memory location where the value 10 is getting stored.
//But to make it simple, we will call `counter` is actually a variable.
 
//Use the camel casing convention for naming variables.This is basically for readability.
// fullname
// numOfHens           - Lower camel casing
//num_of_hens
 
counter + 1     //10 + 1        counter remains the same. it is still 10.
 
//Assignment operator. Assignment happens from right to left.
counter = counter + 1       //Reassigning. counter = 11 This means update the counter memory location from 10 to 11.
 
//Here we will join + and = together.
counter += 5
 
counter++       //Here we are always incrementing the counter by one.
 
//+ It is called an arithmetic operator. It is also called as binary operator
 
//Unary(1) versus binary(2) operator. Ternary(3)
 
1 + 2 + 3      //Here 1 and 2 are operands.
counter--
 
//const
const pens = 10
pens = 15
 
const PI = 3.1416
const DAYSINWEEK = 7
 
var tripDistance = 10
 
console.log(tripDistance)
 
//Activity#1
 
let wind_speed = 76     //76
wind_speed += 5         //81
wind_speed--            //80
 
console.log(wind_speed)
//What is the minor issue in this code
 
// let num = 100000000000000
 
//We use underscores only with large numbers, only to make my code readable.
let num = 1_000_000_000_0000
console.log(num)
 
let creditCardNumber = 1234_5678_9012_3456
 
//Variable Naming Rules
/*
1. Variable names cannot start with a number.
2. Variable names can only contain letters, numbers, underscore, or dollar sign.
3. We can not use reserved JavaScript keywords as the variable names. For example new, function.
4. Never use an uppercase letter for creating a variable.
5. Make sure the variable names are descriptive.
*/
 
//Let and const were introduced in ES6. They are part of modern JavaScript.
//Where is the older way of declaring variables.
 
//Make sure we are initialising the constants at the time of creation.
const job = 10;

let hit;
console.log(hit);
 
//As per the best practise, always use `const` as the first preferred choice,
//and use `let` only if you are 100% sure that the variable might change sometime in the future.
 
//This is allowed in JavaScript, but it's a very poor way of declaring.
lastName = 'Gupta'
console.log(lastName)
 
 
 
 
 
 
 
 
//Assignment - 1
//Write the code which will swap the two numbers.
//Swap the two numbers without using the temporary variable.
 
//Boolean - Boolean is basically a question that can only be answered in true or false.
 
let isLoggedIn = true
let isGameOver = false
const isWaterWet = true
 
//Booleans are simply true or false values, yes or no, one or zero.
 
//Variables can change their data types in JavaScript. This is called dynamic typing.
//This is the reason we want to use TypeScript, which has stricter rules.
// One of those rules is that variables cannot change their type.
 
let numOfDonuts = 15
numOfDonuts = true      //This is absolutely allowed.
 
console.log(numOfDonuts)
 
//Strings
//It is a group of characters. We wrap them in single quotes or double quotes or backticks.
 
let firstName = 'Zig"gy'         //Single quotes
let msg = "Hey There!! Ho'w are you?"        //"double quotes"
// let str = "this is my string              //This will error out.
 
//The typeof operator gives you the data type of any value.
console.log(typeof 77)
console.log(typeof "87")
 
console.log(firstName)
 
//We can use quotes inside quotes.
 
let firstName1 = 'Rahul'
let lastName1 = 'Sharma'
 
firstName1[0] = 'r'             //Strings are immutable. We can not modify strings, and if you try changing strings, JavaScript will simply ignore it.
console.log(firstName1)       //Give me the character at the zeroth index.
 
//Whenever we perform any operation on a string, a new brand
// new string gets created in the memory.
 
//Garbage Collection -
console.log(firstName1 + lastName1)     //A new string gets created, which is unnamed.
 
let finalString = firstName1 + lastName1
 
//As soon as the JavaScript programme finishes, all the variables are destroyed.
 
//If we try to add one string with a number, this process is called concatenation.
 
console.log("hi" + 1)
 
//String indexing
//Every character in a string has a unique index.
 
//C H   I   C   K   E   N
//0 1   2   3   4   5   6
 
//Properties & methods
//Properties means characteristics.
//Methods mean actions I can perform.
 
//Intellisense
//For properties, never use the parenthesis.
console.log("hello".length)
console.log("hello world".length)       //11 Because space is considered as one character
 
//When you're counting the number of characters, then you're starting from 1 only, not 0.
let mySong = 'Surfing USA'
 
console.log(mySong[100]);
console.log(mySong[10])     //Avoid writing this type of code. Because this is all hard coding
console.log(mySong[mySong.length - 1])
 
//String methods
//We are talking about the actions I can perform on the string.
//string.someMethodName()
 
//1. toUpperCase()
let msg = "you are so grounded"
msg = msg.toUpperCase()         //Create a new string in the memory.
 
console.log(msg.toUpperCase())      //This is a one-time use string because it does not have a reference.
 
//2. trim()
//It removes starting and ending white spaces.
 
let greeting = '   how are you    '
greeting.trim()     //This is an unnamed string which will be garbage collected. It will be automatically deleted.
 
//Method chaining
//We can chain multiple methods together in a single line.
 
let color = "    purple     "
console.log(color.trim().toUpperCase())

//total of 3 strings in this case
 
//indexOf and includes()
 
//includes() -> Tell me whether a particular character is present or not. Give me true or false.
//indexOf() -> Tell me where it is present. Give me the specific position.
 
//-1 This is just JavaScript's way of telling you that, hey, I'm not able to find this string.
"baseball".includes('s')                //true
"baseball".includes('seb')              //true
"baseball".includes('z')                //false
 
"baseball".indexOf('b')                 //Search for the first occurrence/first "b" which is 0.
"baseball".indexOf('ball')              //4
"baseball".indexOf('z')              //-1
 


//Assignment-1

//Approach 1 - Using a temp variable;
let num1 = 10;
let num2 = 5;
let temp;

temp = num1; //assigning the value of num1 to temp variable;
num1 = num2; //assigning the value of num2 to num1 variable;
num2 = temp; //assigning the value of temp to num2 variable;

//Approach 2 - Without using a third variable;
let a = 10;
let b = 5;

a = a + b; //15 as a sum
b = a - b; //15 - 5, a = sum and b = a;
a = a - b; // 15 - 10, a = 5 and b = 10;


//slice() method -
//Give me a portion/part of the cake
//Give me a part or a portion of the string

let str = "This is a super long string"
console.log(str.slice(10))

//Here we are starting from 10 and going all the way till 14, which is 15 minus 1.
console.log(str.slice(10, 15)) //Start from index 10 and go all the way till the last index.

//Starting index is included.
//Ending index is excluded.

let sport = "baseball"
console.log(sport.slice(4))

//replace() - It replaces the first occurrence.
//replace(Replace what, replace with)

//Replace the first baseball with cricket.
console.log('baseball is entertaining'.replace('baseball', 'cricket'))

console.log('ha ha ha'. replace('ha', 'hee'))
console.log('ha ha ha'. replaceAll('ha', 'hee'))

//There is another way to replace all the occurrences, and that is by using


let text = "JavaScript is fun"
console.log(text. includes("script"))
console.log(text. includes("Script"))
console.log(text. includes("Scriptt"))

//False, because JavaScript is case sensitive.
//False, because JavaScript is case sensitive.
//false


//Split
let name = 'Javascript'
let letter = name.split("")
console.log(letter)

//Split breaks the string into an array of substrings.

//Here I am splitting on an empty string(nothing)

console.log("pecan pie" [7])

let park = 'Yellowstone'
const index = park.indexOf("Stone")
console.log(index)

let name = 'Hitaansh Maheshwary';

console.log(name.split('').reverse().join(''))