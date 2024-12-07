// Data Expenses
let expenses = [];

// Referensi Elemen
const form = document.getElementById('expense-form');
const expensesTable = document.getElementById('expenses-table');
const expensesChart = document.getElementById('expenses-chart').getContext('2d');

// Tambah Data dan Render
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name && amount > 0) {
    expenses.push({ name, amount });
    renderTable();
    renderChart();
    form.reset();
  }
});

// Render Tabel
function renderTable() {
  expensesTable.innerHTML = expenses.map(expense => `
    <tr>
      <td>${expense.name}</td>
      <td>${expense.amount}</td>
    </tr>
  `).join('');
}

// Render Chart
function renderChart() {
  const labels = expenses.map(expense => expense.name);
  const data = expenses.map(expense => expense.amount);

  new Chart(expensesChart, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Expenses',
        data,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
