import express from 'express';
import * as notificationController from '../controllers/notificationController.js';

const router = express.Router();

router.post('/',notificationController);

export default router;