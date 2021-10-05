function sumOfNumbers (arg1) {
    let num = Number (arg1); 
    let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i * i;
}
console.log(sum);
}
sumOfNumbers ("7")