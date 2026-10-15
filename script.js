
 // Get HTML elements
const addButton = document.getElementById("add-transaction-btn");
const transactionForm = document.getElementById("transaction-form");
const saveButton = document.getElementById("save-btn");

const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const descriptionInput = document.getElementById("description");
const transactionList = document.getElementById("transaction-list");

// Dashboard elements
const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");

// Load transactions from localStorage
const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

// Show or hide the transaction form
addButton.addEventListener("click", function () {
    transactionForm.hidden = !transactionForm.hidden;
});

// Calculate and update financial totals
function updateDashboard() {

    let totalIncome = 0;
    let totalExpenses = 0;

    // Loop through all transactions
    for (const transaction of transactions) {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        }
        else if (transaction.type === "expense") {
            totalExpenses += transaction.amount;
        }

    }

    // Calculate remaining balance
    const balance = totalIncome - totalExpenses;

    // Display the updated values
    balanceElement.textContent = balance.toFixed(2) + " SAR";
    incomeElement.textContent = totalIncome.toFixed(2) + " SAR";
    expensesElement.textContent = totalExpenses.toFixed(2) + " SAR";

}

// Display a transaction in the list
function displayTransaction(transaction) {

    const listItem = document.createElement("li");

    listItem.textContent = transaction.description + " - "
        + transaction.amount + " SAR (" + transaction.type + ")";

    transactionList.appendChild(listItem);

}

// Save a new transaction
saveButton.addEventListener("click", function () {

    // Read user inputs
    const amount = Number(amountInput.value);
    const type = typeInput.value;
    const description = descriptionInput.value.trim();

    // Validate user inputs
    if (!Number.isFinite(amount) || amount <= 0 || description === "") {
        alert("Please enter a valid amount and description.");
        return;
    }

    // Create a transaction object
    const transaction = {
        amount: amount,
        type: type,
        description: description
    };

    // Add transaction to the array
    transactions.push(transaction);

    // Save transactions to localStorage
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Update dashboard calculations
    updateDashboard();

    // Display the transaction in the list
    displayTransaction(transaction);

    // Clear input fields
    amountInput.value = "";
    descriptionInput.value = "";
    typeInput.value = "expense";

    // Hide the transaction form
    transactionForm.hidden = true;

});

// Display saved transactions when the page loads
for (const transaction of transactions) {
    displayTransaction(transaction);
}

// Initialize dashboard totals
updateDashboard();
