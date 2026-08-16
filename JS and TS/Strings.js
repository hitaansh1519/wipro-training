//String template literals
//Using template literals, we can write strings in a more natural way.
const firstName = "Hitaansh"
const job = 'Trainee'
const birthYear = 2003
const year = 2026

//Java style
const str1 = "I'm "+ firstName + ', a '+ (year - birthYear) + ' years old ' + job + '!'
console.log(str1)

const str2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(str2)

//4 bytes of memory is allocated

let username = 'hitaansh22'
console.log(`Welcome back, ${username}`)

//TODO - Find out what we can do with this string so that I can write a multi-line string.
console.log(`String with multiple lines`)

//We can write multi-line strings using backticks.
console.log(`String with
multiple
lines`)

//int number = 4
//In JavaScript, you cannot know exactly how much memory
//a variable is taking because of dynamic typing.

//null and undefined
//null is the intentional absence of any value. It is explicit.
//I have to assign null explicitly.

//undefined - Variables that do not have an initial value are automatically undefined.
//It is implicit.

let loggedInUser = null

let name1
console. log(name1)

//I'm explicitly assigning null.


//Random number generation

const PI = 3.1416
console. log(Math.PI)

console. log(Math.round(4.9)) //5
console. log(Math.round(4.3)) //4

//Floor will chop the decimal part.
console. log(Math.floor(4.3)) //4
console. log(Math.floor(4.9)) //4

console.log(Math.floor(Math.random()*19+1));










//String template literals
//Using template literals, we can write strings in a more natural way.
const firstName = "Piyush"
const job = 'Trainer'
const birthYear = 1991
const year = 2030
 
//Java style
const str1 = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(str1)
 
const str2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(str2)
 
 
//Hi, my name is Piyush Gupta.
//Hi + my + name + is + Piyush Gupta
 
`I am a Template Literal`
 
let username = 'piyush31'
console.log(`Welcome back, ${username}`)
 
//TODO - Find out what we can do with this string so that I can write a multi-line string.
console.log('String with multiple lines')
 
//We can write multi-line strings using backticks.
console.log(`String with
    multiple
    lines`)
 
//int number = 4    //4 bytes of memory is allocated
//In JavaScript, you cannot know exactly how much memory
//a variable is taking because of dynamic typing.
 
//null and undefined
//null is the intentional absence of any value. It is explicit.
//I have to assign null explicitly.
 
//undefined - Variables that do not have an initial value are automatically undefined.
//It is implicit.
 
let loggedInUser = null     //I'm explicitly assigning null.
 
let name1
console.log(name1)
 
//Random number generation
 
const PI = 3.1416
console.log(Math.PI)
 
//Round will round the number to the nearest whole number.
console.log(Math.round(4.9))        //5
console.log(Math.round(4.3))
 
//Floor will chop the decimal part.
console.log(Math.floor(4.3))        //4
console.log(Math.floor(4.9))        //4
 
console.log(Math.floor(4.5))        //4
 
//The abs method converts a negative number to a positive number.
console.log(Math.abs(-223))        //223
 
//This is Read as 4 cube
console.log(Math.pow(4, 3))        //4 * 4 * 4
console.log(4 ** 3)
 
//Math.random() Always gives you an output between 0 and 1.
// You might get zero in rare cases, but you will never get one.
// So the maximum possible value of Math.random is 0.9999.
 
Math.floor(Math.random() * 10) + 1