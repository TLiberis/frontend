import React, { useState } from 'react';
import { postQuestion } from '../../../api-calls/question';
import {
  ContentTextarea,
  Form,
  Heading,
  StatusMessage,
  SubmitButton,
  TitleInput,
} from './post-question.styled';

export default function PostQuestion() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postStatus, setPostStatus] = useState('');

  async function handlePost(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await postQuestion(title, content, token);
      console.log(response);
      if (response.status === 201) {
        setPostStatus('Question posted successfully');
      } else {
        console.log(response.data);
        setPostStatus('Question posting failed');
      }
      setTitle('');
      setContent('');
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Form onSubmit={handlePost}>
      <Heading>Post a Question</Heading>
      <TitleInput
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ContentTextarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></ContentTextarea>
      <SubmitButton type="submit">Post Question</SubmitButton>
      <StatusMessage>{postStatus}</StatusMessage>
    </Form>
  );
}
