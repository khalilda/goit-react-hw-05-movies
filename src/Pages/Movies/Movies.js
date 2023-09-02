// import { Loader, MoviesList, SearchMovies } from 'components';
import { useEffect, useState, Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByName } from '../../Services/Api';
import { MainStyles } from '../Movies/Movies.styled';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import MoviesList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const fromQueryString = searchParams.get('query') || '';

  const getQuery = searchName => {
    if (searchName === '') {
      toast.error('Please enter the name of the movie');
    } else {
      setSearchParams({ query: searchName });
      setQuery(searchName);
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      try {
        const response = await getMoviesByName(query, fromQueryString);
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

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getMoviesByName(fromQueryString);
  //       const data = response.data.results;
  //       setMoviesData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [fromQueryString]);

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
