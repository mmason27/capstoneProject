import express from "express";
import { authUser } from "../controllers/userController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);

export default router;