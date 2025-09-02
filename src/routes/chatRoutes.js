import express from "express"
import askQuestion from "../controllers/chatboxController.js";

const router =express.Router();
router.post('/',askQuestion);
export default router