import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {update} from "../controllers/users.js";

const router = express.Router();
// UPDATE
router.put("/:id", verifyToken, update);
// DELETE
// GET
// GET USERS
// GET USERS STATUS


export default router;