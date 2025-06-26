import express from "express";
import { getReservationsByUser, creerReservation ,annulerReservation } from "../controllers/reservationsController.js";

const router = express.Router();

router.post("/", creerReservation);
router.get("/:userId", getReservationsByUser);
router.delete("/:id", annulerReservation);
export default router;
