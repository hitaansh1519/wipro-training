//forEach, map, filter

//1. forEach()
//forEach is a method in JavaScript that internally uses a loop to iterate over elements.
//Accepts a callback function. Calls the callback once per element in the array
//We dont need return keyword
//n refers to each element of the array

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

//for, for .. of, while


const books = [
   {
       title: 'Five Point Someone',
       author: 'Chetan Bhagat',
       rating: 4.2
   },
   {
       title: 'Time Money Freedom',
       author: 'Ray Milton',
       rating: 4.5
   },
   {
       title: 'You Are SuperNatural',
       author: 'Joe Dispenza',
       rating: 4.6
   },
];

books.forEach( book => console.log(book.author))




const texts = ["rofl", "lol", "omg", "ttyl"];

const output = texts.map(text => text.toUpperCase());

console.log(output);

 
//['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even']

const num1 = [1,2,3,4,5,6,7,8];
 
let arr= num1.map(num => (num%2 === 1 ? "Odd" : "Even"));

console.log(arr);




const num1 = [1, 2, 3, 4, 5, 6, 7, 8];
 
num1.map(num => {
  if (num % 2 === 0) {
    console.log(num); // 2, 4, 6, 8
  }
});


const books = [
    {
        title: 'Five Point Someone',
        author: 'Chetan Bhagat',
        rating: 4.2
    },
    {
        title: 'Time Money Freedom',
        author: 'Ray Milton',
        rating: 4.5
    },
    {
        title: 'You Are SuperNatural',
        author: 'Joe Dispenza',
        rating: 4.6
    },
]
 
const highRating = books.filter(book => book.author.includes('Chetan')).map(book => book.title)

console.log(highRating);


const arr = books.filter(book => (book.rating >= 4.5 ? book.title : ''));

console.log(arr);


const nums3 = [1, 2, 3, 4, 5];

let max = nums3[0];

const maxi = nums3.reduce((accu, curVal) => {
    return max = Math.max(accu, curVal);
})

console.log(maxi);


//Assignment 1 - We have an array of votes. We want to use reduce() method to return an
//object that has count of y and n.
 
//We will check if the object has the key or not. First time, it wont be
//present. So we will add y:1 inside the object. Next time onwards, we will
//again check if the object has the key. If it is present, simply increment
//its value.

const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'n', 'y', 'y'];


const result = votes.reduce((acc, vote) => {
    if(acc[vote]) acc[vote]++;

    else acc[vote] = 1;

    return acc
}, {})

console.log(result);


const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'n', 'y', 'y'];

const result = votes.reduce((total, pointer) => {
    if(total[pointer]) total[pointer]++;

    else total[pointer] = 1;

    return total;
}, {})

console.log(result);





//Another example - We want to group the books into another object and we want
//to group them by rating. Example: Inside the final object, we will have keys
//like 2, 3 and so on. The value of these
//keys will be an array which can have one or more objects.
//All the 2 star rating books will go inside 2 key and so on.
// {
//     2: [




//     ],
//     3: [




//     ]
// }



const books1 = [
   {
       title: 'Good Omens',
       authors: ['Terry Pratchett', 'Neil Gaiman'],
       rating: 4.25,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'Changing My Mind',
       authors: ['Zadie Smith'],
       rating: 3.83,
       genres: ['nonfiction', 'essays']
   },
   {
       title: 'Bone: The Complete Edition',
       authors: ['Jeff Smith'],
       rating: 4.42,
       genres: ['fiction', 'graphic novel', 'fantasy']
   },
   {
       title: 'American Gods',
       authors: ['Neil Gaiman'],
       rating: 4.11,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'A Gentleman in Moscow',
       authors: ['Amor Towles'],
       rating: 4.36,
       genres: ['fiction', 'historical fiction']
   },
   {
       title: 'The Name of the Wind',
       authors: ['Patrick Rothfuss'],
       rating: 4.54,
       genres: ['fiction', 'fantasy']
   },
   {
       title: 'The Overstory',
       authors: ['Richard Powers'],
       rating: 4.19,
       genres: ['fiction', 'short stories']
   },
   {
       title: 'A Truly Horrible Book',
       authors: ['Xavier Time'],
       rating: 2.18,
       genres: ['fiction', 'garbage']
   },
   {
       title: 'The Way of Kings',
       authors: ['Brandon Sanderson'],
       rating: 4.65,
       genres: ['fantasy', 'epic']
   },
   {
       title: 'Lord of the flies',
       authors: ['William Golding'],
       rating: 3.67,
       genres: ['fiction']
   }
]

const result = books1.reduce((rate, pointer) => {

    if(rate[Math.floor(pointer.rating)]){
        rate[Math.floor(pointer.rating)].push(pointer);
    }  
    else{
        rate[Math.floor(pointer.rating)] = [pointer];
    } 

    return rate
}, {})

console.log(result);
console.log(parse("hita"))
//Below is the Output -
// {
//     '2': [
//       {
//         title: 'A Truly Horrible Book',
//         authors: [Array],
//         rating: 2.18,
//         genres: [Array]
//       }
//     ],
//     '3': [
//       {
//         title: 'Changing My Mind',
//         authors: [Array],
//         rating: 3.83,
//         genres: [Array]
//       },
//       {
//         title: 'Lord of the flies',
//         authors: [Array],
//         rating: 3.67,
//         genres: [Array]
//       }
//     ],
//     '4': [
//       {
//         title: 'Good Omens',
//         authors: [Array],
//         rating: 4.25,
//         genres: [Array]
//       },
//       {
//         title: 'Bone: The Complete Edition',
//         authors: [Array],
//         rating: 4.42,
//         genres: [Array]
//       },
//       {
//         title: 'American Gods',
//         authors: [Array],
//         rating: 4.11,
//         genres: [Array]
//       },
//       {
//         title: 'A Gentleman in Moscow',
//         authors: [Array],
//         rating: 4.36,
//         genres: [Array]
//       },
//       {
//         title: 'The Name of the Wind',
//         authors: [Array],
//         rating: 4.54,
//         genres: [Array]
//       },
//       {
//         title: 'The Overstory',
//         authors: [Array],
//         rating: 4.19,
//         genres: [Array]
//       },
//       {
//         title: 'The Way of Kings',
//         authors: [Array],
//         rating: 4.65,
//         genres: [Array]
//       }
//     ]
//   }
console.log(Number('2.57!'));

13
24

103

let s = 0
let w = s++ - -- s + ++s - s --
console.log(s, w);

console.log("5" - 2);


let prices = ["499$", "599$", "320$"];
let mini = parseInt(prices[0]);

for(let price of prices){
    mini = Math.min(mini, parseInt(price));
}

console.log(mini);


let prices = ["499$", "599$", "320$"];

const result = prices.reduce((mini, pointer) => {
    return Math.min(mini, Number(pointer.replace('$', '')));
}, Number(prices[0].replace('$', '')))

console.log(result)