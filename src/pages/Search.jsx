import { searchMovies } from 'components/FetchAPI';
import moviesMap from 'components/MoviesMap';
import { SearchBar } from 'components/SearchBar';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Search = () => {
  const [movieFilter, setMovieFilter] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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

  return (
    <div>
      <SearchBar onQuery={handleSubmit} />
      <ul>{moviesMap(movieFilter, location)}</ul>
    </div>
  );
};
