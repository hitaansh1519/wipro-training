//Public and private fields.

/*
Your name
Your account type

ATM PIN 
Your banking password. 
User ID 
Account balance modification logic 

Because if everyone can directly access or change sensitive data,
it will be very dangerous.

Sometimes we want
some properties to be accessible from outside. 
some properties to stay hidden and protected. 

That is where public and private fields come into the picture. 

*/

class User {
    //Public Class Field 
    name = "Piyush"

    constructor(){
        this.name = "Rahul"
    }
}

//Earlier, developers mostly used constructors, but modern
//JavaScript introduced class fields to make code shorter and cleaner. 
// class User {
//     constructor(){
//         this.name = "Piyush"
//     }
// }

const user1 = new User()
console.log(user1)     //{name: "Piyush"}

//name = "Piyush" is NOT a variable
//It is a property that will automatically be added to every
// object created from the class. 

//Public fields are automatically added to every object

class Test {
    age = 25
    hobbies = ['coding', 'Music']
    address = {
        city: 'Jaipur'
    }
}

class BankAccount {
    balance = 0
}

const acc = new BankAccount()

acc.balance = 100000

/*
Sometimes we want some data to be hidden. 
Direct access to be blocked. 
Modifications to happen only through controlled methods. 

That is why we have something called private fields.
*/

class BankAccount {
    //This is a real privacy enforced by JavaScript itself. 
    #balance = 0;

    deposit(amount){
        this.amount += amount;
    }

    showBalance(){
        return this.#balance
    }
}

const acc = new BankAccount()
acc.deposit(500);

console.log(acc.showBalance())

//can't be modified because it is private

//In order to use private fields, we use methods



class BankAccount {
    #balance = 0

    deposit(amount){
        this.#balance += amount
    }

    showBalance(){
        return this.#balance
    }
}

const acc = new BankAccount()
acc.deposit(500)

console.log(acc.showBalance())