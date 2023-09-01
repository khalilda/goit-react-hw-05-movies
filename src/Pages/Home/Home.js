import { TrendMoviesList } from 'Components';

import { MainStyles } from './Home.styled';

const Home = () => {
  return (
    <MainStyles>
      <h1>Trending Today</h1>
      <TrendMoviesList />
    </MainStyles>
  );
};

export default Home;
