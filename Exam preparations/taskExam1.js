function savingForFestival(input) {
    let desiIncome = Number(input[0]);
    let numofMonths = Number(input[1]);
    let personalMoney = Number(input[2]);

    let moneyForUnkownCircumstances = desiIncome * 0.30;

    let moneySavedPerMonth = desiIncome - (personalMoney + moneyForUnkownCircumstances);

    let moneySavedInPercentage = (moneySavedPerMonth / desiIncome) * 100;

    let allMoneySaved = moneySavedPerMonth * numofMonths;

    console.log(`She can save ${moneySavedInPercentage.toFixed(2)}%`);
    console.log(`${allMoneySaved.toFixed(2)}`);

}
savingForFestival(["3500", "3", "997"])