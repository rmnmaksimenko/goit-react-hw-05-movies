import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
  color: #fff;
  &:hover,
  &:focus {
    color: #ddd;
  }
  &:active {
    color: red;
  }
`;
