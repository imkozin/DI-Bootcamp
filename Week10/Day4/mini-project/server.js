import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import router from "../routes/users.js";
dotenv.config();

const app = express();


const __dirname = path.resolve();

// app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors());
app.use('/', express.static(__dirname + '/public'))
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

