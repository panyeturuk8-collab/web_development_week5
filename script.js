// ==========================================
// 1. Store Application Data (Variables & Types)
// ==========================================
const APP_NAME = "SpendWise";
const CURRENCY = "$";

// Default static category expenses matching the dashboard shell
let foodExpense = 340;
let transportExpense = 180;
let rentExpense = 1200;
let entertainmentExpense = 90;
let savingsDeposit = 400;
let utilitiesExpense = 155;

// ==========================================
// 2. Reusable Calculation & Helper Functions
// ==========================================

/**
 * Prompts the user for a numeric input and safely converts it to a Number.
 * Falls back to a default value if the user cancels or enters invalid text.
 */
function getNumericInput(promptMessage, fallbackValue) {
  const rawInput = prompt(promptMessage, fallbackValue);

  if (rawInput === null || rawInput.trim() === "") {
    return fallbackValue;
  }

  const parsedValue = Number(rawInput);
  return Number.isNaN(parsedValue) || parsedValue < 0 ? fallbackValue : parsedValue;
}

/**
 * Calculates the total of all category expenses.
 */
function calculateTotalExpenses(expensesList) {
  let total = 0;
  for (let i = 0; i < expensesList.length; i++) {
    total += expensesList[i];
  }
  return total;
}

/**
 * Calculates the remaining budget balance after deducting total expenses.
 */
function calculateRemainingBalance(totalBudget, totalExpenses) {
  return totalBudget - totalExpenses;
}

/**
 * Calculates the percentage of the budget spent so far.
 */
function calculateBudgetUsagePercentage(totalBudget, totalExpenses) {
  if (totalBudget <= 0) {
    return 0;
  }
  return Number(((totalExpenses / totalBudget) * 100).toFixed(1));
}

/**
 * Formats and displays the complete budget report in the browser console.
 */
function displayBudgetSummary(userName, monthName, totalBudget, totalExpenses, remainingBalance, usagePercent) {
  console.log("========================================");
  console.log(`${APP_NAME} — ${monthName} Budget Summary`);
  console.log("========================================");
  console.log(`Account Holder   : ${userName}`);
  console.log(`Monthly Budget   : ${CURRENCY}${totalBudget.toFixed(2)}`);
  console.log(`Total Expenses   : ${CURRENCY}${totalExpenses.toFixed(2)}`);
  console.log(`Remaining Balance: ${CURRENCY}${remainingBalance.toFixed(2)}`);
  console.log(`Budget Used      : ${usagePercent}%`);
  console.log("----------------------------------------");

  if (remainingBalance >= 0) {
    console.log(`Status           : On Track (${CURRENCY}${remainingBalance.toFixed(2)} left to spend)`);
  } else {
    console.log(`Status           : Over Budget by ${CURRENCY}${Math.abs(remainingBalance).toFixed(2)}`);
  }
  console.log("========================================");
}

// ==========================================
// 3. Collect User Input & Run Application
// ==========================================
function runSpendWise() {
  console.log(`${APP_NAME} JavaScript engine initialized.`);

  // Collect user profile and budget details via prompt()
  const userNameInput = prompt("Welcome to SpendWise! Enter your name:", "Alex");
  const userName = userNameInput && userNameInput.trim() !== "" ? userNameInput.trim() : "Guest User";

  const budgetMonthInput = prompt("Enter the budget month:", "November 2026");
  const budgetMonth = budgetMonthInput && budgetMonthInput.trim() !== "" ? budgetMonthInput.trim() : "Current Month";

  const monthlyBudget = getNumericInput("Enter your total monthly budget ($):", 3200);

  // Collect updated spending inputs for key categories
  foodExpense = getNumericInput("Enter your Food & Groceries spending ($):", foodExpense);
  transportExpense = getNumericInput("Enter your Transport spending ($):", transportExpense);
  rentExpense = getNumericInput("Enter your Rent & Housing spending ($):", rentExpense);

  // Store all category expenses in an array for processing
  const allExpenses = [
    foodExpense,
    transportExpense,
    rentExpense,
    entertainmentExpense,
    savingsDeposit,
    utilitiesExpense
  ];

  // Perform budget calculations using reusable functions
  const totalExpenses = calculateTotalExpenses(allExpenses);
  const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
  const usagePercent = calculateBudgetUsagePercentage(monthlyBudget, totalExpenses);

  // Display clearly labeled results in the browser console
  displayBudgetSummary(
    userName,
    budgetMonth,
    monthlyBudget,
    totalExpenses,
    remainingBalance,
    usagePercent
  );
}

runSpendWise();
