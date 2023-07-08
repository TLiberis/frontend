import Question from '../models/questionModel.js';

export async function getQuestions(req, res) {
  try {
    const questions = await Question.find().populate('userId', 'email');
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getQuestionById(req, res) {
  try {
    const { id } = req.params;
    const question = await Question.findById(id).populate('userId', 'email');
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createQuestion(req, res) {
  try {
    const { title, content } = req.body;
    const userId = req.user._id;

    const newQuestion = new Question({
      title,
      content,
      userId,
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
    const userId = req.user._id;

    const question = await Question.findByIdAndDelete({ _id: id, userId });
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    return res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
