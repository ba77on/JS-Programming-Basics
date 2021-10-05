function convertingMeasures(arg1, input, output) {
    let number = Number(arg1);

    if (input === "m") {
        number = number * 100;
    } else if (input === "mm") {
        number = number / 10;
    }
    
    if (output === "m") {
        number = number / 100;
    } else if (output === "mm"){
    number = number * 10;}

    console.log(number.toFixed(3))
}
convertingMeasures("12", "mm", "m")