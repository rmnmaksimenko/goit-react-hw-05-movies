import { Nav, NavItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <header>
      <Nav>
        <NavItem to={'/'} end>
          Trending
        </NavItem>
        <NavItem to={'search'}>Search</NavItem>
      </Nav>
    </header>
  );
};
