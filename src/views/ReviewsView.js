import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieReviews } from '../services/movies-api';

const ReviewsView = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetchMovieReviews(420818).then(response =>
            setReviews(response.results),
        );
    }, []);
    console.log(reviews);

    return (
        <>
            <h4>ReviewsView</h4>
            {reviews
                ? reviews.map(review => (
                      <li>
                          <h5>Author: {review.author}</h5>
                          <p>{review.content}</p>
                      </li>
                  ))
                : ''}
        </>
    );
};
export default ReviewsView;
