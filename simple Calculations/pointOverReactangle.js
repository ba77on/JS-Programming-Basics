function border(x1, y1, x2, y2, x, y) {
    x1 = Number(x1);
    y1 = Number(y1);

    x2 = Number(x2);
    y2 = Number(y2);

    x = Number(x);
    y = Number(y);

    let isTop = (y === y1) && (x >= x1 && x <= x2);
    let isBottom = (y === y2) && (x >= x1 && x <= x2);

    let isLeft = (x === x1) && (y >= y1 && y <= y2);
    let isRight = (x === x2) && (y >= y1 && y <= y2);

    if ((isTop || isBottom) || (isLeft || isRight)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}
border(2, 4, 5, 0)