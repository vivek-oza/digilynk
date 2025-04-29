import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(helmet()); // Add security headers
// app.use(cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:5173",
//     credentials: true,
// }));
app.use(
    cors({
        origin:
            process.env.MODE === "development"
                ? "http://localhost:5173"
                : "https://digilynk.vercel.app",
        credentials: true,
    })
);
app.use(express.json());

// Rate limiter to prevent spam
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 20, // Limit each IP to 100 requests per window
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// Routes
app.use("/api/contact", contactRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((err) => console.error("Mongo connection error:", err));
