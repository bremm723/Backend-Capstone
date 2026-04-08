import express from "express";
import { addTracking, getTracking } from "../controllers/tracking.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, addTracking);
router.get("/", verifyToken, getTracking);

export default router;