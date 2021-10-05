function jessyTrip(input) {
    let vacationExpenses = Number(input[0]);
    let amount = Number(input[1]);

    let index = 2;
    let days = 0;
    let spendMoneyDays = 0;

    let currentAction = input[index];
    let currentAmount = Number(input[index + 1]);
    while ((currentAction !== undefined) && (spendMoneyDays <= 5)) {
        if (currentAction === "spend") {
            amount = Math.max((amount - currentAmount), 0);
            spendMoneyDays++;
        } else if (currentAction === "save") {
            amount += currentAmount;
            spendMoneyDays = 0;
        }
        index += 2;
        days++;
        currentAction = input[index];
        currentAmount = Number (input[index + 1]);
    }


    if (spendMoneyDays === 5) {
        console.log("You can't save the money.");
        console.log(`${days}`);
    } else if (amount >= vacationExpenses) {
        console.log(`You saved the money for ${days} days.`);
    }

}

jessyTrip(['2000', '1000', 'spend', '1200', 'save', '2000'])