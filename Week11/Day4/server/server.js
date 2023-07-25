import express from "express";
import cors from 'cors';

const app = express();

const PORT = 3030;

app.use(cors());
app.use(express.json());

app.get('/api/hello', async (req, res) => {
    res.json("Hello From Express")
})

app.post('/api/world', async (req,res) => {
    console.log(req.body);
    return res.json(`I received your POST request. This is what you sent me: ${req.body.message}`)
})

app.listen(PORT || 3000, () => {
    console.log(`Listening on PORT ${PORT || 3000}`);
});
