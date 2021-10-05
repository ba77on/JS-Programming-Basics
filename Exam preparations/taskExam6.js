function annieTripGames(input) {
    let index = 0;
    let count = Number(input[index]);
    index++;
    let totalBakedSweet = 0;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        let name = input[index];
        index++;
        let command = input[index];
        index++;
        let cookiesCount = 0;
        let cakesCount = 0;
        let wafflesCount = 0;

        while(command !== "Stop baking!") {
            let type = command;
            let countOfBakingsSweets = Number(input[index]);
            index++;
            switch (type) {
                case "cookies":
                    cookiesCount += countOfBakingsSweets;
                    sum += countOfBakingsSweets * 1.50;
                    break;
                case "cakes":
                    cakesCount += countOfBakingsSweets;
                    sum += countOfBakingsSweets * 7.80;
                    break;

                case "waffles":
                    wafflesCount += countOfBakingsSweets;
                    sum += countOfBakingsSweets * 2.30;
                    break;
            }

            command = input[index];
            index++;

        }

        totalBakedSweet += cookiesCount + cakesCount + wafflesCount;
        console.log(`${name} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`);

    }
    console.log(`All bakery sold: ${totalBakedSweet}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);
}

annieTripGames([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',])