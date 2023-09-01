import 'react-toastify/dist/ReactToastify.css';
import { Footer, Layout } from './components';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieD = lazy(() => import('./pages/MovieD'));
const Cast = lazy(() => import('./pages/Cast'));
const Reviews = lazy(() => import('./pages/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieD />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

//q whats wrong with the whole code?
//q why is it not working?
//q what is the problem?
//q what is the solution?
