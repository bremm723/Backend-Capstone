import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "./config/passport.js";

import authRoutes from "./routes/auth.routes.js";
import foodRoutes from "./routes/food.routes.js";
import trackingRoutes from "./routes/tracking.routes.js";
import userRoutes from "./routes/user.routes.js";
import notifikasiRoutes from "./routes/notifikasi.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((u) => u.trim())
  : ["http://localhost:6767"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/food", foodRoutes);
app.use("/tracking", trackingRoutes);
app.use("/user", userRoutes);
app.use("/notifikasi", notifikasiRoutes);

app.get("/", (req, res) => res.send("NutriTrack API Running 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
