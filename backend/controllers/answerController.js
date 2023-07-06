import Answer from '../models/answerModel.js';

export async function getAnswers(req, res) {
  try {
    const { id } = req.params;
    const answers = await Answer.find({ question: id }).populate(
      'user',
      'email'
    );
    return res.status(200).json(answers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function createAnswer(req, res) {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const user = req.user;

    const newAnswer = new Answer({
      content,
      user: user._id,
      question: id,
    });
    await newAnswer.save();

    return res.status(201).json({ message: 'Answer created successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteAnswer(req, res) {
  try {
    const { id } = req.params;
    const user = req.user;

    const answer = await Answer.findOne({ _id: id, user: user._id });
    if (!answer) {
      return res.status(404).json({ message: 'Answer not found' });
    }

    await answer.remove();

    return res.status(200).json({ message: 'Answer deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
