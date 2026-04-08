import express from "express";
import { addTracking, getTracking, deleteTracking, updateTracking } from "../controllers/tracking.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, getTracking);
router.post("/", verifyToken, addTracking);
router.put("/:id", verifyToken, updateTracking);
router.delete("/:id", verifyToken, deleteTracking);

export default router;