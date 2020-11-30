(function expense() {
    const expenseInput = document.querySelector('#name-of-expense');
    const dateInput = document.querySelector('#date');
    const amountInput = document.querySelector('#amount');
    const addExpenseBtn = document.querySelector('#btn-add');
    
    let expense;
    let date;
    let amount;
    let expenseInfo = [];

    function setExpenseInput(e) {
        e.preventDefault();

         expense = document.createTextNode(expenseInput.value);
         date = document.createTextNode(dateInput.value);
         amount = document.createTextNode('$' + amountInput.value);

         (function checkExpenseInput() {
            if (expense.textContent === '' || date.textContent === '' || amount.textContent === '$') {
                alert('Please enter a name, date and amount');
                return;
            } else {
                expenseInfo.push(expense, date, amount);
                createExpense(expenseInfo);
                expenseInfo = [];
            }
        })();
    }

    addExpenseBtn.addEventListener('click', setExpenseInput);
})();

function deleteBtn() {
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fas', 'fa-trash');
    deleteExpense(deleteBtn);

    return deleteBtn;
}

function deleteExpense(deleteBtn) {
    deleteBtn.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
    });
}

function createExpense(expenseInfo) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td.appendChild(expenseInfo[0]);
    td2.appendChild(expenseInfo[1]);
    td3.appendChild(expenseInfo[2]);
    td4.appendChild(deleteBtn());

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    displayExpense(tr);
}

function displayExpense(tr) {
    const tableBody = document.querySelector('tbody');
    const form = document.querySelector('form');

    tableBody.appendChild(tr);
    form.reset();
}