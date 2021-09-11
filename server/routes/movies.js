import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create, remove, update} from "../controllers/movies.js";

const router = express.Router();
// CREATE
router.post("/", verifyToken, create);
// UPDATE
router.put("/:id", verifyToken, update);
// DELETE
router.delete("/:id", verifyToken, remove);

export default router;