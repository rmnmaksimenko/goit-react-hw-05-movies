import { fetchMovies } from 'components/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const MovieLink = styled(NavLink)`
  color: #fff;
  &:hover,
  &:focus {
    color: #ddd;
  }
  &:active {
    color: red;
  }
`;

export default function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function showTrendingMovies() {
      try {
        const { data } = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    showTrendingMovies();
  }, []);
  console.log(2, movies);
  const moviesMap = movies
    ? movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <MovieLink to={`movie/${id}`}>
              {title} {id}
            </MovieLink>
          </li>
        );
      })
    : null;
  return <ul>{moviesMap}</ul>;
}
