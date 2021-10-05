function solve (arg1) {
    let num = Number(arg1); 
    let result = 0;
    for (let number = 1; number <= num; number++) {
        result += (number* number)
    }
    console.log(result)
}
solve (7)