import fetchMovies from 'components/fetchMovies';
import { useEffect, useState } from 'react';

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
        return <li key={id}>{title}</li>;
      })
    : null;
  return <ul>{moviesMap}</ul>;
}
