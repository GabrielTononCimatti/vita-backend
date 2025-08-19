import express from 'express';
import {getProject, getProjectById, postProject, putProject, patchProject, deleteProject, deleteProjectById} from '../controllers/projectController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getProject);
router.get('/:id', checkPermission, getProjectById);

//POST
router.post('/', checkPermission,postProject);

//PUT
router.put('/:id', checkPermission, putProject);

//PATCH
router.patch('/:id', checkPermission, patchProject);

//DELETE
router.delete('/', checkPermission, deleteProject);
router.delete('/:id', checkPermission, deleteProjectById);


export default router;