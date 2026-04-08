import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/google/failed", session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
  }
);

router.get("/google/failed", (req, res) => {
  res.status(401).json({ message: "Login Google gagal" });
});

export default router;