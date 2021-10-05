function taskSeven(productName, controlNumber, budjet) {
    let num = Number(controlNumber);
    budjet = Number(budjet);
    result = 0;
    for (let i = 0; i < productName.length; i++) {
        let PrName = productName[i]

        if (PrName === "a" || PrName === "e" || PrName === "i" || PrName === "o"
            || PrName === "u" || PrName === "y") {
result += 3;
        } else {
            result +=1;
        }
    }
    result *= num
    if (result <= budjet) {
        let clearreslt = Math.abs(result - budjet)
        console.log(`${productName} bought. Money left: ${clearreslt.toFixed(2)}`)

    } else {
        console.log(` Cannot buy ${productName}. Product value: ${result.toFixed(2)}`)
    }
}
taskSeven("apple", 2, 20)