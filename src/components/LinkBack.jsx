import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieLink.styled';

const LinkBack = () => {
  const location = useLocation();
  return (
    <MovieLink to={location.state?.from ?? '/'} style={{ marginLeft: 20 }}>
      &lsaquo; Back
    </MovieLink>
  );
};
export default LinkBack;
