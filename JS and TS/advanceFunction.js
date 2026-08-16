// Question 1 - Expense Tracker
// A person records daily expenses in an array.
// [120, 300, 50, 900, 40, 110]
// Write code to:
// calculate total expense
// find the highest expense
// count how many expenses are above 100
// Restrictions:
// use loops
// no built-in methods

function calculations(expenses){
    let totalExp = 0;
    let highExp = 0;
    let abv100 = 0;

    for(expense of expenses){

        totalExp += expense;

        if(expense > highExp) highExp = expense;

        if(expense > 100) abv100++;
    }

    console.log(`Total Expense: ${totalExp}`);
    console.log(`Highest Expense: ${highExp}`);
    console.log(`Number of expense above 100: ${abv100}`);
}



calculations([120, 300, 50, 900, 40, 110]);