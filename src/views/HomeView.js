import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import { fetchTrendingMovies } from '../services/movies-api';

const HomeView = () => {
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
            <PageHeading text="Trending Today" />

            {trendingMovies &&
                trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
        </>
    );
};

export default HomeView;
