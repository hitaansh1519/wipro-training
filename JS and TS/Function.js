//Question 1

function isValidPassword(pass, user){
   
    if(pass.length >= 8 && !pass.includes(user) && !pass.includes(' ')) return true;

    return false;
}

const answer = isValidPassword('dogLuvr123!', 'dogLuvr');

console.log(answer);

// isValidPassword('89Fjj1nms', 'dogLuvr'); //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

//Question 2

function findAvgValue(arr){
    let n = arr.length;
    let sum = 0;

    for(let i = 0; i < n; i++){
        sum += arr[i];
    }

    const avg = sum/n;

    console.log(avg);

}

findAvgValue([0, 50]);
findAvgValue([75,76,80,95,100]);


//Question 3

// Function Challenge 3 - Pangrams
 
// A pangram is a sentence that contains every letter
// of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"
 
// Write a function called isPangram, which checks to
// see if a given sentence contains every letter of the
// alphabet. Make sure you ignore string casing!
 
// isPangram('The five boxing wizards jump quickly') // true
// isPangram('The five boxing wizards jump quick')  // false

function isPangram(text){

    text = text.toLowerCase();

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    
    for(const alphabet of alphabets) if(!text.includes(alphabet)) return false;

    return true;
}

const result = isPangram("The quick brown fox jumps over the lazy dog");
console.log(result);



//Question 4

//Function Challenge 4 - Get Playing card
 
// Write a getCard() function which returns a random
// playing card object, like:
//
// {
//   value: 'K',
//   suit: 'clubs'
// }
//
// Pick a random value from:
// ---- 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//
// Pick a random suit from:
// ---- clubs, spades, hearts, diamonds
//
// Return both in an object


function getCard(){
    const cardNumber = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];

    const randomCardNum = Math.floor(Math.random() * cardNumber.length);
    const randomSuit = Math.floor(Math.random() * suit.length);

    const myObj = {
        value: cardNumber[randomCardNum],
        suit: suit[randomSuit]
    }

    return myObj;
}

const result = getCard();
console.log(result);
