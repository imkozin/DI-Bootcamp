const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log("eeeeeerrooooor");
    }
    console.log("Async", data.toString('utf-8'));
})

const file = fs.readFileSync('./hello.txt');
console.log("Sync", file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!!!', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// WRITE
// fs.writeFile('./buy.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE
fs.unlink('./buy.txt', err => {
    if (err) {
        console.log();
    }
    console.log("Inception");
})