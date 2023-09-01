import { ReadMore } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies-api';
import { FaUserCircle } from 'react-icons/fa'; // https://react-icons.github.io/react-icons/icons?name=fa
import { ErrorText, ReviewWrapp, UserName } from './Reviews.styled';



const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        if (!movieId) {
            return;
        }   
        async function fetchData() {
            const reviews = await getReviews(movieId);
            setReviews(reviews);
        } catch (error) {
            console.log(error);
        }
        fetchData();
    }, []);

    return reviews.length !== 0 ? (
        <ul>
            {reviews.map(revie => {
                <ReviewWrapp key={revie.id}>
                    <UserName>
                        <FaUserCircle
                            style={{ 
                                fill: '#e50914',
                                marginRight: '10px',
                                width: '30px',
                                height: '30px',
                         }}
                        />
                        {revie.author}
                    </UserName>
                    <ReadMore>{revie.content}</ReadMore>
                </ReviewWrapp>
            })}
        </ul>
    ) : (
        <ErrorText>We don't have any reviews for this movie</ErrorText>
    );
};

export default Reviews;

