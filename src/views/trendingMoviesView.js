import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import s from './Views.module.css';
import { options } from '../services/movies-api';
import { fetchTrendingMovies } from '../services/movies-api';

const TrendingMoviesView = () => {
    // const {url} = useRouteMatch();
    // console.log(url);
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        fetchTrendingMovies().then(response =>
            setTrendingMovies(response.results),
        );
    }, []);

    console.log(trendingMovies);
    return (
        <>
            {trendingMovies &&
                trendingMovies.map(movie => (
                    <li key={movie.id} className={s.gallery_item}>
                        <Link to={`movies/${movie.id}`}>
                            <img
                                src={`${options.IMG_URL}w500${movie.poster_path}`}
                                alt={movie.title}
                                className={s.poster}
                            />
                            <span className={s.movie_title}>{movie.title}</span>
                        </Link>
                    </li>
                ))}
        </>
    );
};

export default TrendingMoviesView;
