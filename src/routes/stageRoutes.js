import express from 'express';
import {getStage, getStageById, postStage, putStage, patchStage, deleteStage, deleteStageById} from '../controllers/stageController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getStage);
router.get('/:id', getStageById);

//POST
router.post('/',postStage);

//PUT
router.put('/:id', putStage);

//PATCH
router.patch('/:id', patchStage);

//DELETE
router.delete('/', deleteStage);
router.delete('/:id', deleteStageById);


export default router;