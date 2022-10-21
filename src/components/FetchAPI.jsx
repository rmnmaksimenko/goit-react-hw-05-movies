import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = '1b4670fa78c776f91ad91934fb8aeb13';

export const fetchTrending = async () => {
  const url = `trending/movie/day?api_key=${API_KEY}`;
  return await axios.get(url);
};

export const searchMovies = async query => {
  const url = `search/movie?api_key=${API_KEY}&query=${query}`;
  return await axios.get(url);
};

export const fetchMovieById = async id => {
  const url = `movie/${id}?api_key=${API_KEY}`;
  return await axios.get(url);
};

export const fetchCast = async id => {
  const url = `movie/${id}/credits?api_key=${API_KEY}`;
  return await axios.get(url);
};

export const fetchReviews = async id => {
  const url = `movie/${id}/reviews?api_key=${API_KEY}`;
  return await axios.get(url);
};
