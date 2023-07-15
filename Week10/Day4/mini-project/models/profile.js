import { db } from "../config/db.js";

export const getAllUsers = () => {
    return db('users').select('user_id', 'first_name', 'last_name', 'email', 'username', 'password', 'created_date', 'last_login').orderBy('created_date');
};

