function whileOne (input) {
    let index = 0;
    let text = input[index];
    let count = 0;
    index++;

    while (text != "Stop") {
        count++;

        text = input[index]; 
        index++; 
        
    }
    console.log(count)
}