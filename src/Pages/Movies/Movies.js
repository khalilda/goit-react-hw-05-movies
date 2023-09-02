// import { Loader, MoviesList, SearchMovies } from 'components';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByName } from '../../Services/Api';
import { MainStyles } from '../Movies/Movies.styled';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();
  const fromQueryString = location.search.replace(/\?query=/, '');

  const getQuery = searchName => {
    searchName === ''
      ? toast.error('Please enter the name of the movie')
      : setQuery(searchName);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMoviesByName(query);
        const data = response.data.results;

        data.length === 0
          ? toast.error(`Sorry, we can't find any ${query}`)
          : setMoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMoviesByName(fromQueryString);
        const data = response.data.results;
        setMoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fromQueryString]);

  return (
    <MainStyles>
      <SearchMovies onSubmit={getQuery} />
      {moviesData && <MoviesList moviesData={moviesData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainStyles>
  );
};

export default Movies;
