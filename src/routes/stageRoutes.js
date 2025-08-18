import express from 'express';
import * as stageController from '../controllers/stageController.js';

const router = express.Router();

router.post('/',stageController);

export default router;