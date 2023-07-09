import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled(FormContainer)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const FormHeading = styled.h2`
  text-align: center;
  color: #f48024;
`;

export const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  width: 200px;
`;

export const FormButton = styled.button`
  background-color: #f48024;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
