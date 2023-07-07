import axios from 'axios';

const API_URL = 'http://localhost:4000';

export async function registerUser(email, password) {
  try {
    const resp = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
}

export async function loginUser(email, password) {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
