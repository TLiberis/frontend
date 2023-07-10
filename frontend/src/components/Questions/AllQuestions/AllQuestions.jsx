import React, { useEffect, useState } from 'react';
import { getQuestions, deleteQuestion } from '../../../api-calls/question';
import {
  CardContainer,
  DeleteButton,
  Heading,
  PostedBy,
  Question,
  ReadMoreLink,
  Title,
  Wrapper,
} from './all-questions.styled';

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
      if (!token) {
        alert('You have to log in to delete a question');
        return;
      }
      const confirmDelete = window.confirm(
        'Are you sure you want to delete this question?'
      );
      if (!confirmDelete) {
        return;
      }
      await deleteQuestion(questionId, token);
      fetchQuestions();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Heading>All Questions</Heading>
      <Wrapper>
        {questions.length === 0 ? (
          <p>No questions yet. You can post a new one.</p>
        ) : (
          questions.map((question) => (
            <CardContainer key={question._id}>
              <Question>Question title: </Question>
              <Title>{question.title}</Title>
              <PostedBy>Posted by: {question.userId.email}</PostedBy>
              <ReadMoreLink to={`/question/${question._id}/answers`}>
                Read more
              </ReadMoreLink>
              <DeleteButton onClick={() => handleDelete(question._id)}>
                Delete
              </DeleteButton>
            </CardContainer>
          ))
        )}
      </Wrapper>
    </>
  );
}
