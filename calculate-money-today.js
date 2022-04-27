
//define a variable for the result div to hide/show it
const showResult = document.querySelector('.result');
const showRoundedMoneyLeftToday = function () {
    showResult.classList.remove('hidden');
}



let moneyLeftToday;
let roundedMoneyLeftToday;

//Calculates the amount of money that is left to spend today based on the input
document.querySelector('.calculate-button').addEventListener('click', function () {

    //get the amount of money from the input
    const moneyInBank = Number(document.querySelector('#calculate-input').value);

    const inputAlert = document.querySelector('.input-alert');
    if (moneyInBank == "") {
        inputAlert.classList.remove('hidden');
        showResult.classList.add('hidden');

        return false;
    } else {
        inputAlert.classList.add('hidden');

        //calculate the money left for today
        calcMoneyLeftToday(moneyInBank, roundedBudgetLeft);

        //round down the number to 2 decimals
        roundDownTwoDecimals(moneyLeftToday);

        //un-hide the result div
        showRoundedMoneyLeftToday(roundedMoneyLeftToday, moneyLeftToday);

        //check of er wel geld genoeg is om uit te geven en presenteer dit
        checkBalance(moneyLeftToday, roundedMoneyLeftToday);
    }

});


//round down the number to 2 decimals
function roundDownTwoDecimals(moneyLeftToday) {
    roundedMoneyLeftToday = roundedNumber(moneyLeftToday);
    return roundedMoneyLeftToday;
}


//calculate the money left for today
function calcMoneyLeftToday(moneyInBank, roundedBudgetLeft) {
    moneyLeftToday = moneyInBank - roundedBudgetLeft;
    console.log(moneyLeftToday);
    return moneyLeftToday;
}

//check if there is money left to spend today and communicate how much
function checkBalance(moneyLeftToday, roundedMoneyLeftToday) {
    if (moneyLeftToday <= 0) {
        document.getElementById("spendable").textContent = `NADA`;
    } else {
        document.getElementById("spendable").textContent = `€ ${roundedMoneyLeftToday}`;
    }
}


