const express = require('express');

const app = express();

const PORT = 3001;
app.listen(PORT);

// app.use(express.urlencoded({extended: false}));

// app.use(express.json());

app.get('/', (req, res) => {
    res.send('Heeeellooooo');
})

// req.query
app.get('/profile', (req, res) => {
    console.log(req.query);
    res.send('getting root');
})

// req.params



