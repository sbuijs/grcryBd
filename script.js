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
            case (monthToday = 2):
                daysInMonth = 28;
                break;

            case (monthToday = 4):
            case (monthToday = 6):
            case (monthToday = 9):
            case (monthToday = 11):
                daysInMonth = 30;
                break;

            case (monthToday = 0):
            case (monthToday = 1):
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
            if (dayToday > 25) {
                daysLeft = (30 - dayToday) + 25;
                return daysLeft;
            }
            else if (dayToday <= 25) {
                daysLeft = 25 - dayToday;
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


        document.getElementById("budget-left").innerHTML += `${budgetLeft}`;
        document.getElementById("budget-total").innerHTML += `€ ${totalBudget}`;
        document.getElementById("budget-dayly").innerHTML += `€ ${dayBudget}`;
        document.getElementById("budget-left-tomorrow").innerHTML += `€ ${budgetLeftTomorrow}`;