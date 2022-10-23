import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastBox } from './Cast.styled';
import { fetchCast } from '../FetchAPI/FetchAPI';

const Cast = () => {
  const [cast, setCast] = useState(``);
  const { id } = useParams();
  useEffect(() => {
    async function showCast() {
      try {
        const { data } = await fetchCast(id);
        // console.log(data.cast);
        setCast(
          data.cast.map(({ name, character, profile_path, id }) => {
            const photo = !profile_path
              ? 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              : `https://image.tmdb.org/t/p/original${profile_path}`;
            return (
              <CastBox key={id}>
                <img width={120} src={photo} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </CastBox>
            );
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    showCast();
  }, [id]);
  //   console.log(cast);
  return <div>{cast}</div>;
};

export default Cast;
