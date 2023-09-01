import { Header, NavLinkStyled } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </Header>
  );
};

export default AppBar;


//q: how to fix the code?
//q: what is the problem?
//q: what is the solution?
