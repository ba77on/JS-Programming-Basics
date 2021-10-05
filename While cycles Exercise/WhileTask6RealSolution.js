function cakeParts(input) {
    let index = 0;
    let cakeWidth = (input[index]);
    index++;
    let cakeLength = (input[index]);
    index++;
    let cakePieces = cakeWidth * cakeLength;
    let cakeParts = (input[index]);
    index++;
    cakeCounter = 0;

    while (cakeParts !== "STOP") {
        cakeCounter += Number(cakeParts);

        if (cakeCounter >= cakePieces) {
            let diff = cakeCounter - cakePieces;
            console.log(`No more cake left! You need ${diff} pieces more.`)
            break;
        }
        cakeParts = input[index];
        index++;

    }


    if (cakeParts === "STOP") {
        if (cakePieces >= cakeCounter) {
            let resylt = cakePieces - cakeCounter;
            console.log(`${resylt} pieces are left.`)
        } else {
            let result = cakeCounter - cakePieces;
            console.log(`No more cake left! You need ${result} pieces more.`)
        }
    }

}
cakeParts(['10', '10', 'STOP', '20', '20', '20', '20', '21'
])