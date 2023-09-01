import { Header, NavLinkStyled } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Header>
      <nav>
        {navItems.map(({ item, index }) => (
          <NavLinkStyled key={index} to={item.href}>
            {item.text}
          </NavLinkStyled>
        ))}
      </nav>
    </Header>
  );
};

export default AppBar;

// <NavLinkStyled to="/">Home</NavLinkStyled>
//         <NavLinkStyled to="/movies">Movies</NavLinkStyled>
