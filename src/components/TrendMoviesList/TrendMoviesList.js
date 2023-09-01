import { MoviesL } from '../MoviesL/MoviesL';
import { useState, useEffect } from 'react';

import { getTrendMovies } from '../../Services/Api';

const TrendMoviesL = () => {
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

  return <MoviesL moviesData={moviesData} />;
};

export default TrendMoviesL;
