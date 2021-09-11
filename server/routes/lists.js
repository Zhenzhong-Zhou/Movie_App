import express from "express";
import {verifyToken} from "../middleware/verifyToken";
import {create} from "../controllers/lists";

const router = express.Router();
// CREATE
router.post("/",verifyToken, create);
// DELETE
router.delete();
//

export default router;