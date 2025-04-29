import express from "express";
import { handleContact } from "../controllers/contactController.js";
import { validateContact } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/", validateContact, handleContact);

export default router;
