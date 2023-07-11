// Exercise 1 : Reading From A File In Node.JS
// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal

const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    console.log(data);
});

// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.

fs.writeFile('data.txt', 'Bla Bla Chocolate Vanilla', 'utf-8', (err) => {
    if (err) return console.log(err);
});

// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)

fs.appendFile('data.txt', ' Buy orange juice', 'utf-8', (err) => {
    if (err) return console.log(err);
})

// Use the Node js File System to delete the file.

fs.unlink('data.txt', (err) => {
    if (err) return console.log(err);
})
