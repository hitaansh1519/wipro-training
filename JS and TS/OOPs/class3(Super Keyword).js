//super keyword

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

//Super keyword is only applicable in case of inheritance.

//In this class, I want to add a new property called color. 
class ColorTriangle extends Triangle{
    //Either we have to rely on the parent class constructor entirely. 
    //OR We have to re-use the parent class constructor using the super
    //keyword. Otherwise, I will always get an error. 
    constructor(a, b, color){     
        // this.a = a
        // this.b = b

        //Inside a child constructor, you must call super() before using this.
        //this.color = color      //This is not allowed. 
        super(a, b)     //Here I am calling the parent class constructor and passing A and B as parameters. 
        this.color = color
    }

    describe(){
        return `Area is: ${super.getArea()}, Color is: ${this.color}`
    }    
}

const colorTri = new ColorTriangle(3, 4, "red")
console.log(colorTri)
console.log(colorTri.describe())

class ColorMoodTriangle extends ColorTriangle{
    constructor(a, b, color, mood){ 
        super(a, b, color)
        this.mood = mood
    }

    describe(){
        return `Area is: ${this.getArea()}, Color is: ${this.color}`
    }
}

const obj = new ColorMoodTriangle(3, 5, "green", "happy")
console.log(obj)

//Question

// 1. Create a class named Book with a constructor that initializes a title, author,
// and year properties. The title and author should be strings and the year should
// be a number.

// 2. Create a subclass named Ebook that extends Book.

// 3. The Ebook class should have an additional property fileSize which is a number
// and a method download() that returns a string with the title of the ebook and its fileSize.

// 4. Add a getSummary() method to Book class. It should return a string like:
 
// "JavaScript Basics by Piyush Gupta, published in 2025."


// 5. Add a price property to Ebook class. Also, add a method getPrice() that

// returns:

// "The price of 'JavaScript Basics' is $10."

// 6. Create an array of Ebook objects. Loop through the array using forEach() and print out their download() messages.

// 7. Print only the ebooks with fileSize greater than 10 MB.

// 8. Create a new array that contains just the titles of all ebooks.

// 9. Find the ebook with the title "Learning Python" and print its download message.

// 10. Sort the ebooks from smallest to largest file size.
 

class Book{
    constructor(title ,author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} by ${this.author}, published on ${this.year}`;
    }
}

class Ebook extends Book{

    constructor(title, author, year, fileSize, price){
        super(title, author, year)
        this.fileSize = fileSize
        this.price = price
    }

    getPrice(){
        return `The price of ${this.title} is ${this.price}`;
    }

    download(){
        return `The title of the book is ${this.title} and it's file size is ${this.fileSize}MB`;
    }
}

const eBook1 = new Ebook('The Art of Witty Banter', 'Patrik King', 2025, 25, 'Rs 200');
console.log(eBook1.download());


//Part 6

console.log(`Part 6`);

const eBook2 = new Ebook('The Rishest Man in Babyloan', 'xat', 2024, 20, 'Rs 150');
const eBook3 = new Ebook('Who Moved My Cheese', 'qwerty', 2001, 15, 'Rs 200');

const arrOfEbooks = [];
arrOfEbooks.push(eBook1);
arrOfEbooks.push(eBook2);
arrOfEbooks.push(eBook3);

arrOfEbooks.forEach(book => {
    console.log(book.download());
})

//Part 7

console.log(`Part 7`)

arrOfEbooks.forEach(book => {
    if(book.fileSize >= 20){
        console.log(book);
    }
})

//Part 8 

console.log(`Part 8`)

console.log(arrOfEbooks);

//Part 9

console.log(`Part 9`)

arrOfEbooks.forEach(book => {
    if(book.title === "Who Moved My Cheese"){
        console.log(book.download());
    }
})

//Part 10

console.log(`Part 10`);

arrOfEbooks.sort((a, b) => a.fileSize - b.fileSize);

console.log(arrOfEbooks);