import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create, fetch_random, find, remove, update} from "../controllers/movies.js";

const router = express.Router();
// CREATE
router.post("/", verifyToken, create);
// UPDATE
router.put("/:id", verifyToken, update);
// DELETE
router.delete("/:id", verifyToken, remove);
// FIND
router.get("/find/:id", verifyToken, find);
// FETCH RANDOM
router.get("/random", verifyToken, fetch_random);

export default router;