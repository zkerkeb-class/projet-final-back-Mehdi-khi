import express from "express";
import { getCreneauxByTerrain, getAllCreneaux ,reserverCreneau ,rendreCreneauDisponible, getCreneauDetails} from "../controllers/creneauxController.js";

const router = express.Router();

router.get("/", getAllCreneaux);
router.get("/info/:id", getCreneauDetails);
router.get("/:terrainId", getCreneauxByTerrain);
router.post("/reserver/:id", reserverCreneau);
router.patch("/:id/disponible", rendreCreneauDisponible);



export default router;
