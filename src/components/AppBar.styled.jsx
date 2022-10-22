import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 8px 40px;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
background-color: #333;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
  border-bottom: 1px solid #fff;
`;
