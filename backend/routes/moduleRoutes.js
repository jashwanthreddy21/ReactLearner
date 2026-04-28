import express from 'express';
import { getModules, getModuleById, completeModule } from '../controllers/moduleController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getModules);
router.get('/:id', getModuleById);
router.post('/:id/complete', protect, completeModule);

export default router;
