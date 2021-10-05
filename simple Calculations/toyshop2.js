function toyshopAgain(arg1, arg2, arg3, arg4, arg5, arg6) {
    let Trip = Number(arg1);
    let puzzles = Number(arg2);
    let SpeakingDolls = Number(arg3);
    let Teddybears = Number(arg4);
    let minions = Number(arg5);
    let trucks = Number(arg6);

    let packProfit = puzzles * 2.6 + SpeakingDolls * 3 + Teddybears * 4.1 + minions * 8.2 + trucks * 2;
    let alltoys = puzzles + SpeakingDolls + Teddybears + minions + trucks;

    if (alltoys >= 50) {
        packProfit = packProfit * 0.75;
    }
    packProfit = packProfit * 0.9;
    let diff = Math.abs(Trip - packProfit);
if (packProfit >= Trip) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`)
} else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
}
}
toyshopAgain(40.8, 20, 25, 30, 50, 10)