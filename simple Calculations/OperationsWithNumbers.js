function calculations(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let plis = "+";
    let minus = "-";
    let multi = "*";
    let devide = "/";

    let result = 0;


    switch (operator) {
        case "plisOperator": result = n1 + n2;
            if (result % 2 === 0) {
                console.log(`${n1} ${plis}   ${n2} = ${result} - even`);


            }
    }


}

(10, 12, "+")