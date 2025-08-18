import express from 'express';
import * as documentController from '../controllers/documentController.js';

const router = express.Router();

//GET all
router.get('/', getDocument);

//GET by id
router.get('/:id', getDocumentById);


router.post('/',postDocument);

router.put('/:id', putDocument)
router.patch('/:id', patchDocument);

//DELETE all
router.delete('/', deleteDocument);

//DELETE by id
router.delete('/:id', deleteDocumentById);

export default router;