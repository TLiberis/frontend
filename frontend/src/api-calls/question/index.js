import axios from 'axios';

const API_URL = 'http://localhost:4000';

export async function getQuestions() {
  try {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function postQuestion(title, content, token) {
  try {
    const response = await axios.post(
      `${API_URL}/question`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteQuestion(questionId, token) {
  try {
    const response = await axios.delete(`${API_URL}/question/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
