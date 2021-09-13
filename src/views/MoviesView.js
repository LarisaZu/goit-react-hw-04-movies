import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/movies-api';

const MoviesView = () => {
    const [query, setQuery] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [moviesByQuery, setMoviesByQuery] = useState(null);
    // const [page, setPage] = useState(1);
    // fetch(`${options.BASE_URL}search/movie?api_key=${options.API_KEY}&page=1&query={one}`).then(response => response.json()).then(data => console.log(data));

    useEffect(() => {
        if (searchValue === '') {
            return;
        }
        fetchMovieByQuery(searchValue).then(response =>
            setMoviesByQuery(response.results),
        );
    }, [searchValue]);

    console.log(searchValue);
    console.log(moviesByQuery);
    console.log(query);

    const inputChangeHandler = event => {
        console.log(event.target.value.toLowerCase());
        setQuery(event.target.value.toLowerCase());
    };

    const submitHandler = event => {
        event.preventDefault();

        if (query?.trim() === '') {
            return alert('заполните поле для поиска');
        }

        setSearchValue(query);
        setQuery('');
    };

    return (
        <>
            <h1>Movies</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    autoComplete="off"
                    value={query}
                    autoFocus
                    placeholder="Search movies..."
                    onChange={inputChangeHandler}
                />
                <button type="submit">
                    <span>Search</span>
                </button>
            </form>

            {moviesByQuery &&
                moviesByQuery.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
        </>
    );
};

export default MoviesView;
