import express from 'express';
import {getUser, getUserById, postUser, putUser, patchUser, deleteUser, deleteUserById} from '../controllers/userController.js';
import {checkPermission} from "../middleware/authenticationMiddleware.js";

const router = express.Router();

//GET
router.get('/', checkPermission, getUser);
router.get('/:id', checkPermission, getUserById);

//POST
router.post('/', checkPermission,postUser);

//PUT
router.put('/:id', checkPermission, putUser);

//PATCH
router.patch('/:id', checkPermission, patchUser);

//DELETE
router.delete('/', checkPermission, deleteUser);
router.delete('/:id', checkPermission, deleteUserById);


export default router;