import express from "express";
import { getMe, updateProfil, updatePassword, getAir, updateAir, getTarget, updateTarget } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", verifyToken, getMe);
router.put("/update-profil", verifyToken, updateProfil);
router.put("/update-password", verifyToken, updatePassword);
router.get("/air", verifyToken, getAir);
router.put("/air", verifyToken, updateAir);
router.get("/target", verifyToken, getTarget);
router.put("/target", verifyToken, updateTarget);

export default router;