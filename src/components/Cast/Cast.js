import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



import noImage from '../../images/noImage.jpg';
import { getCast } from "../../services/api";
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
            const response = await getCast(movieId);
            const castsData = response.data.cast;
            setCast(castsData);
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
)}, [];
    
return Cast.length === 0 ? (
    <ErrorText>We dont have any information about casts for this movie</ErrorText>
) : (
        <CastWrapp>
            {casts.map(cast => {
                return (
                    <CastBox key={cast.credit.id}>
                        <Photo
                            src={
                                cast.profile_path
                                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                                    : noImage
                            }
                            alt={cast.name}
                        />
                        <Name>{cast.name}</Name>
                        <Character>Character: {cast.character}</Character>
                    </CastBox>
                );
            })};
    </CastWrapp>
);



export default Cast;