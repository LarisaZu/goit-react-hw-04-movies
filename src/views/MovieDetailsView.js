import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { options, fetchMovieById } from '../services/movies-api';
import AdditionalInfoView from './AdditionalInfoView';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsView = () => {
    const params = useParams();
    console.log(params);
    const { movieId } = useParams();
    // const ddf = useParams();
    // console.log(ddf);
    const [movie, setMovie] = useState();

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId]);
    // console.log(movie);
    // console.log(movie.poster_path);
    // const src = `${imageUrl}${movie.poster_path}`
    // console.log(src);
    // response => console.log(response)
    // console.log(movieId);
    return (
        <>
            {/* {movie && <h1>rtrtrtr</h1>} */}
            {movie && (
                <>
                    <div>
                        <img
                            src={`${imageUrl}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>
                            {movie.title} (
                            {movie.release_date
                                ? movie.release_date.slice(0, 4)
                                : ''}
                            )
                        </h3>
                        <p>User Score: {(movie.vote_average * 100) / 10}%</p>
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                        {movie.genres && (
                            <>
                                <h4>Genres</h4>
                                <p>
                                    {movie.genres
                                        .map(({ name }) => name)
                                        .join(', ')}
                                </p>
                            </>
                        )}
                    </div>
                    <AdditionalInfoView />
                </>
            )}
        </>
    );
};

export default MovieDetailsView;
