import React, { useEffect, useState } from 'react';
import { getQuestionById } from '../../../api-calls/question';
import { useParams } from 'react-router-dom';
import {
  createAnswer,
  getAnswers,
  deleteAnswer,
} from '../../../api-calls/answer';
import {
  AnswerContainer,
  AnswerContent,
  AnswerDeleteButton,
  AnswerForm,
  AnswerSubmitButton,
  AnswerTextarea,
  AnswerUser,
  Container,
  Heading,
  PostedBy,
  QuestionContent,
  QuestionTitle,
} from './selected-question.styled';

export default function SelectedQuestion() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answerContent, setAnswerContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetchQuestion();
    fetchAnswers();
    // eslint-disable-next-line
  }, []);

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
    <Container>
      <Heading>Selected Question</Heading>
      <QuestionTitle>Title: {question.title}</QuestionTitle>
      <QuestionContent>Question: "{question.content}"</QuestionContent>
      <PostedBy>Posted by: {question.userId.email}</PostedBy>
      <hr />

      {answers.map((answer) => (
        <AnswerContainer key={answer._id}>
          <AnswerUser>{answer.user.email} answered:</AnswerUser>
          <AnswerContent>"{answer.content}"</AnswerContent>

          <AnswerDeleteButton onClick={() => handleAnswerDelete(answer._id)}>
            Delete
          </AnswerDeleteButton>
          <hr />
        </AnswerContainer>
      ))}

      <AnswerForm onSubmit={handleAnswerSubmit}>
        <AnswerTextarea
          value={answerContent}
          onChange={(event) => setAnswerContent(event.target.value)}
          placeholder="Enter your answer..."
          required
        ></AnswerTextarea>
        <AnswerSubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Answer'}
        </AnswerSubmitButton>
      </AnswerForm>
    </Container>
  );
}
