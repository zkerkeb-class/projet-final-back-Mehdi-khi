import express from "express";
import { getCreneauxByTerrain, getAllCreneaux ,reserverCreneau} from "../controllers/creneauxController.js";

const router = express.Router();

router.get("/", getAllCreneaux);
router.get("/:terrainId", getCreneauxByTerrain);
router.post("/reserver/:id", reserverCreneau);


export default router;
