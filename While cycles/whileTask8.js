function graduationV2(input) {
    let index = 0;
    let studentName = input[index];
    index++;

    classesCount = 1;
    grade = 0;

    numbersOfFailures = 1;
    failuresCount = 0;
    let flag = false;

    while (classesCount <= 12) {
        let gradePerClass = Number(input[index]);
        index++;
        if (gradePerClass >= 4.00) {


        } else {
            failuresCount++;

        }
        if (failuresCount >= numbersOfFailures) {
            flag = true;
            break;

        }

        grade += gradePerClass;
        classesCount++;
    }
    if (flag) {
        console.log(`${studentName} has been excluded at ${classesCount} grade`)

    } else {
        console.log(`${studentName} graduated. Average grade: ${(grade / 12).toFixed(2)}`);
    }



}
graduationV2([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ])