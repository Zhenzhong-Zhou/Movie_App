import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {find, remove, update} from "../controllers/users.js";

const router = express.Router();
// UPDATE
router.put("/:id", verifyToken, update);
// DELETE
router.delete("/:id", verifyToken, remove);
// FIND
router.get("/find/:id", find);
// GET USERS
// GET USERS STATUS


export default router;