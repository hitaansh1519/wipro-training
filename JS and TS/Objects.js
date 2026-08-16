
let str = "stressed"
str = str.split("").reverse().join("");

console.log(str);

let word = "stressed"

let reverse = ''

for(let i = word.length-1; i >= 0; i--){
    reverse = reverse + word[i];
    console.log(reverse);
}



let target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
let counter = 0;

while (target !== guess) {
    console.log(`Wrong guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
    counter++;
}

console.log(`Correct! Target: ${target}, Guess: ${guess}, Count: ${counter}`);

for(const char of 'hello'.split('').reverse().join('')){
    console. log(char.toUpperCase())
}

const palette = {
red: '#red',
yellow: '#yellow',
blue: '#blue'
}
//You can not use a for of loop directly on an object.
//TypeError: palette is not iterable
// for(const x of palette){

//for .. in loop Is designed specifically for objects

for(const key in palette) {
console. log(key, palette[key])

}

for(;;){
    console.log("hello");
}


greet ()

//Function parameters are in the definition.
//Function arguments are when I'm calling the function.
function greet(nickName) {
console.log(`Hi ${nickName}`)
}

//Argument is the input or the value that I am passing when calling
greet('Piyush') //Here nickName inside function would be 'Piyush'
//Here nickName inside function would be undefined

greet ('Piyush', 'hello')