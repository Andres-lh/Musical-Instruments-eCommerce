import express from 'express';
import { userSignIn, userSignUp } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userSignUp);
router.post('/login', userSignIn);


export default router;