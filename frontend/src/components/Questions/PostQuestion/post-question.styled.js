import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: center;
  color: #f48024;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

export const TitleInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ContentTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
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

export const StatusMessage = styled.p`
  margin-top: 16px;
  font-weight: bold;
`;
