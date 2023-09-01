import PT from 'prop-types';
import { AiOutlineLike } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import noPhoto from 'images/noPhoto.jpg';
import {
  Img,
  InfoWrapp,
  MovieItems,
  RatingWrapp,
  Title,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const { id, title, vote_average, poster_path, release_date } = movie;
  return (
    <MovieItems key={id}>
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
    </MovieItems>
  );
};

MovieCard.propTypes = {
  movie: PT.object.isRequired,
};

export default MovieCard;
