import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImage from '../../images/noImage.jpg';
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
  const [cast, setCast] = useState(null);

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

  return cast === 0 || cast.length === 0 ? (
    <ErrorText>
      We dont have any information about casts for this movie
    </ErrorText>
  ) : (
    <CastWrapp>
      {cast.map(castMember => {
        return (
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
        );
      })}
    </CastWrapp>
  );
};

export default Cast;
