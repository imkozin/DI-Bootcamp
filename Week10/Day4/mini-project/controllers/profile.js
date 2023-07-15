import { getAllUsers } from "../models/profile.js";

//READ - GET get all Users  -> _ before it 
export const _getAllUsers = (req, res) => {
    getAllUsers()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        console.log(err);
        res.status(404).json({msg : err.message })
    })
}