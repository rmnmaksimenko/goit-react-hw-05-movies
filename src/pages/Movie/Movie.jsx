import LinkBack from 'components/LinkBack';
import { fetchMovieById } from 'components/FetchAPI';
import { MovieLink } from 'components/MovieLink.styled';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { InfoContainer, MovieContainer, PosterContainer } from './Movie.styled';

export const Movie = () => {
  const { id } = useParams();
  const [poster, setPoster] = useState('');
  const [movieDesc, setMovieDesc] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('0');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState('n/a');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    async function showMovie() {
      try {
        const { data } = await fetchMovieById(id);
        setMovieDesc(data.overview);
        setTitle(data.title);
        setScore((data.vote_average * 10).toFixed(0));
        setYear(data.release_date.slice(0, 4));
        setPoster(
          `https://image.tmdb.org/t/p/w500${data.poster_path}` ??
            `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`
        );
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
      } finally {
        setLoading(false);
      }
    }
    showMovie();
  });
  console.log(location);
  function Loader() {
    if (loading === true)
      return (
        <div>
          <p>Loading, please wait</p>
        </div>
      );
    return (
      <div>
        <MovieContainer>
          <PosterContainer>
            <img width={200} src={poster} alt={title} />
          </PosterContainer>
          <div>
            <h2>
              {title} ({year})
            </h2>
            <p>User score: {score}%</p>
            <h3>Description</h3>
            <p>{movieDesc}</p>
            <h3>Genres</h3>
            <p>{genres}</p>
          </div>
        </MovieContainer>
        <InfoContainer>
          <h3>Additional info:</h3>
          <ul>
            <li>
              <MovieLink
                to="cast"
                state={{ from: location.state?.from ?? '/' }}
              >
                Cast
              </MovieLink>
            </li>
            <li>
              <MovieLink
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </MovieLink>
            </li>
          </ul>
        </InfoContainer>
        <Outlet />
      </div>
    );
  }
  return (
    <main>
      <LinkBack />
      {Loader()}
    </main>
  );
};
