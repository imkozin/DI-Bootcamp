const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;
const users = [];

app.use(express.json());
app.use(cors());


app.post("/register", createUser)
app.post("/login", loginUser)

app.listen(PORT, () => console.log('Listening on port ' + PORT));

function isUserAlreadyInArray(username) {
    return users.some(user => user.username === username)
    // console.log('we are checking for this username', username);
}

function getUserFromArray(username) {
    return users.find((user) => user.username === username)
}

function isFieldEmpty(field) {
    return field == null || field.length === 0
}

function sendErrorMessage(res, message) {
    res.status(400).send({message});
}

function loginUser(req, res) {
    const {username, password} = req.body;
    if (isFieldEmpty(username))
        return sendErrorMessage(res, "Username cannot be empty");
    if (isFieldEmpty(password))
        return sendErrorMessage(res, "Password cannot be empty");
    const user = getUserFromArray(username);
    if (user == null)
        return sendErrorMessage(res, "User not found");
    if (user.password != password) 
        return sendErrorMessage(res, "Wrong password");
    console.log("user found and password matches", user);
    res.send({message: `Hello ${username} and welcome back again`})    
}

function createUser(req, res) {
    // console.log('request received', req.body);
    if (!isRequestValid(req.body)) return res.status(400).send({message: "Please fill in all information correctly"});
    if (isUserAlreadyInArray(req.body.username)) {
        return res.status(400).send({message : "User already exists"})
    }
    const newUser = {
        username: req.body.username,
        password: req.body.password
    };
    users.push(newUser);
    res.send({message : "Hello Your account is now created", "user": newUser.username});
};

function isRequestValid(body) {
    const {first, last, email, username, password} = body;
    if (isAnyFieldEmpty([first, last, email, username, password])) return false;
    if (password.length < 8) return false;
    if (!email.includes('@')) return false;
    return true;
}

function isAnyFieldEmpty(inputs) {
    return inputs.some((input) => input === "" || input == null);
}