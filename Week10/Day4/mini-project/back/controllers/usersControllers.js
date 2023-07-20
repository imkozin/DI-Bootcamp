import { register, login, updateLastLogin } from "../models/users.js";
import bcrypt from 'bcrypt';

export const _register = async (req, res) => {
    const first_name = req.body.fname;
    const last_name = req.body.lname;
    const username = req.body.username;
    const email = req.body.email.toLowerCase();
    const password = req.body.password + "";

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    try {
        const rows = await register({
            first_name,
            last_name,
            username,
            email,
            hash
        });
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(404).json({msg: err.message})
    }
};

// export const _login = async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     try {
//         const answer = await login({
//             username,
//             password
//         });
//         res.json(answer)
//     } catch (err) {
//         console.log(err);
//         res.status(404).json({msg: err.message})
//     }
// }

export const _login = async (req, res) => {
    try {
        const pass = await login(req.body.password);

        if (pass.length === 0)
            return res.status(404).json({msg:"not found"});
        
        const match = bcrypt.compareSync(req.body.
        password, pass[0].password);
        
        if (!match) 
            return res.status(401).json({msg:"wrong password"});

        await updateLastLogin();

        res.json({msg: "Success"});
    } catch (err) {
        console.log(err);
    }
}