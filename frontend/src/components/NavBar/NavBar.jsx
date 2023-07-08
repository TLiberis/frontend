import React, { useState, useEffect } from 'react';
import {
  LinksContainer,
  LogoLink,
  LogoutLink,
  NavBarContainer,
  NavLink,
} from './navbar.styled';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  function logoutHandle() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  }

  return (
    <NavBarContainer>
      <div>
        <LogoLink to="/">QuickAnswers</LogoLink>
      </div>
      <LinksContainer>
        {isLoggedIn ? (
          <>
            <NavLink to="/post-question">Post a new question</NavLink>
            <LogoutLink onClick={logoutHandle}>Log out</LogoutLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </LinksContainer>
    </NavBarContainer>
  );
}
