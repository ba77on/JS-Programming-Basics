function flowers(flowerType, flowerCount, budjet) {
    flowerCount = Number(flowerCount);
    budjet = Number(budjet);

    let soloRosePrice = 5;
    let soloDalliahPrice = 3.80;
    let soloTulipPrice = 2.80;
    let soloNarcissusPrice = 3.00;
    let soloGladiolusPrice = 2.50;


    let result = 0;

    switch (flowerType) {
        case "Roses": result += flowerCount * soloRosePrice;
            if (flowerCount > 80) {
                result *= 0.90;
            }
            break;

        case "Dahlias": result += flowerCount * soloDalliahPrice;
            if (flowerCount > 90) {
                result *= 0.85;
            }
            break;

        case "Tulips": result += flowerCount * soloTulipPrice;
            if (flowerCount > 80) {
                result *= 0.85;

            }
            break;

        case "Narcissus": result += flowerCount * soloNarcissusPrice;
            if (flowerCount < 120) {
                result *= 1.15;

            }
            break;

        case "Gladiolus": result += flowerCount * soloGladiolusPrice;
            if (flowerCount < 80) {
                result *= 1.20;
            }
            break;

    }
    let change = Math.abs(budjet - result).toFixed(2);

    if (budjet >= result) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${change} leva left.`)

    } else {
        console.log(`Not enough money, you need ${change} leva more.`)
    }
}
flowers("Narcissus", 119, 360)