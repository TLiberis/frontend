import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 2em;
`;

export const Heading = styled.h2`
  text-align: center;
  color: #f48024;
`;

export const CardContainer = styled.div`
  min-width: 250px;
  min-height: 150px;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #f48024;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: whitesmoke;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const PostedBy = styled.p`
  color: #555;
  margin-bottom: 8px;
`;

export const Question = styled(PostedBy)`
  font-size: 12px;
`;

export const ReadMoreLink = styled(Link)`
  color: #f48024;
  text-decoration: none;
  margin-bottom: 0.5em;

  :hover {
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4f4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
