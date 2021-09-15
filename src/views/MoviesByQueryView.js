import { useState, useEffect, lazy, Suspense } from 'react';
import {
    Route,
    useLocation,
    useRouteMatch,
    useHistory,
} from 'react-router-dom';
import { fetchMovieByQuery } from '../services/movies-api';
// import MoviesList from './MoviesList';
import Searchbar from '../components/Searchbar/Searchbar';
const MoviesList = lazy(() => import('./MoviesList'));

const MoviesByQueryView = () => {
    const { path } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [moviesByQuery, setMoviesByQuery] = useState(null);

    const queryString = new URLSearchParams(location.search).get('query') ?? '';

    useEffect(() => {
        if (queryString === '') {
            return;
        }

        fetchMovieByQuery(queryString).then(response => {
            if (response.results.length === 0) {
                alert('Nothing was found');
            } else {
                setMoviesByQuery(response.results);
            }
        });
    }, [queryString]);

    // console.log('location.search:', `${path}${location.search}`);
    const handleFormSubmit = query => {
        setQuery(query);
        history.push({ ...location, search: `query=${query}` });
    };

    return (
        <>
            <Searchbar onSubmit={handleFormSubmit} />

            {moviesByQuery && (
                <Suspense fallback={<h1>LOADING...</h1>}>
                    <Route to={`${path}${location.search}`}>
                        <MoviesList moviesArray={moviesByQuery} />
                    </Route>
                </Suspense>
            )}
        </>
    );
};
export default MoviesByQueryView;
