function travel(budjet, season) {
    budjet = Number(budjet);

    let destination = "";
    let price = 0;
    let type = "";

    if (season === "summer") {
        if (budjet <= 100) {
            price += (budjet * 0.30);
            destination = "Bulgaria";
        } else if (budjet > 100 && budjet <= 1000) {
            price += (budjet * 0.40);
            destination = "Balkans";
        } else {
            price += (budjet * 0.90);
            destination = "Europe"
        }
        type = "Camp";

    } else if (season === "winter") {
        if (budjet <= 100) {
            price += (budjet * 0.70);
            destination = "Bulgaria";
        } else if (budjet > 100 && budjet <= 1000) {
            price += (budjet * 0.80);
            destination = "Balkans"
        } else {
            price += (budjet * 0.90);
            destination = "Europe";

        }
        type = "Hotel"
    }

    if (destination === "Europe") {
        type = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${price.toFixed(2)}`);
}
travel(175, "winter")