import express from 'express';
import {getPerson, getPersonById, postPerson, putPerson, patchPerson, deletePerson, deletePersonById} from '../controllers/personController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getPerson);
router.get('/:id', checkPermission, getPersonById);

//POST
router.post('/', checkPermission,postPerson);

//PUT
router.put('/:id', checkPermission, putPerson);

//PATCH
router.patch('/:id', checkPermission, patchPerson);

//DELETE
router.delete('/', checkPermission, deletePerson);
router.delete('/:id', checkPermission, deletePersonById);


export default router;