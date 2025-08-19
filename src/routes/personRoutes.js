import express from 'express';
import {getPerson, getPersonById, postPerson, putPerson, patchPerson, deletePerson, deletePersonById} from '../controllers/personController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getPerson);
router.get('/:id', getPersonById);

//POST
router.post('/',postPerson);

//PUT
router.put('/:id', putPerson);

//PATCH
router.patch('/:id', patchPerson);

//DELETE
router.delete('/', deletePerson);
router.delete('/:id', deletePersonById);


export default router;