# Budget Buddy - Medium-Fidelity Prototype (Phase 2.1)

A standalone, offline-capable personal budgeting web application built with HTML, CSS, and vanilla JavaScript. Designed for privacy-conscious users who want to track spending, manage income, and plan budgets without sharing sensitive data.

## How to Run

1. Unzip the project folder to any location.
2. Open `index.html` directly in Google Chrome on a Windows 10 PC.
3. No internet connection, server, or installation is required.

The app is sized to 640 x 960 px per the course device specification. On smaller viewports it fills the screen.

## Seed Data

On first launch the app populates localStorage with realistic sample data for a college student (March/April 2026):

- 22 transactions, including one-time expenses, income, and recurring charges
- 6 budget categories: Groceries, Dining, Transport, Entertainment, Utilities, Rent
- 2 savings goals: Emergency Fund and New Laptop

To reset to the original seed data, open Chrome DevTools (F12), go to the Console tab, type `localStorage.clear()`, press Enter, and then refresh the page.

## Feature Sets

| Feature Set | Top-Level Screen | Purpose |
|-------------|-----------------|---------|
| Recording | Transactions list (landing screen) | Enter income, one-time expenses, and recurring charges |
| Planning | Budget Plan overview | Set spending limits per category and define savings goals |
| Tracking | Spending Tracker dashboard | Visualize actual spending vs. planned budgets |

Navigation between feature sets uses the bottom navigation bar (Record / Plan / Track).

## Tasks That Can Be Accomplished

### Shallow Tasks

1. Sort the transaction list: On the Recording screen, use the "Sort by" dropdown to reorder by date, amount, or category.
2. Filter transactions by type: On the Recording screen, click the filter tabs (All / Expenses / Income / Recurring) to show only that type.
3. Check remaining budget for a category: On the Tracking dashboard, view any category row to see the spent amount, budget limit, and percentage bar.

### Moderate Tasks

4. Search for a specific transaction: On the Recording screen, click the search icon, type a keyword (e.g. "Trader" or "Chipotle"), and view the filtered results.
5. Add a categorized one-time expense: Click the "+" button on Recording, select "Expense", fill in description (e.g. "Target school supplies"), amount ($34.50), pick category "Education", set date to 2026-04-06, and click Save.
6. Add income from a specific source: Click "+", select "Income", enter description ("Tutoring session"), amount ($45), pick category "Freelance", set date, and save.
7. Edit an existing budget category limit: On the Planning screen, click any category (e.g. "Groceries"), change the monthly limit to $350, and save.
8. View category spending breakdown: On the Tracking dashboard, click a category (e.g. "Groceries") to see the progress bar, amount spent vs. limit, and all transactions in that category for the month.

### Deep Tasks

9. Add a new recurring subscription: Click "+" on Recording, select "Recurring", enter description ("Netflix Standard"), amount ($15.49), category "Subscriptions", set date to 2026-04-06, frequency to "Monthly", next due date to 2026-05-06, toggle the reminder on, and save.
10. Create a new budget category: On Planning, click the "+" icon next to the header, enter name ("Clothing"), set limit ($60), pick a color (Rose) and icon (CL), and save.
11. Create a detailed savings goal: On Planning under "Savings Goals", click "+", enter name ("Summer Trip"), target amount ($800), already saved ($150), target date (2026-07-15), monthly contribution ($100), add a note, and save.

## Technical Notes

- All data is persisted in localStorage. No remote servers, APIs, or databases.
- The app uses no external dependencies, CDNs, or build tools.
- Sans-serif system font stack is used (Segoe UI, Arial, Helvetica).
- The donut chart on the Tracking screen is drawn with the HTML5 Canvas API.
