import React, { useState } from 'react';
import { postQuestion } from '../../../api-calls/question';

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
    <form onSubmit={handlePost}>
      <h2>Post a Question</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post Question</button>
      <p>{postStatus}</p>
    </form>
  );
}
