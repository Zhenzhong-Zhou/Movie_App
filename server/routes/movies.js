import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create} from "../controllers/movies.js";

const router = express.Router();
// CREATE
router.post("/", verifyToken, create);

export default router;