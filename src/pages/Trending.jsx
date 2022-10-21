import { fetchTrending } from 'components/FetchAPI';
import { useEffect, useState } from 'react';
import moviesMap from 'components/MoviesMap';

export default function Trending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function showTrendingMovies() {
      try {
        const { data } = await fetchTrending();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    showTrendingMovies();
  }, []);
  console.log(2, movies);
  return <ul>{moviesMap(movies)}</ul>;
}
