import { MoviesList } from 'components';
import { useState, useEffect } from 'react';

import { getTrendMovies } from '../../Services/Api';

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

  return <MoviesList moviesData={moviesData} />;
};

export default TrendMoviesList;
