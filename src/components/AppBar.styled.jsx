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
  border-bottom: 1px solid #fff;
`;
