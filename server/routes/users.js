import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {find, find_all, remove, status, update} from "../controllers/users.js";

const router = express.Router();
// UPDATE
router.put("/:id", verifyToken, update);
// DELETE
router.delete("/:id", verifyToken, remove);
// FIND
router.get("/find/:id", find);
// FIND ALL
router.get("/", verifyToken, find_all);
// GET USERS STATUS
router.get("/status", verifyToken, status);

export default router;