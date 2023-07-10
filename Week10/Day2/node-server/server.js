// Exercise 2 : HTTP & JSON
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/

// const http = require('http');
// const server = http.createServer((request, response) => {
//     console.log("Get the request");
//     const myJSON = JSON.stringify(user);
//     response.end(myJSON);
// })


// server.listen(8080, () => {
//     console.log("Run on server 8080");
// })


const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log(user)
})

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use(express.static(__dirname+'/public'))

app.get('/users', (req, res) => {
    res.json(user);
});

app.get('/:id', (req, res) => {
    console.log(req.params);
    const userId = req.params['id'];
    console.log(userId);
    res.json(req.params);
})