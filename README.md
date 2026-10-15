# Personal Expense Tracker

A personal finance management web application designed to help users track income, manage expenses, and monitor their financial activity through a simple, interactive dashboard.

**Project Status:** 🚧 In Development — Phase 1 Completed

## About the Project

Personal Expense Tracker is a full-stack web development learning project focused on building a practical financial management application.

The project is being developed incrementally, beginning with frontend functionality using HTML, CSS, and JavaScript, followed by data visualization, backend development, and database integration.

The goal is to create a complete application that allows users to manage financial transactions, analyze spending habits, and track their finances efficiently.

## Features Implemented

### Financial Dashboard
- Responsive dashboard displaying Total Balance, Total Income, and Total Expenses.
- Automatic calculations based on recorded transactions.
- Real-time dashboard updates whenever a transaction is added.
- Consistent currency formatting in SAR.

### Transaction Management
- Interactive Add Transaction form with show/hide functionality.
- Support for income and expense transactions.
- Transaction details including amount, type, and description.
- Dynamic transaction history displaying recorded transactions.
- Automatic form clearing after successfully saving a transaction.

### Input Validation
- Prevents zero, negative, and invalid transaction amounts.
- Prevents transactions with empty descriptions.
- Displays alerts when invalid information is submitted.

### Local Data Storage
- Saves transactions using the browser's localStorage.
- Automatically retrieves previously saved transactions when the page loads.
- Preserves transaction history and dashboard totals after refreshing the webpage.

### User Interface
- Clean and responsive layout using CSS.
- Flexbox-based dashboard cards.
- Interactive buttons with hover effects.
- Responsive design for smaller screens.

## Technologies Currently Used

| Technology | Purpose |
|---|---|
| HTML5 | Webpage structure and content |
| CSS | Styling, layout, and responsive design |
| JavaScript | Transaction management, calculations, and DOM manipulation |
| localStorage | Browser-based transaction storage |

## Planned Technologies

| Technology | Purpose |
|---|---|
| Chart.js | Interactive financial charts and data visualization |
| Python (Flask) | Backend development and REST APIs |
| MySQL | Relational database for permanent transaction storage |

## Development Roadmap

### Phase 1 — Frontend Development ✅
- [x] Create the financial dashboard layout.
- [x] Design a responsive user interface using CSS.
- [x] Implement an interactive Add Transaction form.
- [x] Validate transaction amounts and descriptions.
- [x] Store transactions using JavaScript arrays and objects.
- [x] Display transaction history dynamically.
- [x] Automatically calculate total balance, income, and expenses.
- [x] Update the dashboard when new transactions are added.
- [x] Implement localStorage to preserve transactions after page refreshes.
- [x] Load and display previously saved transactions.
- [x] Organize JavaScript code using reusable functions.

### Phase 2 — Data Visualization
- [ ] Integrate Chart.js.
- [ ] Create interactive income and expense charts.
- [ ] Introduce transaction categories.
- [ ] Visualize spending by category.
- [ ] Display monthly financial statistics.

### Phase 3 — Backend Development
- [ ] Set up a Python Flask application.
- [ ] Develop REST APIs for transaction management.
- [ ] Connect the frontend to the Flask backend.
- [ ] Implement server-side input validation.

### Phase 4 — Database Integration
- [ ] Design the MySQL database structure.
- [ ] Connect Flask to MySQL.
- [ ] Store and retrieve transactions from the database.
- [ ] Implement database operations for adding, updating, and deleting transactions.
- [ ] Replace localStorage as the primary source of transaction data.

### Phase 5 — Final Improvements
- [ ] Add transaction editing and deletion.
- [ ] Implement transaction filtering and searching.
- [ ] Add monthly budget management.
- [ ] Improve the user interface and user experience.
- [ ] Test application functionality.
- [ ] Finalize project documentation.

## Project Structure

```text
personal-expense-tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

The project structure will expand as backend, database, and data visualization components are implemented.

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Click **Add Transaction** to record income or expenses.
5. View your transactions and updated financial totals on the dashboard.

No additional installations or dependencies are currently required.

## Current Limitations

- Transaction data is stored locally in the browser using localStorage rather than a database.  (before was static)
- Transactions cannot currently be edited or deleted.
- Data is not synchronized across different browsers or devices.
- Financial charts and spending analytics have not yet been implemented.
- Backend and database integration have not yet been implemented.
- The application is currently intended for learning and demonstration purposes.

## Learning Objectives

Through this project, I am developing practical skills in:

- Frontend web development using HTML, CSS, and JavaScript.
- JavaScript DOM manipulation and event handling.
- Working with arrays, objects, functions, and loops.
- Processing and validating user input.
- Implementing responsive web interfaces.
- Managing browser-based data storage.
- Building backend applications using Python and Flask.
- Designing relational databases with MySQL.
- Developing and integrating REST APIs.
- Visualizing financial information through interactive charts.
- Organizing and maintaining a full-stack development project.

## Future Development

This project will continue to evolve as new features and technologies are introduced.

The final goal is to transform the current frontend prototype into a functional full-stack personal finance management application.