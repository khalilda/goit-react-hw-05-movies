import { Loader } from 'components';
import { Suspense, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import noPhoto from 'images/noPhoto.jpg';
import { getMovieById } from 'services/movies-api';
import {
    BtnGoBack,
    Img,
    InfoWrapp,
    InfoLink,
    InfoTitle,
    MainStyles,
    MoreInfoList,
    Overview,
    Text,
    Title,
    Wrapp,
} from './MovieDetails.styled';

const MoviesDetails = () => {
    const { movieId } = useParams();
    const [movieInfo, setmovieInfo] = useState({});
    const location = useLocation();
    const [genres, setGenres] = useState([]);
    const [oldPath, setOldPath] = useState('');
    
    let navigate = useNavigate();

    useEffect(() => {
        if (!movieId) {
            return;
        }
        async function fetchData() {
            try {
                const response = await getMoviesDetails(movieId);
                const movieInfo = response.data;
                setmovieInfo(movieInfo);
                setGenres(movieInfo.genres);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        setOldPath(location.state.from);
    }, []);

    const goBack = () => {
        navigate(oldPath);
    }

    const { original_title, release_date, vote_average, poster_path, overview } = movieInfo;
    return (
        <MainStyles>
            <BtnGoBack type="button" onClick={goBack}>
                <BsArrowLeft style={{ marginRight: '10px' }} />
                Go back
            </BtnGoBack>
            <movieInfo && (
            <infoWrapp>
                <Img
                    src={
                        poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : noPhoto
                    }
                    alt={original_title}
                />
                <Wrapp>
                    <Title>{original_title}<span>({new Date(release_date).getFullYear()})</span>
                    </Title>
                    <Text>
                        User Score: <span>{Math.round(vote_average) * 10}%</span>
                    </Text>
                    <Overview> {overview}</Overview>
                    <InfoTitle>Overview</InfoTitle>
                    {genres.length !== 0 && <InfoTitle>Genres</InfoTitle>}
                    {genres.map(genre => {
                        return <span key={genre.id}>{genre.name}</span>;
                    })}
                </Wrapp>
            </infoWrapp>
            )}
            <MoreInfoList>
                <li>
                    <InfoLink to={'cast'} state={location.state} id={movieId}>
                        Cast
                    </InfoLink>
                </li>
                <li>
                    <InfoLink to={'reviews'} state={location.state} id={movieId}>
                        Reviews
                    </InfoLink>
                </li>
            </MoreInfoList>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </MainStyles>
    );
};

export default MoviesDetails;
