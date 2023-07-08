import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
  background-color: #f48024;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const LogoLink = styled(Link)`
  font-size: 1.6rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  &:hover {
    color: #ffd200;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, text-shadow 0.3s ease;

  :hover {
    color: #ffd200;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const LogoutLink = styled(NavLink)`
  :hover {
    color: red;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;
