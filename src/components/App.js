// import 'react-toastify/dist/ReactToastify.css';
// import { Footer, Layout } from './components';
// import { ToastContainer } from 'react-toastify';
// import { lazy } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('./pages/Home'));
// const Movies = lazy(() => import('./pages/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />} />
//         <Route path="cast" element={<Cast />} />
//         <Route path="reviews" element={<Reviews />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//       <ToastContainer />
//     </>
//   );

// import { lazy } from 'react';
// import { Navigate, Route, Routes } from 'react-router-dom';
// const Home = lazy(() => import('./pages/Home'));
// const Movies = lazy(() => import('./pages/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));
// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />} />
//         <Route path="cast" element={<Cast />} />
//         <Route path="reviews" element={<Reviews />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//       <Footer />
//       <ToastContainer />
//     </>
//   );
// };

import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Suspense>
  );
};
