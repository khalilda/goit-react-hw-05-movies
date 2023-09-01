import PT from 'prop-types';
import { AiTowToneLike } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import noPhoto from 'images/noPhoto.jpg';
import {
    Img,
    InfoWrapp,
    MovieItems,
    RatingWrapp,
    Title,
} from './MovieC.styled';


const MovieC = ({ movie }) => {
    const location = useLocation();
    const { id, title, vote_average, poster_path, releas_date } = movie;
    return (
        <MovieItems key={id}>
            <NavLink
                to={{
                    pathname: location.pathname === `/movies/${id}` : `movies/${id}`,
                }}
            state={{ from: location }}>
            <RatingWrapp>
                <AiTowToneLike /> <span>{Math.round(vote_average) * 10}%</span>
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
                <p>Realase date: <span>{releas_date}</span>
                </p>
            </InfoWrapp>
        </NavLink>
        </MovieItems >
    );
};

MovieC.propTypes = {
    movie: PT.object.isRequired,
};

export default MovieC;

            
    