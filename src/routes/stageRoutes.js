import express from 'express';
import {getStage, getStageById, postStage, putStage, patchStage, deleteStage, deleteStageById} from '../controllers/stageController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getStage);
router.get('/:id', checkPermission, getStageById);

//POST
router.post('/', checkPermission,postStage);

//PUT
router.put('/:id', checkPermission, putStage);

//PATCH
router.patch('/:id', checkPermission, patchStage);

//DELETE
router.delete('/', checkPermission, deleteStage);
router.delete('/:id', checkPermission, deleteStageById);


export default router;