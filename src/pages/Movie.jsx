import { fetchMovieById } from 'components/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const Movie = () => {
  const { id } = useParams();
  const [movieDesc, setMovieDesc] = useState('');
  const [title, setTitle] = useState('');
  const [score, setScore] = useState('0');
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    showMovie();
  }, []);
  return (
    <main>
      <Link to={backLinkHref}>Back</Link>
      <div>
        <h2>{title}</h2>
        <p>User score: {score}%</p>
        <h3>Description</h3>
        <p>{movieDesc}</p>
      </div>
    </main>
  );
};
