

const addButton = document.getElementById("add-transaction-btn");

const transactionForm = document.getElementById("transaction-form");

const saveButton = document.getElementById("save-btn");

const amountInput = document.getElementById("amount");

const typeInput = document.getElementById("type");

const descriptionInput = document.getElementById("description");

const transactionList = document.getElementById("transaction-list");


addButton.addEventListener("click", function () {

    if (transactionForm.hidden) {
        transactionForm.hidden = false;
    } else {
        transactionForm.hidden = true;
    }

});

const transactions = [];
// needs to be upgraded in the future
saveButton.addEventListener("click", function () {
    const amount = Number(amountInput.value);
    const type = typeInput.value;
    const description = descriptionInput.value.trim();


    if (amount <= 0 || description === "") {

        alert("Please enter a vaild amount and description.")

        return;
    }

    const transaction = {
        amount: amount,
        type: type,
        description: description

    };

    transactions.push(transaction);
    const listItem = document.createElement("li")

    listItem.textContent = description + " - " + amount + " SAR (" + type + ")";

    transactionList.appendChild(listItem);
    amountInput.value = "";
    descriptionInput.value = "";
    typeInput.value = "expense";

    transactionForm.hidden = true;




});

