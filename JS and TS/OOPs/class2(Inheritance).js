//inheritance

class Triangle {
    constructor(a, b){     
        this.a = a
        this.b = b
    }

    getArea() {
        return (this.a * this.b) / 2
    }
    
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
    describe(){
        return `I am a triangle with an area of ${this.getArea()}`
    }
}

//Parent-child relationship.
//Triangle is my parent class and ShyTriangle is my child class. 
//ShyTriangle is the child/sub class, and Triangle is the parent/super class.

//Now the child class has access to the parent class constructor and all its methods. 
class ShyTriangle extends Triangle{
    describe(){
        return `(runs and hides)`
    }
}

const regularTri = new Triangle(3, 4)

//Firstly, JavaScript is searching for a constructor in the
//Child class, and if it is not able to find it, then it goes up
//the parent chain. 
const shyTri = new ShyTriangle(3, 4)

console.log(regularTri)
console.log(shyTri)
console.log(shyTri.getArea())
console.log(shyTri.getHypotenuse())

//Refresh the VS Code using Ctrl Shift P or Command Shift P. 
console.log(regularTri.describe())

//Method Overloading vs Overriding 
//JavaScript does not support true method overloading like Java or C++.

//Method Overriding
//The child class is saying, "I know my parent has a describe
// method already, but I want my own version of it."

//Method overloading
/*

This is Java's method overloading. 
calculate()
calculate(a)
calculate(a, b)

JavaScript does not support true method overloading.
If we create multiple methods with the same name, the last one
replaces the previous one.

Method overriding means the child class replaces the parent
class method with its own version.

Overloading is in some language(but in other languages)
Overriding is in parent-child 
*/