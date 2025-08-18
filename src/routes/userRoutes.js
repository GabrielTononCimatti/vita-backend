import express from 'express';
import {postUser, completeRegistration} from'../controllers/userController.js';
import {isAdmin} from "../middleware/authenticationMiddleware.js";


const router = express.Router();

router.post('/', isAdmin, postUser);
router.post('/complete-registration', completeRegistration);

export default router;