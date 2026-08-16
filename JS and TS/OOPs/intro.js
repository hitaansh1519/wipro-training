//Introduction to Object Oriented Programming

//classes

//Right angle triangle. 
function getTriangleArea(a, b) {
    return (a * b) / 2
}

function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(3, 4))
console.log(getTriangleHypotenuse(3, 4))

console.log(getTriangleArea(5, 12))
console.log(getTriangleHypotenuse(5, 12))

//This entire object represents one triangle. 
const myTri = {
    a: 3,
    b: 4,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

//The problem with this approach is it is not repeatable. It has hard coded values

const secondTri = {
    a: 5,
    b: 12,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

console.log(secondTri.getArea())
console.log(secondTri.getHypotenuse())

//We have a much better option that allows us to combine functionality
//with data, and that is Classes.

//Classes

/*
Can I immediately start constructing the building?

Before constructing anything, I first need a plan.
We need classes to combine similar kind of functionalities together.
It is a blue print of an object(not an object). It is like a 'sancha' for an object. 

Example -
How many rooms should the building have? 
How many floors should it contain? 
Where the doors and windows should be? 
Whether there should be a parking or not 
Whether there should be a lift 
Where the kitchen should be 
How much should be the total area? 

Planning. Everything is planned inside the blueprint first. 

Can people live inside the blueprint?
No

Can the blueprint itself become a building?
Never

The blueprint is just a design. It is simply a template or a plan. 
The real building is created later using that blueprint. 

Using one blueprint, I can create multiple buildings.
Building A, Building B, Building C....

All of them follow the same design.

The blueprint is absolutely useless until you do something with it.

In object-oriented programming
Blueprint = class
Real building = Object. 

The real purpose of a class is to create objects. Otherwise, the
class is completely useless. 

A class is basically a design or a template or a pattern.
It defines what properties and behaviours an object should have. 
But the class itself is not usable at all.
To actually do something meaningful with the class, we have to 
create an object.
*/

//Class names are Upper Camel Case. 
class Building {
    constructor(name, floor) {
        this.name = name
        this.floor = floor
    }

    showDetails() {
        console.log(`${this.name} has ${this.floor} floors`)
    }
}

//Finally, the real objects are created using the building class. 
const building1 = new Building("Sky Tower", 10)
const building2 = new Building("Green Residency", 5)

building1.showDetails()
building2.showDetails()

/*
One blueprint 
Multiple Real Buildings. 

One class 
Multiple objects. 
*/

//Classes were introduced in ES6 or ES2015. 
//It is also called a pattern or a recipe. 

class Triangle {
    getArea() {
        return (this.a * this.b) / 2
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

const myTri = new Triangle()
console.log(myTri)      //Triangle {}

console.log(myTri.getArea())            //NaN
console.log(myTri.getHypotenuse())      //NaN

myTri.a = 3
myTri.b = 4
console.log(myTri)      //Triangle { a: 3, b: 4 }

//The value of this keyword is determined by how we are calling the method. 
console.log(myTri.getArea())            //6
console.log(myTri.getHypotenuse())      //5

const secondTri = new Triangle()
//It's a new object, totally separate and distinct from the
//first one, but an empty object initially. 

console.log(secondTri.getArea())            
console.log(secondTri.getHypotenuse())  

secondTri.a = 5
secondTri.b = 12
console.log(secondTri) 
console.log(secondTri.getArea())            
console.log(secondTri.getHypotenuse()) 

console.log(secondTri === myTri)

/*
You simply define a pattern or a blueprint or a recipe,
whatever you may want to call it. That itself doesn't
really do anything useful until you instantiate that
class using the new keyword. 

this keyword Does not refer to the class 
It refers to The particular instance of the class 

Class themes should always be upper camel case.
*/

console.log(typeof myTri)       //object
typeof null     //object because It's an old bug in JavaScript.

//Type of operator is not very useful for object types. 

//instanceof operator
//It simply checks if this object was created from this class?
console.log(myTri instanceof Triangle )//true     //Is myTri instance of Triangle

//instanceof only works with objects. 




//Question 

// Create a class called “BankAccount” which should have 3 properties - balance,
// accountHolder and accountNumber. Balance should be default to 0 if not
// provided.
// It will have 2 methods - deposit and withdraw.

// 1. Create an object but don't provide the balance.

// Deposit some amount say 5000Rs. It should show the message -
// Deposited Rs 5000. New balance: Rs 5000.

// Now check the balance. It should show Rs 5000.

// Now try to withdraw 7000Rs. It should not allow. The message “Insufficient funds”
// should be displayed.
// Now try to withdraw 4000Rs. It should allow. The balance should be updated and
// this message should be displayed - “Withdrawn Rs 4000. New balance: Rs
// 1000”.
// 2. Create a second object and provide an initial balance like 500. Now repeat the
// same steps as above.


// Bonus Challenge
// Add a method:
// transfer(targetAccount, amount)
// Rules:
// - Transfer money from one object to another
// - Sender balance should decrease
// - Receiver balance should increase
// - Both accounts should store transaction history
// Example history:
// Transferred Rs 2000 to Rahul
// Received Rs 2000 from Amit


class BankAccount{

    constructor(accountHolder, accountNumber, balance = 0){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }

    transfer(targetAccount, amount){

        if(amount > this.balance){
            console.log(`Insufficient Funds`);
            return;
        }

        this.balance -= amount;
        targetAccount.balance += amount;

        this.history.push(`Transferred Rs ${amount} to ${targetAccount.accountHolder}`);

        targetAccount.history.push(`Received Rs ${amount} from ${this.accountHolder}`);

        console.log(`Transferred Rs ${amount} to ${targetAccount.accountHolder}, Received Rs ${amount} from ${this.accountHolder}`);
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Deposited Rs: ${amount}, New Balance is Rs: ${this.balance}`);
    }

    withdraw(amount){
        if(amount > this.balance){
            console.log(`Insufficient Funds`);
            return;
        }

        this.balance -= amount;
        console.log(`Withdrawn Rs: ${amount}, New Balance RS: ${this.balance}`);
    }
}

const user1 = new BankAccount('Hitaansh' , 1234);
user1.deposit(5000);
user1.withdraw(7000);
user1.withdraw(4000);

const user2 = new BankAccount('Piyush' , 4321, 500);
user2.deposit(5000);
user2.withdraw(7000);
user2.withdraw(4000);


user1.transfer(user2, 500);