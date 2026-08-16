/*

Comparison operators
>
>=
<
<=
== Loose Equality
=== Strict equality
!= Loose not equality.
!== Strict not equality

*/

console. log(10 != '10')
console. log(10 !== '10')


//There are two versions of equality: loose equality and strict equality.

/*
1. Loose equality checks for equality of value, not the equality of type.
2. It coerces both the values to the same type and then it tries to compare them,
which can lead to unexpected results.

coerce = convert

*/

4 == '4'
4 == '4'

1 === 2

console. log(10 != '10')
console.log(10 !== '10')

//Here we are comparing just the values, not the data types. true
//Here we are comparing both the values as well as the data type. AND. false

//Is one strictly equal to two or not? false

//Just the values. Is 10 not equal to 10?
//Both the value as well as data type. Is 10 strictly not equal to '10'? True



let x = 7

//Readability is critical.
x === 7 || (x === 3 && x > 10)

(x === 7 || x == 3) && x > 10

//Short circuiting
//It does happen for both && and ||.

//AND - && We are looking for both trues
//OR - || We are looking for atleast one true

//OR - If the left side is true, JavaScript will never execute the right-hand side

//JavaScript starts evaluating from left to right.
let y = 7
console. log(y === 7 || y === 3)

//AND - If the left side is false, JavaScript will never execute the right-hand side
console. log(y === 6 && y === 3)

console. log(y === 7 && y === 3)

//Since we got one true on the left, JavaScript will not execute y === 3

//Since we got one false on the left, no point in executing right side



















/*
Comparison operators
>
<
>=
<=
==              Loose Equality(Never use this.)
===             Strict equality
!=              Lose not equality. (Never use this.)
!==             Strict not equality
 
All these comparison operators return a boolean value.
*/
 
//Comparing values is very important in making decisions.
 
console.log("hello".length >= "hello!".length)      //false
 
//There are two versions of equality: loose equality and strict equality.
 
/*
1. Loose equality checks for equality of value, not the equality of type.
2. It coerces both the values to the same type and then it tries to compare them,
which can lead to unexpected results.
 
coerce = convert
 
*/
 
4 == '4'        //Here we are comparing just the values, not the data types.  true
4 === '4'       //Here we are comparing both the values as well as the data type. AND. false
 
1 === 2         //Is one strictly equal to two or not? false
 
console.log(10 != '10')     //Just the values. Is 10 not equal to 10?   False
console.log(10 !== '10')    //Both the value as well as data type.  Is 10 strictly not equal to '10'? True
 
//Truthy and Falsy Values
/*
All values in JavaScript are truthy except for these 6 false values.
0
false
""  Empty string
null
undefined
NaN
 
Everything else is a truthy value.
*/
 
//Decision making in JavaScript.
 
//Is today May1? Yes -> So i dont have to attend the meeting.
//Otherwise I will have to attend the JS classes
 
let mystery = 0
 
//Inside if, we always expect a Boolean value, a Boolean condition. true/false
if(mystery){      //JS will automatically convert zero to a boolean value. 0 ->false    . Number(0)
    console.log('TRUTHY')
} else {
    console.log('FALSY')
}
 
let loggedInUser = ''
 
if(loggedInUser){      
    console.log('TRUTHY')
} else {
    console.log('FALSY')
}
 
//Logical operators
//AND, OR and NOT
 
//AND - &&
//OR - ||
//NOT - !
 
// AND -> Both sides(Left + Right) must be true in order for the whole thing to be true.
//Here we are looking for both the true
 
console.log(1 <= 4 && 'a' === 'a')      //True.
 
9 > 10 && 9 >= 9            //false
 
'abc'.length === 3 && 1 + 1 === 4       //false
 
/*
true && true -> true
true && false ->false
false && true ->false
false && false ->false
*/
 
// OR -> Either of the sides(Left OR Right) must be true in order for the whole thing to be true.
//Here we are looking for at least one true
 
console.log(1 <= 4 || 'a' === 'a')      //True.
 
9 > 10 || 9 >= 9            //true
 
'abc'.length === 3 || 1 + 1 === 4       //true
 
/*
true || true -> true
true || false -> true
false || true -> true
false || false -> false
*/
 
//Logical NOT operator
//!expression returns true if the expression is false.
//!expression returns false if the expression is true.
 
!null               // -> !false -> true
!(0 === 0)          //  !true   -> false
!(3 <= 4)           //  !true   -> false
 
//NOT operates on a single expression.
 
!!5     //!5    -> !true -> false. !false -> true
 
//Operator precedence(Operator Priority)
//NOT has the highest priority amongst these three.
//And has a higher priority than OR
//But we can alter this using parentheses
 
//BODMAS
//PEMDAS
 
let x = 7
 
//Readability is critical.
x === 7 || (x === 3 && x > 10)
 
(x === 7 || x === 3) && x > 10
 
//Short circuiting
//It does happen for both && and ||.
 
//AND - &&   We are looking for both trues
//OR - ||   We are looking for atleast one true
 
//OR - If the left side is true, JavaScript will never execute the right-hand side
 
//JavaScript starts evaluating from left to right.
let y = 7
console.log(y === 7 || y === 3)     //Since we got one true on the left, JavaScript will not execute y === 3
 
//AND - If the left side is false, JavaScript will never execute the right-hand side
console.log(y === 6 && y === 3)     //Since we got one false on the left, no point in executing right side
 
console.log(y === 7 && y === 3)    
 
//Ternary operator
//It is called the ternary operator as it has three pieces.
//Syntax -> condition ? expIfTrue : expIfFalse
 
let num = 2
// if(num === 7){
//     console.log('Lucky')
// } else {
//     console.log('Bad')
// }
 
// num === 7?console.log('Lucky'):console.log('Bad')
 
num === 7 ? console.log('Lucky') : console.log('Bad')
 
//We can use the ternary operator to assign a value to a variable.
 
let status = 'offline'
 
let color
// if(status === 'offline'){
//     color = 'red'
// } else {
//     color = 'green'
// }
 
// console.log(color)
 
//Whenever you see something getting repeated, that should be a red flag in your head.
 
//condition ? expIfTrue : expIfFalse
// status === 'offline' ? color = 'red' : color = 'green'
 
//Assignment happens from right to left.
color = status === 'offline' ? 'red' : 'green'
 
console.log(color)
 
//On a Mac machine, press Command + Control + Space.
//On a Windows machine, press Windows key + dot.