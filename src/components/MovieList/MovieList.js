import PT from 'prop-types';
import { MoviesListStyles } from '../MovieList/MovieList.styled';
import MovieCard from 'components/MovieCard/MovieCard';
const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStyles>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesListStyles>
  );
};
MoviesList.propTypes = {
  moviesData: PT.array.isRequired,
};

export default MoviesList;
