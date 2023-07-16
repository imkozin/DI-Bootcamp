import { getAllUsers } from "../models/users.js";

//READ - GET get all Users  -> _ before it 
export const _getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(404).json({msg : "Internal server Error "});
        console.log(res);
    }
};

