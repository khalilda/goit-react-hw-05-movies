import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  border-bottom: solid 1px darkblue;
  box-shadow: 0 0 13px 3px darkblue;

  > nav {
    display: flex;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffff;
  font-weight: 500;

  &.active {
    color: white;
    background-color: darkblue;
  }
`;
