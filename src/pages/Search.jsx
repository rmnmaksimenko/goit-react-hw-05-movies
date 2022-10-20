import styled from '@emotion/styled';
import { searchMovies } from 'components/fetchMovies';
import { SearchBox } from 'components/SearchBox';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

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

export const Search = () => {
  const [movieFilter, setMovieFilter] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  const handleSubmit = submitText => {
    setSearchParams({ query: submitText.trim() });
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function filterMovie(queryString) {
      try {
        const { data } = await searchMovies(queryString);
        setMovieFilter(data.results);
      } catch (error) {}
    }
    filterMovie(movieName);
  }, [movieName]);
  console.log(movieFilter);

  const moviesMap = movieFilter
    ? movieFilter.map(({ title, id }) => {
        return (
          <li key={id}>
            <MovieLink to={`/movie/${id}`}>{title}</MovieLink>
          </li>
        );
      })
    : null;
  return (
    <div>
      <SearchBox onQuery={handleSubmit} />
      <ul>{moviesMap}</ul>
    </div>
  );
};
