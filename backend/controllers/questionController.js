import Question from '../models/questionModel.js';

export async function getQuestions(req, res) {
  try {
    const questions = await Question.find().populate('user', 'email');
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createQuestion(req, res) {
  try {
    const { title, content } = req.body;
    const user = req.user;

    const newQuestion = new Question({
      title,
      content,
      user: user._id,
    });
    await newQuestion.save();

    return res.status(201).json({ message: 'Question created successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteQuestion(req, res) {
  try {
    const { id } = req.params;
    const user = req.user;

    const question = await Question.findOne({ _id: id, user: user._id });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    await question.remove();

    return res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
