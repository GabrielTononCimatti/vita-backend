import express from 'express';
import {getUser, getUserById, postUser, putUser, patchUser, deleteUser, deleteUserById} from '../controllers/userController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', getUser);
router.get('/:id', getUserById);

//POST
router.post('/',postUser);

//PUT
router.put('/:id', putUser);

//PATCH
router.patch('/:id', patchUser);

//DELETE
router.delete('/', deleteUser);
router.delete('/:id', deleteUserById);


export default router;