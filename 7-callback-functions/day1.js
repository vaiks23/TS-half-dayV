var transactions = [];
var user1 = { name: "Matt", age: 25, loggedIn: false };
var logIn = function () {
    user1.loggedIn = true;
    var greetUserEl = document.getElementById("userGreet");
    greetUserEl.innerHTML = "<h2>Welcome, ".concat(user1.name, "</h2>");
};
var newTransaction = function () {
    var description = document.getElementById("description");
    var amount = document.getElementById("amount");
    var transaction = {
        description: description.value,
        amount: +amount.value,
        date: new Date(),
    };
    transactions.push(transaction);
    console.log(transactions);
    updateDisplay();
};
// FOREACH METHOD
transactions.forEach(function (transaction) {
    console.log("".concat(transaction.description, " of ").concat(transaction.amount));
});
var updateDisplay = function () {
    var description = document.getElementById("description");
    var amount = document.getElementById("amount");
    var transactionsArea = document.getElementById("transactions");
    var balanceArea = document.getElementById("balance");
    // MAP METHOD
    var lis = transactions.map(function (transaction) {
        return "<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, " </li>");
    });
    transactionsArea.innerHTML = "<ul>" + lis.join("") + "</ul>";
    // REDUCE METHOD
    balanceArea.innerText = transactions
        .reduce(function (total, transaction) { return total + transaction.amount; }, 0)
        .toString();
    description.value = "";
    amount.value = "0";
};
