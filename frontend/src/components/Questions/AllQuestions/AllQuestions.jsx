import React, { useEffect, useState } from 'react';
import { getQuestions, deleteQuestion } from '../../../api-calls/question';
import { Link, useNavigate } from 'react-router-dom';

export default function AllQuestions() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

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
      navigate('/');
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
          <Link to={`/question/${question._id}/answers`} key={question._id}>
            <div>
              <h3>{question.title}</h3>
              <p>{question.content}</p>
              <p>Posted by: {question.userId.email}</p>
              <button onClick={() => handleDelete(question._id)}>Delete</button>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
