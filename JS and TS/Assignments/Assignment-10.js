//Question 1

// Given this input:
// const results = [
// { name: 'Login Test', status: 'passed' },
// { name: 'Cart Test', status: 'failed' },
// { name: 'Payment Test', status: 'passed' }
// ];
// Write a function getTestSummary(results) that outputs:
// Total: 3
// Passed: 2
// Failed: 1
// Pass Percentage: 66%

const results = [
    { name: 'Login Test', status: 'passed' },
    { name: 'Cart Test', status: 'failed' },
    { name: 'Payment Test', status: 'passed' }
];

function getTestSummary(results){

    //Total
    console.log(`Total: ${results.length}`);

    //Passed and Failed
    let passCnt = 0;
    let failCnt = 0;
    for(const result of results){
        if(result.status === 'passed') passCnt++;
        else failCnt++;
    }

    console.log(`Passed: ${passCnt}`);
    console.log(`Failed: ${failCnt}`);

    //Pass Average
    const avg = Math.floor((passCnt/results.length) * 100);
    console.log(`Pass Percentage: ${avg}%`);
}

getTestSummary(results);


//Question 2

// Write maskSensitiveData(obj, keysToMask) that replaces values of sensitive keys
// with *****.
// maskSensitiveData({ username: 'piyush', password: 'abc123', token: 'xyz' },
// ['password', 'token']);
// // Output: { username: 'piyush', password: '*****', token: '*****' }

// function maskSensitiveData(obj, arr){
//     for(const i of arr){
//         for(const value in obj){
//             if(arr[i] === obj[i]){
//                 obj.password = obj.password.replace('*');
//             }

//             if(arr[i] === obj[i]){
//                 obj.token = obj.token.replace('*')
//             }
//         }
//     }

//     return obj;
// }


//Using for of loop
function maskSensitiveData1(obj, arr){
    for(const key of arr){
        if(obj[key] !== undefined){
            obj[key] = '********';
        }
    }

    return obj;
}

//Using for in loop
function maskSensitiveData(obj, arr){
    for(const key in obj){
        if(arr.includes(key)){
            obj[key] = '*******';
        }
    }

    return obj;
}

const output = maskSensitiveData(
    { username: 'hitaansh', password: 'qwerty', token: 'xyz' },
    ['password', 'token']
);

console.log(output);



//Question 3

// Write validateType(value, type) that returns:
// ● true if value matches given type.
// ● Throws an error otherwise.
// validateType('Hello', 'string'); // true
// validateType(10, 'string'); // throws "Expected string but got number"

function validateType(value, type){
    const valuesType = typeof value;

    return valuesType === type ? true : false;
}

console.log(validateType('Hello', 'string'));
console.log(validateType(10, 'string'));