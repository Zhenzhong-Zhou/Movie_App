import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create, fetch_all} from "../controllers/lists.js";

const router = express.Router();
// CREATE
router.post("/", verifyToken, create);
// DELETE
router.delete("/:id", verifyToken);
// FETCH ALL
router.get("/", verifyToken, fetch_all);

export default router;