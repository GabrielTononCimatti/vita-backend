import express from 'express';
import {getDocument, getDocumentById, postDocument, putDocument, patchDocument, deleteDocument, deleteDocumentById} from '../controllers/documentController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getDocument);
router.get('/:id', checkPermission, getDocumentById);

//POST
router.post('/', checkPermission,postDocument);

//PUT
router.put('/:id', checkPermission, putDocument);

//PATCH
router.patch('/:id', checkPermission, patchDocument);

//DELETE
router.delete('/', checkPermission, deleteDocument);
router.delete('/:id', checkPermission, deleteDocumentById);

export default router;