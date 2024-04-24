// code from previous, with deletions of code that is not relevant for final app
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

const transactions: TransactionType[] = [transaction1, transaction2];

type UserType = { name: string; age: number; loggedIn: boolean };
const user1: UserType = { name: "Matt", age: 25, loggedIn: false };

const logIn = (): void => {
  user1.loggedIn = true;
  const greetUserEl = document.getElementById("userGreet") as HTMLElement;
  greetUserEl.innerHTML = `<h2>Welcome, ${user1.name}</h2>`;
};

// 1) FORMS //////////////////////////////////////////
// build the HTML form in the index.html file

// 2) ARRAY METHODS //////////////////////////////////////////
const exampleArray: string[] = ["cat", "dog"];
exampleArray.push("hamster");
console.log(exampleArray);

// 3) SJ - ADDING A NEW ELEMENT TO EXISTING ARRAY AND CREATING A NEW ARRAY ///////////////
// use Spread operator to create new array without mutating the original array
const newExampleArray: string[] = [...exampleArray, "fish"];
console.log(newExampleArray);

// 4) SJ - ARRAY DESTRUCTURING ////////////////////////////////////////
const [firstAnimal, secondAnimal] = newExampleArray;
console.log(firstAnimal, secondAnimal);

// 5) CHALLENGE: ALLOWING USER TO ADD A TRANSACTION //////////////////////////////////////////
// create a function thatm when called, adds a new transaction to the transactions array
// and logs the updated array to the console
// HINT: When the user types in an HTML input box, the user's input is stored as a property of the input element.

// SOLUTION //////////////////////////////////////////

const newTransaction = () => {
  const description = document.getElementById(
    "description"
  ) as HTMLInputElement;
  const amount = document.getElementById("amount") as HTMLInputElement;
  const transaction: TransactionType = {
    description: description.value,
    amount: +amount.value,
    date: new Date(),
  };
  transactions.push(transaction);
  console.log(transactions);
};
