import axios from 'axios';

const API_KEY = '1b4670fa78c776f91ad91934fb8aeb13';

export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  return await axios.get(url);
};

export const fetchMovieById = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  return await axios.get(url);
};
