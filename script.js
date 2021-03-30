'use strict';

let today = new Date();
let monthToday = today.getMonth();
let dayToday = today.getDate();
let yearToday = today.getFullYear();


//Add the date to the screen in top right corner
document.getElementById("date-today").innerHTML += `${dayToday} / ${monthToday} / ${yearToday}`;

// Get the last day of the last month
var lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
let amountOfDaysInLastMonth = lastDayOfLastMonth.getDate();

//Amount of days in current
var lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let amountOfDaysInThisMonth = lastDayOfThisMonth.getDate();

//Define the budget
let totalBudget = 350;


/* ------- Calculate the amount of days left untill the new budget ------- */
let daysLeft;

function calculateDaysIntillNextBudget(dayToday) {
    if (dayToday => 25) {
        daysLeft = (amountOfDaysInThisMonth - dayToday) + 24;
        console.log(`We moeten deze periode nog ${daysLeft} dagen doen met het budget`);
        return daysLeft;

    }
    else if (dayToday <= 24) {
        daysLeft = 24 - dayToday;
        console.log(`We moeten deze periode nog ${daysLeft} dagen doen met het budget`);
        return daysLeft;
    }
}
daysLeft = calculateDaysIntillNextBudget(dayToday);


/* ------- Calculate the budget per day based on the amount of days in te week -------------------------------------------------------- */

let dayBudget;

function calculateBudgetPerDay(totalBudget, amountOfDaysInThisMonth) {
    if (dayToday => 25) {
        dayBudget = totalBudget / amountOfDaysInThisMonth;
        console.log(`CHECK daybudget ${dayBudget}`);
        console.log(`We kunnen per dag ${dayBudget} uitgeven`);
        return dayBudget;

    } else if (dayToday <= 24) {
        dayBudget = totalBudget / amountOfDaysInLastMonth;
        console.log(`CHECK daybudget ${dayBudget}`);
        console.log(`We kunnen per dag ${dayBudget} uitgeven`);
        return dayBudget;
    }
}
dayBudget = calculateBudgetPerDay(totalBudget, amountOfDaysInThisMonth);



/* ------- Calculate the budget that is left -------------------------------------------------------- */

function calculateBudgetLeft(dayBudget, daysLeft) {
    let budgetLeft = dayBudget * daysLeft;
    return budgetLeft;
}
let budgetLeft = calculateBudgetLeft(dayBudget, daysLeft);


/* ------- Calculate the budget that is left for tomorrow -------------------------------------------------------- */
function calculateBudgetLeftTomorrow(dayBudget, daysLeft) {
    let budgetLeftTomorrow = (dayBudget * daysLeft) - dayBudget;
    return budgetLeftTomorrow;
}
let budgetLeftTomorrow = calculateBudgetLeftTomorrow(dayBudget, daysLeft);


/* ------- Round the numbers to 2 decimals behind the dot -------------------------------------------------------- */
function roundedNumber(numberToRound) {
    var rounded = numberToRound.toFixed(2);
    return rounded;
}

let roundedBudgetLeft = roundedNumber(budgetLeft);
let roundedTotalBudget = roundedNumber(totalBudget);
let roundedDayBudget = roundedNumber(dayBudget);
let roundedBudgetLeftTomorrow = roundedNumber(budgetLeftTomorrow);


document.getElementById("budget-left").innerHTML += `${roundedBudgetLeft}`;
document.getElementById("budget-total").innerHTML += `€ ${roundedTotalBudget}`;
document.getElementById("budget-dayly").innerHTML += `€ ${roundedDayBudget}`;
document.getElementById("budget-left-tomorrow").innerHTML += `€ ${roundedBudgetLeftTomorrow}`;
document.getElementById("days-left").innerHTML += `${daysLeft}`;








