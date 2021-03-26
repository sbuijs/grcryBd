  'use strict';

        //get the month
        let d = new Date();
        let monthToday = d.getMonth();
        //get the day number
        let b = new Date();
        let dayToday = b.getDate();

        console.log(`Vandaag is het de ${dayToday}e van maand ${monthToday}`);


        const totalBudget = 350;
        console.log(`Het totaalbudget is €${totalBudget}`);

        //caluculate the amount of days for the budget
        //this goes from the 24th of the month till the next 24th of the month
        let daysInMonth;
        //define how many days there are in a month based on the month of today
        switch (monthToday) {
            case (monthToday = 1):
                daysInMonth = 28;
                break;

            case (monthToday = 4):
            case (monthToday = 6):
            case (monthToday = 9):
            case (monthToday = 11):
                daysInMonth = 30;
                break;

            case (monthToday = 0):
            case (monthToday = 2):
            case (monthToday = 3):
            case (monthToday = 3):
            case (monthToday = 5):
            case (monthToday = 7):
            case (monthToday = 8):
            case (monthToday = 10):
                daysInMonth = 31;
                break;
        }

        console.log(`Het aantal dagen in deze budget periode is ${daysInMonth}`);

        let daysLeft;

        // Calculate the amount of days untill the new budget
        function calculateDaysIntillNextBudget(dayToday) {
            if (dayToday > 24) {
                daysLeft = (daysInMonth - dayToday) + 24;
                return daysLeft;
            }
            else if (dayToday <= 24) {
                daysLeft = 24 - dayToday;
                return daysLeft;
            }
        }
        daysLeft = calculateDaysIntillNextBudget(dayToday);
        console.log(`We moeten deze periode nog ${daysLeft} dagen doen met het budget`);



        // Calculate the budget per day based on the amount of days in te week
        function calculateBudgetPerDay(totalBudget, daysInMonth) {
            let dayBudget = totalBudget / daysInMonth;
            return dayBudget;
        }
        let dayBudget = calculateBudgetPerDay(totalBudget, daysInMonth);
        console.log(`We kunnen per dag ${dayBudget} uitgeven`);


        function calculateBudgetLeft(dayBudget, daysLeft) {
            let budgetLeft = dayBudget * daysLeft;
            return budgetLeft;
        }
        let budgetLeft = calculateBudgetLeft(dayBudget, daysLeft);


        function calculateBudgetLeftTomorrow(dayBudget, daysLeft) {
            let budgetLeftTomorrow = (dayBudget * daysLeft) - dayBudget;
            return budgetLeftTomorrow;
        }
        let budgetLeftTomorrow = calculateBudgetLeftTomorrow(dayBudget, daysLeft);


        //Function that rounds numbers to 2 decimals after the dot
        function roundedNumber(numberToRound){
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












// var num = Number(0.005) // The Number() only visualizes the type and is not needed
// var roundedString = num.toFixed(2);
// var rounded = Number(roundedString); 

// function roundItUp(number){
//   let roundedNumber = number.toFixed(2);
// }

// let rounded = Number()