import LinkBack from 'components/LinkBack';
import { fetchMovieById } from 'components/FetchAPI';
import { MovieLink } from 'components/MovieLink.styled';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AdditionalInfo,
  InfoContainer,
  MovieContainer,
  PosterContainer,
} from './Movie.styled';
import { NavItem } from 'components/AppBar.styled';

const Movie = () => {
  const { id } = useParams();
  const [poster, setPoster] = useState('');
  const [movieDesc, setMovieDesc] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('0');
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState('n/a');
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
      }
    }
    showMovie();
  });
  console.log(location);
  return (
    <main>
      <LinkBack />
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
          <AdditionalInfo>
            <li>
              <NavItem to="cast" state={{ from: location.state?.from ?? '/' }}>
                Cast
              </NavItem>
            </li>
            <li>
              <NavItem
                to="reviews"
                state={{ from: location.state?.from ?? '/' }}
              >
                Reviews
              </NavItem>
            </li>
          </AdditionalInfo>
        </InfoContainer>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default Movie;
