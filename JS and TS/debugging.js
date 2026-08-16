let num1 = 10;
let num2 = 32;

let total = num1 + num2;

console.log(total);

//Question 1

//You have an array of strings representing income and expenses from a company's balance sheet.
//The strings contain positive and negative dollar amounts, for example, "-$100.43" or "$23.01".
 
//The strings may not always contain a dollar sign in front and may not always have a decimal.
//Positive numbers represent income, whereas negative numbers represent expenses.
 
//Elements in the
//array that are not strings, or which can not be interpreted as valid dollar amounts should be
//discarded. Expenses of zero(-0) should not be counted. Your job is to determine how many expenses
//are in the array and their sum.
 
//This sum should be the absolute value of the expenses. To
//communicate this data, you should write a function that accepts the balance sheet array and
//returns a string formatted like so:
 
//"expenseCount: 2, expenseSum: 70"

const list = [
  "$100",
  "-$50",
  "200",
  "-20",
  "hello",
  true
];

function expense(list) {

    let expenseCount = 0;
    let expenseSum = 0;

    for(let value of list) {

        if(typeof value !== "string") continue;

        if(value.includes('$')) value = value.replace('$', '');

        value = Number(value);

        if(Number.isNaN(value)) continue;

        if(value < 0) {
            expenseCount++;
            expenseSum += Math.abs(value);
        }
    }

    console.log(`expenseCount: ${expenseCount}, expenseSum: ${expenseSum}`);
}

expense(list);


//Question 2

const products = [
  'Laptop',
  'Mouse',
  'Keyboard',
  'Mouse',
  'Laptop',
  'Monitor'
];

const duplicates = products.filter(
    (item, index) => products.indexOf(item) !== index
);

console.log(duplicates);
 
//Return only duplicate products.--
// Output: ['Laptop', 'Mouse']