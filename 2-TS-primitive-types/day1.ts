// 1 EXPLORING TYPESCRIPT ///////////////////////////////

// starting from 1-JS-variable-types....
// Rename file to be a TypeScript file.
// Try to compile it to JS
// This code worked before, but had a logical error that we saw in the console.
// This time, the code does not make it thtough the TypeScript compiler,catching the error earlier.

// 2 TYPE ANNOTATIONS, UNION TYPE/"OR" /////////////////
// delete code that does not relate to addind the deposit to the mutableBalance.
// let's add type annotations
// discuss why you would use type annotations rather than relying on TypeScript's type inference.

console.log("script connected");

let mutableBalance: number = 1000;

// add a deposit to the balance
// Number() casts the prompt into a number
let deposit: number | null = Number(prompt("deposit amount"));
mutableBalance = mutableBalance + deposit;
console.log(mutableBalance);

// compile the file to JS. this time put it it watch mode.
// tsc -w day1.ts

// 3 PRIMITIVE TYPES CHALLENGE///////////////////////////////////////////////
//CHALLENGE - 10min

// a) Declare variables of the following types and assign them appropriate values. Use type annotations. Log the value of each variable to the console. Log the type of each variable to the console.
// number
// string
// boolean

// b) Declare a variable called greeting and assign it the value "hello". Remember to add the type annotation.
// prompt the user for their name and store it in a variable called name. Remember to add the type annotation. (You may comment out the previous prompt!)
// log to the console a a greeting for your user, using a combination of the greeting and name variables.

// a) Solution
let num: number = 10;
let str: string = "hello";
let bool: boolean = true;

console.log(num, str, bool);
console.log(typeof num, typeof str, typeof bool);

//b) Solution

let greeting: string = "hello";
let userName: string | null = prompt("What is your name?");
console.log(greeting + " " + userName);
