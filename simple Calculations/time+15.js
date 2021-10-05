function timeplus(arg1, arg2) {
    let hour = Number(arg1);
    let minutes = Number(arg2) + 15;

    if (minutes >= 60) {
        hour += 1;
        minutes -=60
    }
if (hour > 23){
    hour = 0;
}

    if (minutes < 9){
console.log (`${hour}:0${minutes}`)
    } else {
        console.log(`${hour}:${minutes}`)
    }
}
timeplus(23, 59)