import { db } from "../config/db.js";

const getAllUsers = async () => {
    const response = await db.select("*").from("users");
    return response
};

