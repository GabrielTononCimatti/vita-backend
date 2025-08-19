import express from 'express';
import {getProject, getProjectById, postProject, putProject, patchProject, deleteProject, deleteProjectById} from '../controllers/projectController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getProject);
router.get('/:id', getProjectById);

//POST
router.post('/',postProject);

//PUT
router.put('/:id', putProject);

//PATCH
router.patch('/:id', patchProject);

//DELETE
router.delete('/', deleteProject);
router.delete('/:id', deleteProjectById);


export default router;