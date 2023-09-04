import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../../img/noImage.png';
import { getCast } from '../../Services/Api';
import {
  CastBox,
  CastWrapp,
  Character,
  Name,
  Photo,
  ErrorText,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    async function fetchData() {
      try {
        const response = await getCast(movieId);
        const castsData = response.data.cast;
        setCast(castsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <ErrorText>
        We don't have any information about casts for this movie
      </ErrorText>
    );
  }

  return (
    <CastWrapp>
      {cast.map(castMember => (
        <CastBox key={castMember.credit.id}>
          <Photo
            src={
              castMember.profile_path
                ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                : noImage
            }
            alt={castMember.name}
          />
          <Name>{castMember.name}</Name>
          <Character>Character: {castMember.character}</Character>
        </CastBox>
      ))}
    </CastWrapp>
  );
};
export default Cast;
