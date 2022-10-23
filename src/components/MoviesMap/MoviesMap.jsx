import { MovieLink } from '../MovieLink.styled';

const moviesMap = (movieList, location) =>
  movieList
    ? movieList.map(({ title, id }) => {
        return (
          <li key={id}>
            <MovieLink to={`/movie/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        );
      })
    : null;

export default moviesMap;
