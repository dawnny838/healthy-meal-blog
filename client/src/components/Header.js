import react from 'react';
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { useContext } from "react";

const Header = () => {


  return(
    
    <Wrapper>
      
      <Nav>
      
        <>

        {
          // <StyledNavLink to="/login">Login</StyledNavLink>
          <NavLink to="/login">Login</NavLink>
        }
        {
          // <StyledNavLink to="/homepage">Home</StyledNavLink>
          <NavLink to="/homepage">Home</NavLink>
        }
        {
          // <StyledNavLink to="/homepage">Home</StyledNavLink>
          <NavLink to="/viewrecipe">Viewrecipes</NavLink>
        }
        </>
      </Nav>
    </Wrapper>
  )
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background: var(--color-alabama-crimson);
  height: 110px;
  padding: var(--padding-page) 18px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledNavLink = styled(NavLink)`
  background: var(--color-selective-yellow);
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--color-alabama-crimson);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-heading);
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;
  transition: all ease 400ms;

  /* &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  } */

  &:hover {
    background: var(--color-alabama-crimson);
    color: var(--color-selective-yellow);
    border-color: var(--color-selective-yellow);
  }
`;

export default Header;
