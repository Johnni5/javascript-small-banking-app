// variables
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");
const transactionListElement = document.getElementById("transactionList");

//buttons
const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");

// ********* event-listener *********
// income
depositButton.addEventListener("click", function () {
  const amount = prompt(
    "Welcher Betrag (in EUR) soll eingezahlt werden: ",
    "0"
  );
  updateUI(amount, true);
});

// expenses
withdrawButton.addEventListener("click", function () {
  const amount = prompt("Welcher Betrag (in EUR) soll abgehoben werden: ", "0");
  updateUI(amount, false);
});

// ********* functions *********
// update balance
function updateBalance(amount, isDeposit) {
  const currentBalance = Number(balanceElement.textContent);
  const newBalance = isDeposit
    ? currentBalance + amount
    : currentBalance - amount;
  balanceElement.textContent = newBalance;
}

// update UI
function updateUI(amount, isDeposit) {
  const convertedAmount = Number(amount);
  updateBalance(convertedAmount, isDeposit);
  updateSum(convertedAmount, isDeposit);
  updateTransactions(convertedAmount, isDeposit);
}

// update INCOME
function updateIncome(amount) {
  const currentIncome = Number(incomeElement.textContent);
  const newIncome = currentIncome + amount;
  incomeElement.textContent = newIncome;
}

// update EXPENSES
function updateExpenses(amount) {
  const currentExpenses = Number(expensesElement.textContent);
  const newExpenses = currentExpenses + amount;
  expensesElement.textContent = newExpenses;
}

// update TOTAL -income, expenses
function updateSum(amount, isDeposit) {
  if (isDeposit) {
    updateIncome(amount);
  } else {
    updateExpenses(amount);
  }
}

function updateTransactions(amount, isDeposit) {
  const transactionElement = document.createElement("div");
  transactionElement.classList.add("transaction");

  const columnType = document.createElement("div");
  columnType.classList.add("column");

  const typeElement = document.createElement("span");
  typeElement.classList.add("type");
  typeElement.textContent = isDeposit ? "Einzahlung" : "Auszahlung";

  const columnAmount = document.createElement("div");
  columnAmount.classList.add("column");

  const amountElement = document.createElement("span");
  amountElement.classList.add("amoun");
  amountElement.textContent = amount;

  columnType.appendChild(typeElement);
  columnAmount.appendChild(amountElement);
  transactionElement.append(columnType, columnAmount);
  transactionListElement.prepend(transactionElement); // -> new item always on top
}
