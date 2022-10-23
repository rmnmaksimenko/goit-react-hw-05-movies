import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import './index.css';

const Trending = lazy(() => import('pages/Trending'));
const Search = lazy(() => import('pages/Search'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} end />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Trending />} />
        </Route>
      </Routes>
    </div>
  );
};
