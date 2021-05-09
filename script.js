'use strict';


/* ------- Get all the information about the budget and the date that is the startingdate ------- */
//Define the budget
const totalBudget = 350;
const startBudgetDay = 24;


/* ------- Get all the information about the dates ------- */
let today = new Date();
let monthToday = today.getMonth();
let dayToday = today.getDate();
let yearToday = today.getFullYear();


//Add the date to the screen in top right corner
document.getElementById("date-today").innerHTML += `${dayToday} / ${monthToday} / ${yearToday}`;


// Get the amount of days in last month
let lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
let amountOfDaysInLastMonth = lastDayOfLastMonth.getDate();

//Amount of days in current month
let lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
let amountOfDaysInThisMonth = lastDayOfThisMonth.getDate();


/* ------- Calculate the amount of days left untill the new budget ------- */
let daysLeft;

function calculateDaysIntillNextBudget(dayToday) {
    if (dayToday >= startBudgetDay) {
        daysLeft = (amountOfDaysInThisMonth - dayToday) + startBudgetDay;
        return daysLeft;

    }
    else if (dayToday <= startBudgetDay) {
        daysLeft = startBudgetDay - dayToday;
        return daysLeft;
    }
}
daysLeft = calculateDaysIntillNextBudget(dayToday);


/* ------- Calculate the budget per day based on the amount of days in te week -------------------------------------------------------- */
let dayBudget;

function calculateBudgetPerDay(totalBudget, amountOfDaysInThisMonth) {
    if (dayToday => (startBudgetDay + 1)) {
        dayBudget = totalBudget / amountOfDaysInThisMonth;
        return dayBudget;

    } else if (dayToday <= startBudgetDay) {
        dayBudget = totalBudget / amountOfDaysInLastMonth;
        return dayBudget;
    }
}
dayBudget = calculateBudgetPerDay(totalBudget, amountOfDaysInThisMonth);



/* ------- Calculate the budget that is left -------------------------------------------------------- */

function calculateBudgetLeft(dayBudget, daysLeft) {
    let budgetLeft = (dayBudget * daysLeft) - dayBudget;
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


let budgetover = roundedBudgetLeft;

for (let i = dayToday + 1; i <= (startBudgetDay - 1); i = i + 1) {
    budgetover = budgetover - dayBudget;
    let roundedbudgetover = roundedNumber(budgetover);
    console.log(`Budget op de ${i}e is €${roundedbudgetover}`);
}

document.getElementById("budget-left").innerHTML += `${roundedBudgetLeft}`;
document.getElementById("budget-total").innerHTML += `€ ${roundedTotalBudget}`;
document.getElementById("budget-dayly").innerHTML += `€ ${roundedDayBudget}`;
document.getElementById("days-left").innerHTML += `${daysLeft}`;
// document.getElementById("budget-left-tomorrow").innerHTML += `€ ${roundedBudgetLeftTomorrow}`;







