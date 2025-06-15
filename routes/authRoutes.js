import express from 'express';
const router = express.Router();
import * as authController from '../controllers/authController.js';

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/', (req, res) => {
  
  res.status(200).json({ message: 'réussie' });
});

export default router;

