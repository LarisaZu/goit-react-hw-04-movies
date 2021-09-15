import { useState, useEffect } from 'react';
import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
} from 'react-router-dom';
import { options, fetchMovieById } from '../services/movies-api';
import AdditionalInfoView from './AdditionalInfoView';
import s from './css/MovieDetails.module.css';

const MovieDetailsView = () => {
    const location = useLocation();
    const history = useHistory();
    // const { path } = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        fetchMovieById(movieId).then(setMovie);
    }, [movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/');
    };

    return (
        <>
            <button type="button" onClick={onGoBack}>
                Go back
            </button>
            {movie && (
                <>
                    <div className={s.wrapper}>
                        <img
                            src={
                                movie.poster_path
                                    ? `${options.IMG_URL}w500${movie.poster_path}`
                                    : `${options.DEFAULT_IMG_URL}`
                            }
                            alt={movie.title}
                            className={s.poster}
                        />

                        <div className={s.description}>
                            <h3>
                                {movie.title} (
                                {movie.release_date
                                    ? movie.release_date.slice(0, 4)
                                    : ''}
                                )
                            </h3>
                            <p>
                                User Score: {(movie.vote_average * 100) / 10}%
                            </p>
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
                    </div>
                    {/* <Route path={`${path}`}> */}
                    <AdditionalInfoView />
                    {/* </Route> */}
                </>
            )}
        </>
    );
};

export default MovieDetailsView;
