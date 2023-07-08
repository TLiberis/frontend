import express from 'express';
import { userLogin, userRegister } from '../controllers/userController.js';
import {
  createQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestions,
} from '../controllers/questionController.js';
import { validateToken } from '../middleware/authUser.js';
import {
  createAnswer,
  deleteAnswer,
  getAnswers,
} from '../controllers/answerController.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

router.get('/questions', getQuestions);
router.get('/question/:id', getQuestionById);
router.post('/question', validateToken, createQuestion);
router.delete('/question/:id', validateToken, deleteQuestion);

router.get('/question/:id/answers', getAnswers);
router.post('/question/:id/answers', validateToken, createAnswer);
router.delete('/answer/:id', validateToken, deleteAnswer);

export default router;
