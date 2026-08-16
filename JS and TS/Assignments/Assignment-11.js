//Question 1

const users = [
{ id: 1, name: "Alice", age: 22, isActive: true },
{ id: 2, name: "Bob", age: 17, isActive: false },
{ id: 3, name: "Charlie", age: 30, isActive: true },
{ id: 4, name: "David", age: 16, isActive: false },
{ id: 5, name: "Eve", age: 28, isActive: true }
];

//Task1
users.forEach(data => {
    console.log(`The name is ${data.name} and the age of the user is ${data.age}`);
})

//Task2
const onlyName = users.map(data => data.name);

console.log(onlyName);

//Task3
const Adults = users.filter(data => data.age >= 18 ? data.name : '')

console.log(Adults);

//Task4
const inActiveUser = users.find(data => data.isActive === false ? data : '');

console.log(inActiveUser);

//Task 5
const underAge = users.find(data => data.age < 18);

console.log(underAge || 'No underage users');


//Task 6
const allActive = users.every(data => data.isActive)

console.log(allActive);


//Task7
const avgAge = (users.reduce((age, cur) => age += cur.age,0))/users.length
console.log(`The average age of all the users is ${avgAge}`)

//Task8
const activeUserArray = users.reduce((arr, pointer) => {

    if(pointer.isActive === true){
        arr.push({name: pointer.name, age: pointer.age});
    }

    return arr;
},[])

console.log(activeUserArray);