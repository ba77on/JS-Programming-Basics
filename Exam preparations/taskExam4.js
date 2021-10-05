function darts(input) {
    let index = 0;
    let points = Number(input[index]);
    index++;
    let isBullseye = false;
    let counter = 0;

    while (points > 0) {
        let sector = input[index];
        index++;
        let score = Number(input[index]);
        index++;
        switch (sector) {
            case "bullseye":
                isBullseye = true;
                break;
            case "number section":
                points -= score;
                break;
            case "double ring":
                points -= score * 2;
                break;
            case "triple ring":
                points -= score * 3;
                break;

        }
        if (isBullseye) {
            counter++;
            break;
        }
        counter++;
    }
    if (points === 0) {
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    } else if (isBullseye) {
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
    } else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(points)}.`);
    }

}
darts([
    '75',
    'triple ring',
    '17',
    'number section',
    '16',
    'triple ring',
    '13',
    'double ring',
    '10'
  ]
  )