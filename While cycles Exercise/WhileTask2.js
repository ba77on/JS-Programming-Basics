function examPreparations(input) {
    let MaxUnstatisfiedGrades = Number(input.shift());
    let unsatisfiedGrade = 0;

    let currentExam = input.shift();
    let currentGrade = Number(input.shift());

    let passedExams = 0;
    let lastExam = "";
    let sumOfAllGrades = 0;

    while ((currentExam !== "Enough") && (unsatisfiedGrade < MaxUnstatisfiedGrades)) {
        passedExams++;
        lastExam = currentExam;
        sumOfAllGrades += currentGrade;

        if (currentGrade <= 4) {
            unsatisfiedGrade++;
        }
        currentExam = input.shift();
        currentGrade = Number(input.shift());
    }
    
    if (currentExam === "Enough") {
        let averageScore = (sumOfAllGrades / passedExams);

        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${passedExams}`);
        console.log(`Last problem: ${lastExam}`);
    } else {

        console.log(`You need a break, ${unsatisfiedGrade} poor grades.`)
    }
}
examPreparations (['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough'])