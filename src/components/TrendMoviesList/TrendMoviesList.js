import { useState, useEffect } from 'react';
import { getTrendMovies } from '../../Services/Api';
import { MoviesListStyles } from 'components/MovieList/MovieList.styled';

const TrendMoviesList = () => {
  const [moviesData, setmoviesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTrendMovies();
        setmoviesData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <MoviesListStyles moviesData={moviesData} />;
};

export default TrendMoviesList;
