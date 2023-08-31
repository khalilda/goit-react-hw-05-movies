import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b77d00eed50f80be0fcda7d60db1b50b';

export const api = axios.create({
  baseURL: URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendMovies = () => {
  const respone = api.get('/trending/movie/day');
  return respone;
};

export const getMoviesByName = query => {
  const respone = api.get(`/search/movie?query=${query}`);
  return respone;
};

export const getMovieD = movieId => {
  const respone = api.get(`/movie/${movieId}`);
  return respone;
};

export const getMovieC = movieId => {
  const respone = api.get(`/movie/${movieId}/credits`);
  return respone;
};

export const getReviews = movieId => {
  const respone = api.get(`/movie/${movieId}/reviews`);
  return respone;
};