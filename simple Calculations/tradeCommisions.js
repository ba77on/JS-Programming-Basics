function tradeComisions(arg1, arg2, ) {
    let city = arg1;
    let preSales = Number(arg2);
    let result = 0;


    if (city === "Sofia") {
        if (preSales > 0 && preSales < 500) {
            result = preSales * 0.05;
        } else if (preSales >= 500 && preSales < 1000) {
            result = preSales * 0.07;
        } else if (preSales >= 1000 && preSales < 10000) {
            result = preSales * 0.08;
        } else if (preSales >= 10000) {
            result = preSales * 0.12;
        } else {
            result = "error"
        }
    } else if (city === "Varna") {
        if (preSales <= 0) {
            result = "error"
        } else if (preSales > 0 && preSales <= 500) {
            result = preSales * 0.045;
        } else if (preSales > 500 && preSales <= 1000) {
            result = preSales * 0.075;
        } else if (preSales > 1000 && preSales <= 10000) {
            result = preSales * 0.10;
        } else if (preSales > 10000) {
            result = preSales * 0.13;
        } else {
            result = "error"
        }

    } else if (city === "Plovdiv") {
        if (preSales <= 0) {
            result = "error"
        } else if (preSales > 0 && preSales <= 500) {
            result = preSales * 0.055;
        } else if (preSales > 500 && preSales <= 1000) {
            result = preSales * 0.08;
        } else if (preSales > 1000 && preSales <= 10000) {
            result = preSales * 0.12;
        } else {
            result = preSales * 0.145;
        }
    } else {
        result = "error"
    }


    if (result >= 0) {
        console.log(result.toFixed(2))
    } else {
        console.log("error")
    }
}
tradeComisions("Plovdiv", 1000)