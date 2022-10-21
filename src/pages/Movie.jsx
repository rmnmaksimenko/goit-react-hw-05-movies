import { fetchMovieById } from 'components/FetchAPI';
import { MovieLink } from 'components/MovieLink.styled';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export const Movie = () => {
  const { id } = useParams();
  const [movieDesc, setMovieDesc] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('0');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  console.log(location);
  useEffect(() => {
    async function showMovie() {
      try {
        const { data } = await fetchMovieById(id);
        setMovieDesc(data.overview);
        setTitle(data.title);
        setScore((data.vote_average * 10).toFixed(0));
        setGenres(
          data.genres
            .map(({ name }) => {
              return name;
            })
            .join(', ')
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    showMovie();
  });
  return (
    <main>
      <MovieLink to={backLinkHref}>Back</MovieLink>
      <div>
        <h2>{title}</h2>
        <p>User score: {score}%</p>
        <h3>Description</h3>
        <p>{movieDesc}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
        <ul>
          <li>
            <MovieLink to="cast">Cast</MovieLink>
          </li>
          <li>
            <MovieLink to="reviews">Reviews</MovieLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
