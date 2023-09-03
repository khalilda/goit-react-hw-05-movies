import { Suspense, useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import noPhoto from 'img/noImage.png';
import { getMovieById } from '../../Services/Api';
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
import Loader from 'components/Loader/Loader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
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
        const response = await getMovieById(movieId);
        const movieInfo = response.data;
        setMovieInfo(movieInfo);
        setGenres(movieInfo.genres);
        setOldPath(location.state.from);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId, location.state.from]);

  const goBack = () => {
    navigate(oldPath);
  };

  if (!movieInfo) {
    return <Loader />;
  }

  const { original_title, release_date, vote_average, poster_path, overview } =
    movieInfo;

  return (
    <MainStyles>
      <BtnGoBack type="button" onClick={goBack}>
        <BsArrowLeft style={{ marginRight: '10px' }} />
        Go back
      </BtnGoBack>
      {movieInfo && (
        <InfoWrapp>
          <Img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noPhoto
            }
            alt={original_title}
          />
          <Wrapp>
            <Title>
              {original_title}{' '}
              <span>({new Date(release_date).getFullYear()})</span>
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
        </InfoWrapp>
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
