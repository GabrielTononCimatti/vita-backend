import express from 'express';
import {getDocument, getDocumentById, postDocument, putDocument, patchDocument, deleteDocument, deleteDocumentById} from '../controllers/documentController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getDocument);
router.get('/:id', getDocumentById);

//POST
router.post('/',postDocument);

//PUT
router.put('/:id', putDocument);

//PATCH
router.patch('/:id', patchDocument);

//DELETE
router.delete('/', deleteDocument);
router.delete('/:id', deleteDocumentById);

export default router;