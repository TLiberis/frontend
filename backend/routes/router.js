import express from 'express';

const router = express.Router();

router.post('/register');
router.post('/login');

router.get('/questions');
router.post('/question');
router.delete('/question/:id');

router.get('/question/:id/answers');
router.post('/question/:id/answers');
router.delete('/answer/:id');

export default router;
