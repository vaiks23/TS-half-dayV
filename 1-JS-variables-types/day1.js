// 1) CHECK THE CONNECTION BETWEEN JS AND HTML ////////////////////////////////////////////////////////////

console.log("script connected");

// VARIABLES ///////////////////////////////////////////////////////////////////////////////////////

// 2) JS const variables
const balance = 1000;
console.log(balance);
console.log(typeof balance);

// 3) Reassigning variables - this will throw an error as you can't reassign a variable declared with const
//balance = 2000;

// 4) Let declares variables that can be reassigned
let mutableBalance = 1000;
mutableBalance = 2000;
console.log(mutableBalance);
mutableBalance = mutableBalance + 1000;

// 5) You could also save over with a let-declared variable with a different data type
//mutableBalance = "hello";
//console.log(mutableBalance);
//console.log(typeof mutableBalance);

// 6) Let's add a deposit to the balance.... (THIS WILL HAVE UNEXPECTED BEHAVIOR!)
let deposit = prompt("deposit amount");
mutableBalance = mutableBalance + deposit;
console.log(mutableBalance);

// 7) Discussion point: what's happened here?
// If user deposited 30 into their account (show using the prompt window)
// we now have that their balance is 200030
// what's happened?

// ANSWER`
// prompt recieves input from the user as as a string
// the deposit is a string, so it's concatenating the two strings together.
// Logical error!
// unpredictable behavior!
// What can TypeScript do to help us here?
