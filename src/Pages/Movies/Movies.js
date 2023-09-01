import { Loader, MoviesList, SearchMovies } from 'components';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByName } from 'services/movies-api';
import { MainStyels } from './Movies.styled';
// import MoviesList from './MoviesList';

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
    <MainStyels>
      <SearchMovies onSubmit={getQuery} />
      {moviesData && <MoviesList moviesData={moviesData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainStyels>
  );
};

export default Movies;
