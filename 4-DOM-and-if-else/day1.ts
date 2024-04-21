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

// 1) MANIPULATING THE DOM ////////////////////////////////////////////////////////////////////////
// Go to the HTML and create a h2 displaying Transactions
// Then a div with the id transactions

const el1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount} </li>`;
const el2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount} </li>`;
const transactionsArea = document.getElementById(
  "transactions"
) as HTMLDivElement;
transactionsArea.innerHTML = `<ul> ${el1} ${el2}</ul>`;

// 2 CHALLENGE /////////////////////////////////////////////////////////////////////////////////
//a) Choose one of the users we created before and render their name to the web page.
//b) Render their name to the webpage ONLY IF their loggedIn property is true, else render to the page a message saying "User is not logged in"
// Note: b has not been demonstrated but you can work this out based on knowledge of if/else in any other language and using a search engine if needed.

// SOLUTION for a.
// create heading element in HTML with id userGreet

// const userGreet = document.getElementById("userGreet") as HTMLHeadingElement;
// userGreet.innerHTML = `Hello ${user1.name}`;

// SOLUTION for b
const userGreet = document.getElementById("userGreet") as HTMLHeadingElement;
if (user1.loggedIn) {
  userGreet.innerHTML = `Hello ${user1.name}`;
} else {
  userGreet.innerHTML = `User is not logged in`;
}

// option to discuss ternary operator
// userGreet.innerHTML = user1.loggedIn ? `Hello ${user1.name}` : `User is not logged in`;
