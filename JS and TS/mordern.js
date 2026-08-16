// Shorthand object properties

const name = 'Hitaansh'
const age = 22

// const user = {
//     name,
//     age
// }

console.log(user)

//Important rule
//variable name === property name

const city = "Delhi"
const user = {
    location: city
}

/*here we can't use shorthand object propertiy because the name of
variable and the property in the object are different*/


//Computed Properties
//This is just an improvement to object literal syntax
//where we can add a property with a dynamic key.

const role = 'host'
const person = 'Jools Holland'
const role2 = 'Director'
const person2 = 'James Cameron'

// const team ={
//     role: person
// }
// const team = {}

// team[role] =  person,
// team[role2] = person2


const team = {
[role]: person,
[role2]: person2
}

console. log(team)

//Add a key and its value in the copy of an object

const k = 'age';
const v = 22;

let obj = {
    name: 'Hitaansh'
}

function addProp(obj, k, v){

    const strObj = JSON.stringify(obj);
    const copyObj = JSON.parse(strObj);

   

    return {copyObj, [k]: v};
}

console.log(addProp(obj, k ,v))

function addProp(obj , k, v){
    return {
        ...obj,
        [k] : v
    };
}


//Adding method to object

//Any function inside an object or a class is technically called a method
const user = {
    name: "Alex",
    age: 25,
    greet: function(){
        console.log("Hello, Greeting to everyone");
    }
}

//Object not only store data, it also store behaviour
user.greet();


const add = function(x, y){
return x + y
}

const math = {
    multiply: function(x, y){
    return x * y
    },
    divide: function(x, y){
    return x / y
    },
    square: function(x, y) {
    return x * x
    },
    add

}

console.log(math.add(4, 5))


//Using this keyword inside methods
const person = {
    first: 'Piyush',
    last: 'Gupta',
    nickName: 'PSV',
    fullName(){
        console.log("Hello");
    }
}

const name = person.fullName();
name();