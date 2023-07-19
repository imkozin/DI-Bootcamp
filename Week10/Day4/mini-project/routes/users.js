import express from "express";
import { _getAllUsers } from "../controllers/users.js";

const router = express.Router();

router.get("/allusers", _getAllUsers)

export default router;