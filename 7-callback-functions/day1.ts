// code from previous, with deletions of code that is not relevant for final app.
// transactions set to be the empty array, transaction1 and transaction2 deleted.
type TransactionType = { description: string; amount: number; date: Date };

const transactions: TransactionType[] = [];

type UserType = { name: string; age: number; loggedIn: boolean };
const user1: UserType = { name: "Matt", age: 25, loggedIn: false };

const logIn = (): void => {
  user1.loggedIn = true;
  const greetUserEl = document.getElementById("userGreet") as HTMLElement;
  greetUserEl.innerHTML = `<h2>Welcome, ${user1.name}</h2>`;
};

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
  updateDisplay();
};

// 1) FOREACH METHOD
transactions.forEach((transaction) => {
  console.log(`${transaction.description} of ${transaction.amount}`);
});

const updateDisplay = () => {
  const description = document.getElementById(
    "description"
  ) as HTMLInputElement;
  const amount = document.getElementById("amount") as HTMLInputElement;
  const transactionsArea = document.getElementById(
    "transactions"
  ) as HTMLDivElement;
  const balanceArea = document.getElementById("balance") as HTMLSpanElement;

  // MAP METHOD
  const lis = transactions.map((transaction) => {
    return `<li>${transaction.date} ${transaction.description} ${transaction.amount} </li>`;
  });

  transactionsArea.innerHTML = "<ul>" + lis.join("") + "</ul>";

  // REDUCE METHOD
  balanceArea.innerText = transactions
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toString();
  description.value = "";
  amount.value = "0";
};
