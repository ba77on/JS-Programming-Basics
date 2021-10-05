function balanceCheck(input) {
    let index = 0;
    let transactionCount = Number(input[index]);
    index++;
    let currentTransaction = 0;
    let total =0;
    while (currentTransaction < transactionCount) {
        currentTransaction++;
        let money = Number(input[index]);
        index++;

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + money.toFixed(2)); 
        total += money

    }
    console.log(`Total: ${total.toFixed(2)}`)
}
balanceCheck([3, 5.51, 69.42, 100])