import axios from 'axios';

const API_URL = 'http://localhost:4000';

export async function getAnswers(questionId) {
  try {
    const response = await axios.get(
      `${API_URL}/question/${questionId}/answers`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createAnswer(questionId, content, token) {
  try {
    const response = await axios.post(
      `${API_URL}/question/${questionId}/answers`,
      {
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

export async function deleteAnswer(answerId, token) {
  try {
    const response = await axios.delete(`${API_URL}/answer/${answerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
