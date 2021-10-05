function sumSeconds(arg1, arg2, arg3) {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThurd = Number(arg3);

    let sumSecondsBoth = timeFirst + timeSecond + timeThurd;
    let minutes = Math.floor(sumSecondsBoth / 60);
    let seconds = sumSecondsBoth % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
    }
sumSeconds (35, 45, 44)