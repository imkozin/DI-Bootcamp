import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';
// import bcrypt from 'bcrypt';
import u_router from './routes/userrouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.use('/users', u_router);

app.listen(process.env.PORT || 3030, () => {
    console.log(`Running server on ${process.env.PORT || 3000}`);
})

db('users')
.select("*")
.then((rows) => {
    console.log(rows);
})

// try {
//     const rows = await db('users').select('*');
//     console.log(rows);
// } catch (err) {
//     console.log(err);
// }

// to hash the password
// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync('123456', salt)

// console.log(salt);
// console.log(hash);