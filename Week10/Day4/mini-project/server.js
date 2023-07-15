import express, { urlencoded } from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const __dirname = path.resolve();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', express.static(__dirname + '/public'))

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

