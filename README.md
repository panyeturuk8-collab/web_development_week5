# SpendWise — Personal Budget & Expense Tracker

SpendWise is a responsive personal finance dashboard built with semantic HTML5, modern CSS (Grid, Flexbox, custom properties, and dark mode support), and vanilla JavaScript. It allows users to enter their monthly budget and category expenses and immediately view calculated spending totals, budget utilization, and remaining balance in the browser console.

## Project Structure

- **`index.html`**: Defines the semantic dashboard structure, including the navigation sidebar, top summary header, six category cards (*Food & Groceries*, *Transport*, *Rent & Housing*, *Entertainment*, *Savings*, and *Utilities*), and links `script.js`.
- **`style.css`**: Implements the responsive CSS Grid and Flexbox dashboard layout, `:root` theme variables, card hover/focus micro-interactions, and automatic dark mode overrides.
- **`script.js`**: Powers the JavaScript data layer—storing budget and expense variables, prompting the user for input, running modular calculation functions, and logging formatted results to the console.
- **`README.md`**: Documents the application overview, JavaScript architecture, and verification steps.

## JavaScript Concepts Implemented

- **Variables & Constants (`const` and `let`)**: Used to store fixed configuration values and mutable expense figures.
- **Data Types (`String`, `Number`, `Boolean`, `Array`)**: Used for user names, currency amounts, input validation checks, and grouping category expenses.
- **User Input & Type Conversion (`prompt()` and `Number()`)**: Collects user input interactively and converts string responses into numeric values for arithmetic operations.
- **Arithmetic & Comparison Operators**: Calculates total spending, remaining balance, and percentage utilization, and checks whether spending is within budget.
- **Control Flow & Loops (`if/else` and `for` loop)**: Validates user inputs, iterates through category expenses, and determines budget status.
- **Reusable Functions & Template Literals**: Modularizes input collection, calculations, and formatted console reporting.

## How Variables Are Used

- `const` variables (`APP_NAME`, `CURRENCY`, `monthlyBudget`, `totalExpenses`, `remainingBalance`) hold values that should not be reassigned once initialized or computed.
- `let` variables (`foodExpense`, `transportExpense`, `rentExpense`, `entertainmentExpense`, `savingsDeposit`, `utilitiesExpense`) store category spending figures that can be updated based on user input.
- An array (`allExpenses`) groups individual category expense variables so they can be processed together cleanly.

## How User Input Is Collected

- `script.js` uses the browser's `prompt()` function inside `runSpendWise()` and the helper function `getNumericInput()` to ask the user for their name, budget month, total monthly budget, and key category expenses.
- Numeric responses are converted from strings using `Number()`, and fallback defaults are applied if the user leaves a prompt blank, cancels, or enters non-numeric/negative text.

## How Calculations Are Performed

- **Total Expenses**: `calculateTotalExpenses()` loops through `allExpenses` and sums each category amount using the `+=` operator.
- **Remaining Balance**: `calculateRemainingBalance()` subtracts `totalExpenses` from `monthlyBudget` (`totalBudget - totalExpenses`).
- **Budget Utilization Percentage**: `calculateBudgetUsagePercentage()` divides `totalExpenses` by `monthlyBudget`, multiplies by `100`, and formats the result to one decimal place with `.toFixed(1)`.

## How Functions Help Organize the Code

Splitting logic into dedicated functions keeps the code modular, readable, and easy to maintain:
- `getNumericInput()` centralizes prompt handling and numeric validation so validation logic is not repeated for every expense field.
- `calculateTotalExpenses()`, `calculateRemainingBalance()`, and `calculateBudgetUsagePercentage()` isolate mathematical logic from user interface prompts.
- `displayBudgetSummary()` handles console formatting in one place, while `runSpendWise()` coordinates the overall execution flow.

## How to Run & Verify

1. Open `index.html` in a web browser.
2. Respond to the browser `prompt()` dialogs with your name, month, total budget, and category expenses (or click **OK** to use the pre-filled defaults).
3. Open **Browser DevTools** (`F12` or right-click → **Inspect**) and select the **Console** tab to view the labeled SpendWise budget summary.
