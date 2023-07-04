import express from 'express';
import { userLogin, userRegister } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

router.get('/questions');
router.post('/question');
router.delete('/question/:id');

router.get('/question/:id/answers');
router.post('/question/:id/answers');
router.delete('/answer/:id');

export default router;
