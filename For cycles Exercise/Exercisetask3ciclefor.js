function specialComplexOfNumbers (start, end, divider) {
    start = Number(start);
    end = Number (end);
    divider = Number (divider);
    let result = 0;

    for(let i = start; i <= end; i++) {
        if (i % divider === 0) {
            result += i;
        }
    }
  console.log(result);  

}
specialComplexOfNumbers (10, 30, 7)