import React, { useEffect, useState } from 'react';
import { getQuestions, deleteQuestion } from '../../../api-calls/question';

export default function AllQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  async function fetchQuestions() {
    try {
      const response = await getQuestions();
      setQuestions(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDelete(questionId) {
    try {
      console.log(questionId);
      const token = localStorage.getItem('token');
      await deleteQuestion(questionId, token);
      fetchQuestions();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>All Questions</h2>
      {questions.map((question) => (
        <div key={question._id}>
          <h3>{question.title}</h3>
          <p>{question.content}</p>
          <p>Posted by: {question.userId.email}</p>
          <button onClick={() => handleDelete(question._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
