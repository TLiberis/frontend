import React, { useState } from 'react';
import { loginUser } from '../../../api-calls/user';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormButton,
  FormHeading,
  FormInput,
  FormStatus,
} from './login-form.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      if (response.message === 'Login successful' && response.token) {
        setLoginStatus('Login successful');
        localStorage.setItem('token', response.token);
      } else {
        setLoginStatus('Login failed');
      }
      navigate('/');
      window.location.reload();
    } catch (error) {
      alert('Wrong email or password, try again');
      console.error(error.message);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <FormHeading>Login</FormHeading>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <FormButton type="submit">Login</FormButton>
      <FormStatus>{loginStatus}</FormStatus>
    </Form>
  );
}
