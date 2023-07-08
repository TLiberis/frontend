import React, { useEffect, useState } from 'react';
import { getQuestionById } from '../../../api-calls/question';
import { useParams } from 'react-router-dom';
import {
  createAnswer,
  getAnswers,
  deleteAnswer,
} from '../../../api-calls/answer';

export default function SelectedQuestion() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerContent, setAnswerContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
  });

  async function fetchQuestion() {
    try {
      const response = await getQuestionById(id);
      setQuestion(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchAnswers() {
    try {
      const response = await getAnswers(id);
      setAnswers(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAnswerSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      await createAnswer(question._id, answerContent, token);
      setAnswerContent('');
      fetchQuestion();
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  }

  async function handleAnswerDelete(answerId) {
    try {
      const token = localStorage.getItem('token');
      await deleteAnswer(answerId, token);
      fetchAnswers();
    } catch (error) {
      console.error(error);
    }
  }

  if (!question) {
    return <p>Loading question...</p>;
  }

  return (
    <div>
      <h2>Selected Question</h2>
      <h3>Title: {question.title}</h3>
      <p>Content: {question.content}</p>
      <p>Posted by: {question.userId.email}</p>

      <h3>Answers</h3>
      {answers.map((answer) => (
        <div key={answer._id}>
          <p>{answer.content}</p>
          <p>Posted by: {answer.user.email}</p>
          <button onClick={() => handleAnswerDelete(answer._id)}>Delete</button>
        </div>
      ))}

      <form onSubmit={handleAnswerSubmit}>
        <textarea
          value={answerContent}
          onChange={(event) => setAnswerContent(event.target.value)}
          placeholder="Enter your answer..."
          required
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Answer'}
        </button>
      </form>
    </div>
  );
}
