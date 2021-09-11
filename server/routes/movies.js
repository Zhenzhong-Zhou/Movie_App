import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create, update} from "../controllers/movies.js";

const router = express.Router();
// CREATE
router.post("/", verifyToken, create);
// UPDATE
router.put("/:id", verifyToken, update);

export default router;