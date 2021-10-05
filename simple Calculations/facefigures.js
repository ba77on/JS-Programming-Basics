function faceOffigures(arg1, arg2, arg3) {
    let type = arg1;
    let result = 0;
    if (type === "square") {
        let sideS = Number(arg2);
        result = (sideS * sideS);
    }
    else if (type === "rectangle") {
        let sideA = Number(arg2);
        let sideB = Number(arg3);
        result = (sideA * sideB);
    }
    else if (type === "circle") {
        let r = Number(arg2);
        result = Math.PI * r * r;

    }
     else if (type === "triangle")
    {   let sideW = Number(arg2);
        let h = Number(arg3);
        result = sideW * h / 2;
    }
    console.log(result.toFixed(3));
}

faceOffigures("rectangle", 7, 2.5)