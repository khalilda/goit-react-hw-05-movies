import { MovieCard } from 'components';
import PT from 'prop-types';
import { MoviesListStales } from './MovieList.styled';
const MoviesList = ({ moviesData }) => {
  return (
    <MoviesListStales>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </MoviesListStales>
  );
};
MoviesList.propTypes = {
  moviesData: PT.array.isRequired,
};

export default MoviesList;
