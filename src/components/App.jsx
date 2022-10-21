import { Movie } from 'pages/Movie';
import { Search } from 'pages/Search';
import Trending from 'pages/Trending';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast';
import './index.css';
import { Layout } from './Layout';

// api_key = 1b4670fa78c776f91ad91934fb8aeb13

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} end />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={<div>404 Not found</div>} />
        </Route>
      </Routes>
    </div>
  );
};
