//Question 1

console.log("10" > "2"); //False

//Question 2

if(0){
    console.log("YES");
} else {
    console.log("NO");
}

// The answer would be NO

//Question 3

if("hello"){
    console.log("YES");
}

//Question 4

let isLoggedIn = true;
let isAdmin = false;

//One way of doing it

if(isLoggedIn && isAdmin) console.log("Access granted");

//Another way of doing the same

console.log(isLoggedIn && isAdmin ? "Access granted": "Access Denied");

//Question 5

const x = 10;
console.log(x > 5 || x > 100);

/*True because it is an OR operator and for it either of the condition should be true.
  As we can see in this senario the first condition satisfies, so there is no need to 
  check for the second condition. This is known as SHORT CIRCUITING*/


//Question 6

const color = "red";

//One way of doing it

if(color == "red") console.log("STOP")
else if(color == "yellow") console.log("Ready");
else if(color == "green") console.log("GO");

//Another way of doing the same

console.log(color == "red" ? "STOP"
           : "yellow" ? "Ready"
           : "green" ? "Go": "")