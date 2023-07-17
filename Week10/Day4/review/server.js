import express from "express";
import {promises as fsPromises} from "fs";
import path from "path";
const app = express();

const __dirname = path.resolve();
// needed for put and post method
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// needed to make files in folder public available
app.use(express.static(__dirname + "/public"));

app.get("/registeruser", (request, response) => {
    response.sendFile(__dirname + "/public/register.html")
})

app.listen(3000, () => {
    console.log("SERVER LISTENING ON PORT 3000");
})

app.post("/registeruser", async (req, res) => {
    const dataBody = req.body;
    const readFileResponse = await readUser(dataBody);
    console.log(dataBody);
    res.json(readFileResponse);
})

async function readUser(currentUser) {
    const data = await fsPromises.readFile(__dirname + '/public/data.json')
    .catch((err) => console.error("Failed to read", err));

    const dataUsers = JSON.parse(data); // an array of objects

    if (dataUsers.length == 0) {
        
   
    const findUser = dataUsers.findIndex((el) => 
        el.username === currentUser.username || el.password === currentUser.password);
    console.log("Find user", findUser);
    

    if (findUser >= 0) {
        console.log('User already exists');
        return 'User already exists';
    } else {
        dataUsers.push(currentUser);
        await fsPromises.writeFile(__dirname + "/public/data.json", dataUsers);
        return "User added successfully"
    }
}

readUser()