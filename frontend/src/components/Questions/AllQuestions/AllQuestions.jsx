import React, { useEffect, useState } from 'react';
import { getQuestions, deleteQuestion } from '../../../api-calls/question';
import { Link } from 'react-router-dom';

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
      {questions.length === 0 ? (
        <p>No questions yet. You can post a new one.</p>
      ) : (
        questions.map((question) => (
          <div key={question._id}>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
            <p>Posted by: {question.userId.email}</p>
            <Link to={`/question/${question._id}/answers`}>Read more</Link>
            <button onClick={() => handleDelete(question._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
