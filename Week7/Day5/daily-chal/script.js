function count() {
    let num = Number(prompt('Enter a number of bottles'));
    for (let i = 1;  num > 1; i++) {
        if (i === 1 ) {
            console.log(`${num} bottles of beer on the wall`);
            console.log(`${num} bottles of beer`);
            console.log(`Take ${i} down, pass it around`);
            console.log(`${num -= i} bottles of beer on the wall`);
        } else if (i > 1) {
            if ((num - i) < 0) {
                console.log(`${num} bottles of beer on the wall`);
                console.log(`${num} bottles of beer`);
                console.log(`Take ${num} down, pass them around`);
                console.log(`No bottle of beer on the wall`);
                break;
            } else {
                console.log(`${num} bottles of beer on the wall`);
                console.log(`${num} bottles of beer`);
                console.log(`Take ${i} down, pass them around`);
                console.log(`${num -= i} bottles of beer on the wall`);
            }
        }
    }
}
count()