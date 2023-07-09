import React, { useState } from 'react';
import { registerUser } from '../../../api-calls/user';
import {
  Form,
  FormButton,
  FormHeading,
  FormInput,
} from './register-form.styled';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const resp = await registerUser(email, password);
      alert('User registered!');
      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormHeading>Register</FormHeading>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButton type="submit">Register</FormButton>
    </Form>
  );
}
