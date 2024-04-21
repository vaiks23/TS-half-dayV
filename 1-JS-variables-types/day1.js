console.log("script connected");

// JS const variables
const balance = 1000;
console.log(balance);
console.log(typeof balance);

// reassigning variables - this will throw an error as you can't reassign a variable declared with const
//balance = 2000;

// let declares variables that can be reassigned
let mutableBalance = 1000;
mutableBalance = 2000;
console.log(mutableBalance);
mutableBalance = mutableBalance + 1000;

// you could also save over with a different data type
//mutableBalance = "hello";
//console.log(mutableBalance);

// add a deposit to the balance
let deposit = prompt("deposit amount");
mutableBalance = mutableBalance + deposit;
console.log(mutableBalance);

// user deposited 30 into their account
// we now have that their balance is 200030
// what's happened?
// prompt recieves input from the user as as a string
// the deposit is a string, so it's concatenating the two strings together.
// Logical error!
// unpredictable behavior!
