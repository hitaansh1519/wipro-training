//Question 1

const isRaining = true;
const isHoliday = true;

console.log(typeof isRaining);
console.log(typeof isHoliday);


//Question 2

let value = 10;
console.log(typeof value);

value = 'Hitaansh';
console.log(typeof value);


//Question 3

const firstName = 'Hitaansh';
const lastName = 'Maheshwary';
console.log(firstName + lastName);

console.log(`${firstName} ${lastName}`);

console.log(firstName + ' ' + lastName);


//Question 4

let word = "JavaScript";
console.log(word[0]);
console.log(word[word.length-1]);
console.log(word[0] = 'K'); // Doesn't happen because strings are immutable.


//Question 5

console.log(' " " ');
console.log(" ' ' ");
console.log(' \` ');


//Question 6

let color = " blue ";

//part 1
console.log(color.length);

//part 2 & 3
color = color.trim().toUpperCase()

//part 4
console.log(color);


//Question 7
let song = "Never gonna give you up!";

//part1
console.log(song.indexOf('give'));

//part2
console.log(song.indexOf('z'));


//Question 8
let sport = "Cricket";

console.log(sport.slice(2));

console.log(sport.slice(1, 4));

console.log(sport.slice(0, sport.length));


//Question 9
let msg = "I love cats. Cats are amazing";

console.log(msg.replace('cats', 'Dogs'));


//Question 10
const str = "I love JavaScript"

//part1
console.log(str.includes('Java'));

//part2
console.log(str.includes('Java',5, str.length));


//Question 11
let fruits = "apple,banana,grapes";

//part1
console.log(fruits.split(','));

//part2
console.log(fruits.split(''));

//part3
console.log(fruits.split('an'));


//Quesstion 12
console.log(`Hello John
Welcome to JavaScript class.
Have fun coding!`);


//Question 13
let lang = "Javascript";
let year = 1995;

console.log(`${lang} was created in ${1995}!`);