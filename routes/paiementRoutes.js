// routes/paiementRoutes.js
import express from "express";
import { enregistrerPaiement } from "../controllers/paiementContoller.js";

const router = express.Router();
router.post("/", enregistrerPaiement);
export default router;
