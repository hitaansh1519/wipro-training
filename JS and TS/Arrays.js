//Arrays
 
//I want to store marks of students.
 
let marks1 = 90
let marks2 = 85
let marks3 = 82
let marks4 = 94
let marks5 = 65
//...
//...
//...
//...
 
/*
With our current approach, it is very hard to write,
very hard to manage,
very hard to read,
and very easy to make mistakes.
 
Loops work best when the data is stored together.
 
Arrays
Instead of creating so many variables, we can store
multiple values in one single variable/container. That
variable is called "Array"
*/
 
let marks = [90, 85, 82, 94, 65]
 
//Looping is very easy.
 
//When we have some relationship in the data, then we will use array
 
let students = []       //Empty Array
 
//There is another syntax of creating an array called Array Literal Syntax.
//new Array(1, 2, 3, 4, 5)
 
//Both strings and arrays are very much alike.
//1. Both the strings and arrays are indexed.
//2. Both the strings and arrays have the length property.
 
//Differences
//Strings are immutable while arrays are mutable.
 
let shoppingList = ['cheese', 'milk', 'eggs']
console.log(shoppingList.length)
 
console.log(shoppingList[0])
console.log(shoppingList[1])
console.log(shoppingList[2])        //2 is a hard-coded value
console.log(shoppingList[shoppingList.length - 1])         //
 
//If you try accessing an array index that does not exist,
//JavaScript gives you undefined.
console.log(shoppingList[3])        //undefined
 
//Traditional way of finding the last index - shoppingList[shoppingList.length - 1]
//Modern JavaScript provides a much better method called at()
 
console.log(shoppingList.at(0))
console.log(shoppingList.at(-1))
console.log(shoppingList.at(-2))
console.log(shoppingList.at(-3))
 
//-1 means the last element
//-2 Means the second last element
 
//Negative indexing does not work with the square bracket.
//shoppingList[-1] gives undefined.
 
//Use the negative indexing when you want the last item or
// you want the second last item. You do not know the array length.
 
let colors = ['rad', 'orange', 'green', 'yellow']
 
colors[0] = 'red'
colors[4] = 'blue'      //Here I'm adding a new index. 4
 
console.log(colors)
 
//push() - It is for adding one or more elements on the RHS/end of the array.
// It also returns the updated length of the array.
 
//pop() - It is for removing exactly one element from the RHS/end of the array.
//It returns the removed element.
 
//unshift() - It is for adding one or more elements on the LHS/beginning of the array.
// It also returns the updated length of the array.
 
//shift() - It is for removing exactly one element from the LHS/beginning of the array.
//It returns the removed element.
 
//In the case of unshift and shift, we are shifting the array indexing,
//which is a costly operation.
 
let colors1 = ['red', 'orange', 'green', 'yellow']
 
console.log(colors1.push('white'))           //['red', 'orange', 'green', 'yellow', 'white']
colors1.push('magenta', 'cyan')     //['red', 'orange', 'green', 'yellow', 'white', 'magenta', 'cyan']
console.log(colors1.shift())                     //['orange', 'green', 'yellow', 'white', 'magenta', 'cyan']
colors1.pop()
colors1.pop()                       //['orange', 'green', 'yellow', 'white']
 
colors1.unshift('pink')
colors1.unshift('black')
 
colors1.unshift('pink', 'black')    //['pink', 'black', 'orange', 'green', 'yellow', 'white']
colors1.unshift('violet')           //['violet', 'pink', 'black', 'orange', 'green', 'yellow', 'white']
colors1.shift()                     //['pink', 'black', 'orange', 'green', 'yellow', 'white']
 
console.log(colors1)
 
//More array methods
 
//1. concat() - This is used for array merging. TODO
 
//includes() and indexOf()
colors.includes('green')        //true
colors.includes('gree')        //false. includes() look for an exact match.
colors.includes('magenta')        //false
 
//reverse() - It reverses the array. It does not create a new array.
// It simply reverses the same array in place.
 
let array1 = ['one', 'two', 'three']
 
array1.reverse()
console.log(array1)         //[ 'three', 'two', 'one' ]
 
//join() - It joins all the array elements together and makes one string.
//The default separator is a comma if we have not given our own separator.  
 
console.log("Fire,Air,Water".split(','))
 
let elements = [ 'Fire', 'Air', 'Water' ]
console.log(elements.join())        //Comma is the default separator.
console.log(elements.join(''))        //Do not use a comma. Use an empty string as my separator.
console.log(elements.join('-'))        //Do not use a comma. Use an empty string as my separator.
 
//slice() - It creates a copy of an array.
elements.slice(1)       //Create a copy from the first index. ['Air', 'Water' ]
 
//splice() - It is for modifying an array from somewhere in the middle.
//It modifies the same array in place.
 
let animals = ['Shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
 
//splice(startingIndex, deleteCount, itemsToInsert)
 
//Req#1 - At the index 1, I want to insert just 'octopus'.
 
animals.splice(1, 0, 'octopus')
console.log(animals)
 
//['Shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']
//Req2 - At the index 5, delete two items.
animals.splice(5, 2)
console.log(animals)            //['Shark', 'octopus', 'salmon', 'whale', 'bear']
 
//Req3 - At the index 3, delete two items and replace them with 'orca' and 'grizzly'.
animals.splice(3, 2, 'orca', 'grizzly')
console.log(animals)            //['Shark', 'octopus', 'salmon', 'orca', 'grizzly']
 
//sort() - It sorts the same array in place.
 
let months = ['March', 'Jan', "Feb", 'Dec']
months.sort()       //It sorts all the array elements in ascending order.
console.log(months)
 
//In the case of numbers, all the numbers are converted to strings
//first and then they are sorted.
let array1 = [1, 30, 4, 21, 10000]
array1.sort()
console.log(array1)     //[ 1, 10000, 21, 30, 4 ]


//Introduction to reference types
//Primitives are simple and basic values, not objects, not arrays.

// let fruit = "orange"
// let color = fruit

// //In the case of primitives, we are comparing the actual values. We are not comparing the memory addresses.
// console. log(fruit === color) //true

// //Take the value of fruit memory location, copy it and put it into color
// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]

// console. log(arr1 === arr2)

// let arr3 = arr1;
// console. log(arr3 === arr1)


// const arr4 = [1, 2, 3]

// arr4.push(4)
// arr4.unshift(0)
// console.log(arr4)

// arr4 = [4, 5, 6]

// console.log(arr4)

// //let -> Pointer change is allowed.
// //const -> Pointer change is NOT allowed.

// //This is a fixed pointer because of const

let fruit = "orange"
let color = fruit

console.log(fruit === color);

fruit = "watermelon";

console.log(fruit === color);

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);

let arr3 = arr1;

console.log(arr1 == arr3);

arr3.push(4);
console.log(arr1);

const days = 7;
days = 8;

const arr4 = [1, 2, 3];

arr4.push(4);
arr1.unshift(0);
console.log(arr4);

arr4 = [4, 5, 6]

// Que - What is the output of following code
let originalArray = [1, 2, 3];
let copiedArray = originalArray.slice();
copiedArray.push(4);
console. log(originalArray);
console. log(copiedArray);