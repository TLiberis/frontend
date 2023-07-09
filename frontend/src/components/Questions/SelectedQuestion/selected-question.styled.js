import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.h2`
  text-align: center;
  color: #f48024;
`;

export const QuestionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const QuestionContent = styled.p`
  margin-bottom: 16px;
`;

export const PostedBy = styled.p`
  color: #555;
  margin-bottom: 16px;
`;

export const AnswerContainer = styled.div`
  margin-bottom: 16px;
`;

export const AnswerContent = styled.p`
  margin-bottom: 8px;
`;

export const AnswerUser = styled.p`
  font-size: 16px;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const AnswerDeleteButton = styled.button`
  background-color: #ff4f4f;
  color: #fff;
  font-size: 18px;
  display: flex;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const AnswerForm = styled.form`
  margin-top: 16px;
`;

export const AnswerTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
  min-height: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AnswerSubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #f48024;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const ReactButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: whitesmoke;
  color: gray;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const LikeButton = styled(ReactButton)`
  background-color: #e9f2fe;
  color: #0077cc;
`;

export const DislikeButton = styled(ReactButton)`
  background-color: #fee9e9;
  color: #ff4f4f;
`;
