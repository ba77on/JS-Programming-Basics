function cruiseGames(input) {
    let index = 0;
    let name = input[0];
    index++;
    let countGame = Number(input[index]);
    index++;
    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    let counterVolleybalGame = 0;
    let counterTennisGame = 0;
    let counterBadmintonGame = 0;

    for (let i = 0; i < countGame; i++) {
        let gameName = input[index];
        index++;
        let score = Number(input[index]);
        index++;
        switch (gameName) {
            case "volleyball":
                volleyballPoints += score * 1.07;
                counterVolleybalGame++;
                break;
            case "tennis":
                tennisPoints += score * 1.05;
                counterTennisGame++;
                break;
            case "badminton":
                badmintonPoints += score * 1.02;
                counterBadmintonGame++;
                break;
        }
    }
    let averageVolleyballPoints = Math.floor(volleyballPoints /counterVolleybalGame);
    let averageTennisPoints = Math.floor(tennisPoints / counterTennisGame);
    let averageBadmintonPoints = Math.floor(badmintonPoints / counterBadmintonGame);

    let totalPoints = volleyballPoints + tennisPoints + badmintonPoints;
     if(averageBadmintonPoints >= 75 && averageTennisPoints >= 75 && averageVolleyballPoints >= 75) {
         console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalPoints)} points.`)
     } else {
         console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalPoints)}.`)
     }

}
cruiseGames([
    'Annie',      '5',
    'badminton',  '34',
    'tennis',     '76',
    'badminton',  '10',
    'volleyball', '62',
    'badminton',  '56'
  ])