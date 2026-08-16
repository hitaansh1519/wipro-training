//Question 1

function drivingStatus(age, hasLicense){

   return age >= 18 && hasLicense === true ? `You can drive` : `You cannot drive`;
}

console.log(drivingStatus(22, true));


//Question 2

let a = 0;
let b = "0";
let c = false;
let d = null;
let e = undefined;
let f = NaN;

//part1

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
console.log(d == e);
console.log(d === e);
console.log(f == f);

//part2

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

//part3



//Question 3

function login(username, password){

    let isAuthenticated = false;

    !username || !password ? console.log(`Fields cannot be empty`) : '';

    if(username === 'admin' && password === '12345'){
        console.log("Login Successfull");
        isAuthenticated = true;
    }

    isAuthenticated ? console.log('Welcome') : console.log('Access Denied');
    
}

login('admin', '12345');

