const { log } = require('console');
const fs = require('fs');

// fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
//     // console.log(data);
//     const str = data.split("");
//     console.log(str);
//     const right = str.filter(x => x == '>').length;
//     console.log("Total right", right);
//     const left = str.filter(y => y == '<').length;
//     console.log('Total left', left);
//     console.log('Total steps:', right - left);
// })

fs.readFile('RightLeft.txt', 'utf-8', (err, data) => {
    const str = data.split("");
    console.log(str);
    let position = 0;
    let counter = 0;
    for (let char of str) {
        counter++;
        if (char === '>') {
            position++;

        } else if (char === '<') {
            position--;
        }; 
        
        if (position === -1) {
            break;
        }
    }
    console.log("Total steps", position);
    console.log("First time in left side is in", counter);
});
