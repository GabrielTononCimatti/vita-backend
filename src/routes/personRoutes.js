import express from 'express';
import {getPersonById, postPerson} from '../controllers/personController.js';
import {isAdmin} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

router.post('/', isAdmin, postPerson);

router.get('/:id', getPersonById)

export default router;