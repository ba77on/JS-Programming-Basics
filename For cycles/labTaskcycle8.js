function specialNumbers(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let n = Number(arg3);
    for (let i = start; i <= end; i++) {
        let number = Math.pow(n, 2)
        if (i % number === 0) {
            console.log(`Very special number: ${i}`)
        } else if (i % n === 0) {
            console.log(`Special number: ${i}`)
        } else {
            console.log(i)
        }
    }
}
specialNumbers(1, 10, 4)