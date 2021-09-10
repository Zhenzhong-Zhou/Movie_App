import express from "express";
import {update} from "../controllers/users.js";

const router = express.Router();
// UPDATE
router.put("/:id", update);
// DELETE
// GET
// GET USERS
// GET USERS STATUS


export default router;