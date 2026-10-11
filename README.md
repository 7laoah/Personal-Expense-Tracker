# Personal Expense Tracker

## Overview

Personal Expense Tracker is a web development project designed to help users manage and track their income and expenses through a simple, user-friendly interface.

The project is built using **HTML, CSS, and JavaScript** and focuses on practicing fundamental frontend development concepts, including DOM manipulation, event handling, arrays, objects, and user input validation.

**Project Status:** In Progress

## Features Implemented

### 1. Financial Dashboard
- Created a dashboard displaying Total Balance, Total Income, and Total Expenses.
- Designed individual cards for each financial category.
- Applied CSS styling to improve readability and layout.
- Added responsive styling for smaller screens.

**Note:** Dashboard values are currently placeholders and are not yet updated automatically.

### 2. Add Transaction Form
- Created an interactive Add Transaction button.
- Implemented JavaScript event listeners to open and close the transaction form.
- Added input fields for:
  - Transaction amount
  - Transaction type (Income or Expense)
  - Transaction description

### 3. Transaction Management
- Implemented functionality to read user inputs using JavaScript.
- Used JavaScript objects to represent individual transactions.
- Used an array to temporarily store transaction records.
- Displayed saved transactions dynamically in a transaction list.

### 4. Input Validation
- Added basic validation to prevent zero or negative transaction amounts.
- Prevented transactions with empty descriptions.
- Displayed alerts when required information was invalid.
- Cleared the input fields after successfully saving a transaction.

### 5. Responsive Design
- Styled the application using CSS.
- Used Flexbox to organize dashboard cards.
- Added hover effects and button styling.
- Implemented media queries to improve usability on smaller screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive layout |
| JavaScript | User interactions and transaction handling |

## Project Structure

```text
ExpenseTracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your web browser.
4. Click **Add Transaction** to enter and save transactions.

No additional installation is required.

## Current Limitations

- Transactions are stored temporarily in a JavaScript array.
- Refreshing the page clears previously entered transactions.
- Dashboard balances are not yet calculated dynamically.
- No database or backend integration is currently implemented.

## Planned Improvements

- [ ] Automatically calculate Total Balance, Income, and Expenses.
- [ ] Implement localStorage to save transactions after refreshing.
- [ ] Add functionality to delete transactions.
- [ ] Add transaction categories.
- [ ] Implement expense charts and visualizations.
- [ ] Add monthly budget tracking.
- [ ] Integrate a backend and database.

## Learning Objectives

This project is part of my personal learning journey in web development.

Through its development, I have practiced:

- Structuring web pages using HTML.
- Designing responsive interfaces with CSS.
- Working with JavaScript variables, arrays, and objects.
- Handling events and manipulating the DOM.
- Processing and validating user input.
- Developing an interactive application step by step.

## Project Development

This project is being developed incrementally, with new features added as I continue improving my programming and web development skills.
