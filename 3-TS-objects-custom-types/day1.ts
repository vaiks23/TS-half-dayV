// We are taking in a deposit amount from the user. Actually a transaction should hace a description, amount and a date.
// Each tranaction should be an object. (object literal)
// We do NOT need to create a transaction class in order to create a transaction object (unlike Java).
// Instructor note: first create a JS transaction object to show the structure, then create the custom type for it.

// 1) OBJECTS AND CUSTOM TYPES /////////////////////////////////////////////////////

type TransactionType = { description: string; amount: number; date: Date };

const transaction1: TransactionType = {
  description: "deposit",
  amount: 1000,
  date: new Date(),
};

const transaction2: TransactionType = {
  description: "withdrawal",
  amount: -500,
  date: new Date(),
};

console.log(transaction1);

// demonstrate that the type signature of the object is enforced. Following code throws error due to missing field.
// const badTransaction: TransactionType = {
//     description: "withdrawal",
//     };

// We will want to display a list of transactions to the user.

// 2) JAVASCRIPT ARRAYS /////////////////////////////////////////////////////
// arrays in JS can hold a mix of types.
const demoArray = [1, "hello", true, new Date()];

// 3)  TYPED ARRAYS
//arrays in TS can be typed to accept only one type
const numberArray: number[] = [1, 2, 3, 4, 5];

// 4) CUSTOM TYPED ARRAYS
const transactions: TransactionType[] = [transaction1, transaction2];
console.log(transactions);

// 5) GENERICS /////////////////////////////////////////////////////
// another way to write the above code
const transactions2: Array<TransactionType> = [transaction1, transaction2];
// generics are where we have a type built on top of another type.
// we can also create an custom generics. Array is an inbuilt generic.
// you will see this syntax later in the course.

// 6 CHALLENGE - 10 mins ////////////////////////////////////////////
// Some of these you have not been shown how to do. You may use a search engine.

// a) Create a type signature for a user object. The user should have a name, age and a login status showing whether they are logged in or not.
// b) Create 2 different objects with the type signature you created in a). Log the users to the console.
// c) Log to the console just the age of a user you created in b). (hint: dot notation, similar to Java)
// d) Create an array of user objects. Call it users. Make sure it only accepts user objects. Log the array to the console.
// e) Log to the console the first entry in your users array.
// f) Log to the console the name of the second entry in your users array.

// CHALLENGE SOLUTIONS ////////////////////////////////////////////
type UserType = { name: string; age: number; loggedIn: boolean };

const user1: UserType = { name: "Matt", age: 25, loggedIn: true };
console.log(user1);

const user2: UserType = { name: "Tamsin", age: 30, loggedIn: false };

console.log(user1.age);

const users: UserType[] = [user1, user2];
console.log(users);

console.log(users[0]);

console.log(users[1].name);
