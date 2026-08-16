//Question 1

let basket = ["Apples", "Bananas", "Tomatoes"];
console.log(basket);

//Step 1
basket.push("Milk");
console.log(basket);

//Step 2
basket.unshift("Bread");
console.log(basket);

//Step 3
basket.pop();
console.log(basket);

//Step 4
basket.shift();
console.log(basket);


//Question 2

let friends = ["Rahul", "Aman", "Priya", "Sneha"];

//Step 1
const srt = `${friends.join(', ')} are going on a trip!`;

//Step 2
const arr1 = friends.slice(0,2);

//Step 3
friends.sort();

//Step 4

console.log(friends);
console.log(arr1);


//Question 3

const playlist = ["Believer", "Shape of You", "Blinding Lights"];

//Step 1
playlist.push("Let me love you", "Closer");
console.log(playlist);

//Step 2
playlist.pop();
console.log(playlist);

//Step 3
playlist = []; //Runtime Error

//Step 4
/*We know that the reference of the initial array is stored in the playlist
  variable, which is of constant type which means we are not allowed to replace
  the reference of the older array*/


//Question 4

const seatingChart = [
  ["Aman", "Priya"],
  ["Rahul", "Sneha"],
  ["Mira", "Kunal"]
];


//Step 1
console.log(seatingChart[1][1]);

//Step 2
console.log(seatingChart[2][0].replace("Mira","Aarti"));

//Step 3
seatingChart.push(["Neha", "Pooja"]);

//Step 4
console.log(seatingChart);

//question 1: using splice() or delete()
//question 2: undefined
//question 3: 101
//question 4: ['a','b','c','d','e','f']
//question 5: false
//question 6: [1, 2, 3]
//            [1, 2, 3, 4]
