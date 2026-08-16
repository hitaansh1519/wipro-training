//The constructor is just like a regular old function. There is nothing
// fancy about it except for the fact that the constructor
// is automatically called/invoked whenever we make a new instance or object
// of the class. 

class Triangle {
    //The constructor method will always be called automatically
    //as soon as I create the object of the class. 
    constructor(a, b){
        if(!Number.isFinite(a) || a < 0){
            throw new Error(`Invalid a: ${a}`)  //Object creation fails completely. 
        }
        if(!Number.isFinite(b) || b < 0){
            throw new Error(`Invalid b: ${b}`)
        }        
        this.a = a
        this.b = b
    }

    constructor(a){
       this.a = a 
    }

    //In this case the code will throw an error for having two constructors.

    getArea() {
        return (this.a * this.b) / 2
    }
    
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    //If you want to call one method inside any other method, you
    //have to call it on `this`.
    sayHi(){
        return `${this.getArea()}`
    }
}

const myTri = new Triangle(3, 4)        //this = myTri

// myTri.a = 3
// myTri.b = 4
console.log(myTri)      //Triangle { a: 3, b: 4 }

console.log(myTri.getArea())            //6
console.log(myTri.getHypotenuse())      //5

const secondTri = new Triangle(5, 12)   //this = secondTri

// secondTri.a = 5
// secondTri.b = 12
console.log(secondTri) 
console.log(secondTri.getArea())            
console.log(secondTri.getHypotenuse()) 

console.log(myTri.sayHi())

//Constructor is just a really nice feature in order to
//auto initialize properties.

/*
What can you really do in the constructor??
Whatever you want.

These are the common things we actually do. 
1. We validate data. 
2. Assign the properties. 
*/

const badTri = new Triangle(true, "Hi")

//Constructor functions always return undefined. There is
//no point in trying to return something from a constructor
// because we are never calling the constructor ourselves. 