import { Nav, NavItem } from './AppBar.styled';

// const navItems = [
//   { href: '/', text: 'Trending' },
//   { href: 'search', text: 'Search' },
// ];

export const AppBar = () => {
  return (
    <Nav>
      {/* {navItems.map(({ href, text }) => (
        <NavItem to={href} key={href}>
          {text}
        </NavItem>
      ))} */}
      <NavItem to={'/'} end>
        Trending
      </NavItem>
      <NavItem to={'search'}>Search</NavItem>
    </Nav>
  );
};
