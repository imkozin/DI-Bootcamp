const express = require("express");
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/xp-gold/public')));

app.listen(3030, () => {
    console.log("Running server on port 3030");
});


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'xp-gold/public'))
})

app.post('/form', (req, res) => {
    const data = {
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        email : req.body.email
    };
    res.json(data)
    console.log(data);
})