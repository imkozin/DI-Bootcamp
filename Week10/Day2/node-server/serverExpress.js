// Exercise 3 : Express
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/

const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log('Running 3000 server');
})

app.get('', (req, res) => {
    res.end(`<div>
    <h2>This is my first response</h2>
    <h1>This is my second response</h1>
    <p>This is my third response</p>
    </div>`)
})
