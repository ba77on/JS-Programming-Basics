function steps(input) {
    let index = 0;
    let stepsPerOneWalk = (input[index]);
    let stepsAllRotation = 0;
    let targetSteps = 10000;
    let maxSteps = 1;

    index++;

    while (stepsAllRotation != "Going home") {
        stepsAllRotation += Number(stepsPerOneWalk);

        if (stepsAllRotation >= targetSteps) {
            console.log("Goal reached! Good job!");
            break;
        }
        index++;
    }

    if (stepsPerOneWalk === "Going home") {
        stepsPerOneWalk = Number(input[index]);
        index++;
    } else {
        (stepsPerOneWalk !== "Going home")
        stepsAllRotation += Number(stepsPerOneWalk);
        stepsPerOneWalk = (input[index]);
        index++;
    }

    if (stepsAllRotation >= targetSteps) {
        console.log("Goal reached! Good job!");
    }
}

if (stepsAllRotation < targetSteps) {
    let result = targetSteps - stepsAllRotation;
    console.log(`${result} more steps to reach goal.`);
}
steps(['1500', '300', '2500', '3000', 'Going home', '200'])