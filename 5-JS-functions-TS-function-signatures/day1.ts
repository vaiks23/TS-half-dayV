// code from previous
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
console.log(transactions);

type UserType = { name: string; age: number; loggedIn: boolean };

const user1: UserType = { name: "Matt", age: 25, loggedIn: false };
console.log(user1);

const user2: UserType = { name: "Tamsin", age: 30, loggedIn: false };

const users: UserType[] = [user1, user2];
console.log(users);

const el1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount} </li>`;
const el2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount} </li>`;
const transactionsArea = document.getElementById(
  "transactions"
) as HTMLDivElement;
transactionsArea.innerHTML = `<ul> ${el1} ${el2}</ul>`;

// FUNCTIONS //////////////////////////////////////////////////////////

function sayHello(): void {
  console.log("Hello from function declaration");
}

sayHello();

// ARROW FUNCTIONS

const sayHelloArrow = (): void => {
  console.log("Hello from an arrow function");
};

sayHelloArrow();

// FUNCTION TYPE SIGNAUTRES

const balance: number = 0;

const processTransaction = (transaction: TransactionType): number => {
  const newBalance = balance + transaction.amount;
  console.log(`Old balance was ${balance}. New balance is ${newBalance}`);
  return newBalance;
};

processTransaction(transaction1);
console.log(balance);

// FUNCTIONS GETTING CALLED BY DOM EVENTS /////////////////////////////////////////////////////////
// give processTransaction function to a button as an onclick property
// demonstrate that the function is called when the button is clicked

// CHALLENGE //////////////////////////////////////////////////////////
// create a function that, when called, logs user1 in by setting the loggedIn property of user1 to true
// give this function to the button as an onclick property
// render a welcome message to the user on the page when they are logged in

// SOLUTION //////////////////////////////////////////////////////////

const logIn = (): void => {
  user1.loggedIn = true;
  const greetUserEl = document.getElementById("userGreet") as HTMLElement;
  greetUserEl.innerHTML = `<h2>Welcome, ${user1.name}</h2>`;
};
