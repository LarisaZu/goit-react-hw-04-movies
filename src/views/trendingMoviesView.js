import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import MoviesList from './MoviesList';

const TrendingMoviesView = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        fetchTrendingMovies().then(response =>
            setTrendingMovies(response.results),
        );
    }, []);

    return <>{trendingMovies && <MoviesList moviesArray={trendingMovies} />}</>;
};

export default TrendingMoviesView;
