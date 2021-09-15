import { Link, useLocation } from 'react-router-dom';
import { options } from '../services/movies-api';
import s from '../views/css/Views.module.css';

const MoviesList = ({ moviesArray }) => {
    const location = useLocation();

    return (
        <ul className={s.gallery}>
            {moviesArray.map(movie => (
                <li key={movie.id} className={s.gallery_item}>
                    <Link
                        to={{
                            pathname: `movies/${movie.id}`,
                            state: { from: location },
                        }}
                    >
                        <img
                            src={
                                movie.poster_path
                                    ? `${options.IMG_URL}w500${movie.poster_path}`
                                    : `${options.DEFAULT_IMG_URL}`
                            }
                            alt={movie.title}
                            className={s.poster}
                        />

                        <span className={s.movie_title}>{movie.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;
