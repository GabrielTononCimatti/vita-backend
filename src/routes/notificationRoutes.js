import express from 'express';
import {getNotification, getNotificationById, postNotification, putNotification, patchNotification, deleteNotification, deleteNotificationById} from '../controllers/notificationController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getNotification);
router.get('/:id', getNotificationById);

//POST
router.post('/',postNotification);

//PUT
router.put('/:id', putNotification);

//PATCH
router.patch('/:id', patchNotification);

//DELETE
router.delete('/', deleteNotification);
router.delete('/:id', deleteNotificationById);

export default router;