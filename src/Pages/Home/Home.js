import TrendMoviesList from 'components/TrendMoviesList/TrendMoviesList';
import { MainStyles } from '../Home/Home.styled';

const Home = () => {
  return (
    <MainStyles>
      <h1>Trending Today</h1>
      <TrendMoviesList />
    </MainStyles>
  );
};

export default Home;
