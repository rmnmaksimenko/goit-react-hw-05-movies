import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieLink.styled';

const LinkBack = () => {
  const location = useLocation();
  return <MovieLink to={location.state?.from ?? '/'}>Back</MovieLink>;
};
export default LinkBack;
