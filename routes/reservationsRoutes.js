import express from "express";
import { getReservationsByUser, creerReservation ,annulerReservation ,updateReservationCreneau } from "../controllers/reservationsController.js";

const router = express.Router();

router.post("/", creerReservation);
router.get("/:userId", getReservationsByUser);
router.delete("/:id", annulerReservation);
router.put("/:id", updateReservationCreneau);
export default router;
