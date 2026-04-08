import express from "express";
import { getMe, updateProfil, updatePassword } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", verifyToken, getMe);
router.put("/update-profil", verifyToken, updateProfil);
router.put("/update-password", verifyToken, updatePassword);

export default router;