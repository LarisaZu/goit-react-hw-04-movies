import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/movies-api';

const ReviewsView = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetchMovieReviews(movieId).then(response =>
            setReviews(response.results),
        );
    }, [movieId]);
    console.log(reviews);

    return (
        <>
            {reviews.length > 0
                ? reviews.map(review => (
                      <li key={review.id}>
                          <h5>Author: {review.author}</h5>
                          <p>{review.content}</p>
                      </li>
                  ))
                : "We don't have any reviews for this movie"}
        </>
    );
};
export default ReviewsView;
