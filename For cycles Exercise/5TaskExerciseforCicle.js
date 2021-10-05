function cleverLily (liliAge, washingMachine, singleToyPrice) {
    liliAge = Number (liliAge); 
    washingMachine = Number(washingMachine); 
    singleToyPrice = Number(singleToyPrice); 
    let toysCount = 0; 
    let savedMoney = 0;

    for (let year = 1; year <= liliAge; year++) {
        if (year % 2 !== 0) {
            toysCount++;
        } else {
            savedMoney += (year * 5) - 1;
        }
    }
    let savedMoneyFromToys = toysCount * singleToyPrice;
    let totalSavedMoney = savedMoney + savedMoneyFromToys;

    if (totalSavedMoney >= washingMachine) {
        let leftMoney = (totalSavedMoney - washingMachine).toFixed(2);
        console.log(`Yes! ${leftMoney}`);
    } else {
    let neededMoney = (washingMachine - totalSavedMoney).toFixed(2)
    console.log(`No! ${neededMoney}`);
}

}
cleverLily (21, 1570.98, 3)