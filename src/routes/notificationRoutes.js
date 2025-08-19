import express from 'express';
import {getNotification, getNotificationById, postNotification, putNotification, patchNotification, deleteNotification, deleteNotificationById} from '../controllers/notificationController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getNotification);
router.get('/:id', checkPermission, getNotificationById);

//POST
router.post('/', checkPermission,postNotification);

//PUT
router.put('/:id', checkPermission, putNotification);

//PATCH
router.patch('/:id', checkPermission, patchNotification);

//DELETE
router.delete('/', checkPermission, deleteNotification);
router.delete('/:id', checkPermission, deleteNotificationById);

export default router;