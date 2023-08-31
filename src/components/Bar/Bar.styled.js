import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #fff;
  box-shadow: 0px 0px 10px 0px #fff;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 250ms ease-in-out;

  &.active {
    color: #000;
  }
`;
