// Exercise 1 : HTTP
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require('http');

const server = http.createServer((request, response) => {
    console.log('Get the request');
    response.end(`<div>
        <h2>This is my first response</h2>
        <h1>This is my second response</h1>
        <p>This is my third response</p>
        </div>`);
})

server.listen(3000, () => {
    console.log('run on 3001');
})