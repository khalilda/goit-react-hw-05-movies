import PT from 'prop-types';
import { AiOutlineLike } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import { MoviesListStyles } from 'components/MovieList/MovieList.styled';
import noPhoto from '../../img/noImage.png';
import { Img, InfoWrapp, RatingWrapp, Title } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, poster_path, release_date } = movie;
  return (
    <MoviesListStyles key={id}>
      <NavLink
        to={{
          pathname: location.pathname === `/movies/${id}`,
          // ? `/movies/${id}`
          // : `movies/${id}`,
        }}
        state={{ from: location }}
      >
        <RatingWrapp>
          <AiOutlineLike /> <span>{Math.round(vote_average) * 10}%</span>
        </RatingWrapp>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPhoto
          }
          alt={title}
        />
        <InfoWrapp>
          <Title>{title}</Title>
          <p>
            Realase date: <span>{release_date}</span>
          </p>
        </InfoWrapp>
      </NavLink>
    </MoviesListStyles>
  );
};

MovieCard.propTypes = {
  movie: PT.object.isRequired,
};

export default MovieCard;
