//Question 1

class Animal {
    getType(): string {
        return `Animal`;
    }
}

class Lion extends Animal {

    getType(): string {
        return `Lion`;
    }
}

function zoo(input: string) {

    if (input === 'Animal') {
        const output: Animal = new Animal;
        console.log(output.getType());
    }

    else if (input === 'Lion') {
        const output: Lion = new Lion;
        console.log(output.getType());
    }
}

zoo('Lion');


//Question 2

class Car {
    static count: number = 0;

    getCount(cars: number) {
        Car.count += cars;
        console.log(`The total number of cars parked: ${Car.count}`);
    }
}

const numberOfCars = new Car;

numberOfCars.getCount(1);
numberOfCars.getCount(4);
numberOfCars.getCount(2);


//Question 3

class Library {
    #books: number = 0;

    addBook(amount: number) {
        if (amount > 0) {
            this.#books += amount;
        }
    }

    borrowBook(amount: number) {
        if (this.#books >= amount) {
            this.#books -= amount;
        }
    }

    getBooks(): string {
        return `Total books available: ${this.#books}`;
    }
}

const user = new Library;
user.addBook(10);

user.borrowBook(3);

console.log(user.getBooks());

user.borrowBook(9);

console.log(user.getBooks());


//Question 4

class Device {

    operate(): string {
        return `Generic Device`;
    }
}

class Light extends Device {

    operate(): string {
        return `Light On`;
    }
}

class Fan extends Device {

    operate(): string {
        return `Fan Spinning`;
    }
}

function smartHome(input: string) {

    if (input === 'Light') {
        const obj: Light = new Light;
        console.log(obj.operate());
    }

    else if (input === 'Fan') {
        const obj: Fan = new Fan;
        console.log(obj.operate());
    }

    else {
        const obj: Device = new Device;
        console.log(obj.operate());
    }
}

smartHome('Light');
smartHome('Fan');
smartHome('Light');


//Question 5

class Order {
    static count = 0;

    constructor(order: number) {
        Order.count += order;
    }

    getOrder(): number {
        return Order.count
    }
}

const order1: Order = new Order(3);
console.log(order1.getOrder());

const order2: Order = new Order(4);
console.log(order1.getOrder());


//Question 6

class Wallet {
    #amount = 0;

    addMoney(x: number) {
        if (x > 0) {
            this.#amount += x;
        }
    }

    spendMoney(x: number) {
        if (x > 0 && x <= this.#amount) {
            this.#amount -= x;
        }
    }

    getAmount(): number {
        return this.#amount;
    }
}

const myWallet: Wallet = new Wallet;
myWallet.addMoney(100);
myWallet.spendMoney(40);
console.log(myWallet.getAmount());
myWallet.spendMoney(100);


//Question 7

class Vehicle {

    move(): string {
        return `Moving`;
    }
}

class Car1 extends Vehicle {

    move(): string {
        return `Car Driving`;
    }
}

class Bike1 extends Vehicle {

    move(): string {
        return `Bike Riding`;
    }
}

function vehicleHierarcy(vehicle: string): string {

    if (vehicle === 'Car') {
        const obj1: Car1 = new Car1;
        return obj1.move();
    }
    else if (vehicle === 'Bike') {
        const obj1: Bike1 = new Bike1;
        return obj1.move();
    } else {
        const obj1: Vehicle = new Vehicle;
        return obj1.move();
    }
}

console.log(vehicleHierarcy('Car'));
console.log(vehicleHierarcy('Bike'));


//Question 8

class Ticket {
    static count: number = 0;

    constructor(ticket: number) {
        Ticket.count += ticket;
    }

    getCount(): number {
        return Ticket.count;
    }
}

const customer1: Ticket = new Ticket(2);
console.log(customer1.getCount());
const customer2: Ticket = new Ticket(1);
console.log(customer2.getCount());
const customer3: Ticket = new Ticket(4);
console.log(customer3.getCount());