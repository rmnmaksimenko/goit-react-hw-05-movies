import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavItem = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
