import React, { useState } from 'react';
import { loginUser } from '../../../api-calls/user';
import { useNavigate } from 'react-router-dom';

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
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <p>{loginStatus}</p>
    </form>
  );
}
