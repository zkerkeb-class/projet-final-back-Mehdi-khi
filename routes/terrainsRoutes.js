import express from 'express';
import { getAllTerrains ,getTerrainById } from '../controllers/terrainsController.js';

const router = express.Router();

router.get('/', getAllTerrains);
router.get('/:id', getTerrainById); 

export default router;
