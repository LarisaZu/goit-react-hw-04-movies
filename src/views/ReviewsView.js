import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/movies-api';

const ReviewsView = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetchMovieReviews(movieId).then(response =>
            // console.log(response.results)
            setReviews(response.results),
        );
    }, [movieId]);

    return (
        <>
            {reviews && reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <h5>Author: {review.author}</h5>
                            <p>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                "We don't have any reviews for this movie"
            )}
        </>
    );
};
export default ReviewsView;
