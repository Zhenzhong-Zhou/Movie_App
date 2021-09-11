import express from "express";
import {verifyToken} from "../middleware/verifyToken.js";
import {create} from "../controllers/lists.js";

const router = express.Router();
// CREATE
router.post("/",verifyToken, create);
// DELETE
// router.delete();
//

export default router;