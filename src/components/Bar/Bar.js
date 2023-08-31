import { Header, NavLinkStyled } from './Bar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const Bar = () => {
  return (
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </Header>
  );
};

export default Bar;
