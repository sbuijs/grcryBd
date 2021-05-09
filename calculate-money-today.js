
//define a variable for the result div to hide/show it
const showResult = document.querySelector('.result');
const showRoundedMoneyLeftToday = function () {
    showResult.classList.remove('hidden');
}




//Calculates the amount of money that is left to spend today based on the input
document.querySelector('.calculate-button').addEventListener('click', function () {

    //get the amount of money from the input
    const moneyInBank = Number(document.querySelector('#calculate-input').value);


    //calculate the money left for today
    let moneyLeftToday = moneyInBank - roundedBudgetLeft;
    console.log(moneyLeftToday);

    //round down the number to 2 decimals
    let roundedMoneyLeftToday = roundedNumber(moneyLeftToday);
    console.log(roundedMoneyLeftToday);

    //add the result to the page
    document.getElementById("spendable").textContent = `€ ${roundedMoneyLeftToday}`;

    //un-hide the result div
    showRoundedMoneyLeftToday();

});
