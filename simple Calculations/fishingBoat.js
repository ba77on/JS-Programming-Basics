function fishingBoat(groupBudjet, season, fishermenCount) {
    groupBudjet = Number(groupBudjet);
    fishermenCount = Number(fishermenCount);
    let = springBoat = 3000;
    let summerOrAutumnBoat = 4200;
    let winterBoat = 2600;

    let result = 0;
    if (season === "Spring") {
        result += springBoat;
    } else if (season === "Summer" || season === "Autumn") {
        result += summerOrAutumnBoat;
    } else if (season === "Winter") {
        result += winterBoat;
    }
    if (fishermenCount <= 6) {
        result *= 0.90;
    } else if (fishermenCount >= 7 && fishermenCount <= 11) {
        result *= 0.85;
    } else {
        result *= 0.75;
    }

    if ((season !== "Autumn") && (fishermenCount % 2 === 0)) {
        result *= 0.95;
    }
    let change = Math.abs(result - groupBudjet).toFixed(2);

    if (groupBudjet >= result) {
        console.log(`Yes! You have ${change} leva left.`)
    } else {
        console.log(`Not enough money! You need ${change} leva.`)
    }

}