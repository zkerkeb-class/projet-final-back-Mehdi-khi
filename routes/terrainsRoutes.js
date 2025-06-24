import express from 'express';
import { getAllTerrains } from '../controllers/terrainsController.js';

const router = express.Router();

router.get('/', getAllTerrains);

export default router;
