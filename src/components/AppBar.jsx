import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Trending' },
  { href: 'search', text: 'Search' },
];

export const AppBar = () => {
  return (
    <div>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </nav>
    </div>
  );
};
