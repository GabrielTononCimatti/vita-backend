import express from 'express';
import * as projectController from '../controllers/projectController.js';

const router = express.Router();

router.post('/',projectController);

export default router;