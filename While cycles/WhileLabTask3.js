function sumOfNumbers (input) {
let sum = 0;
let index = 0;
let num = input[index];
index++;

while (num != "Stop") {
    sum += Number(num);

    num = input[index];
    index++;
}
console.log(sum)
}
sumOfNumbers ([10, 20, 30, 45, "Stop"])