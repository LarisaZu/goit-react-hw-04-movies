export const options = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: 'bb99cf0123948bcb57616045b789da85',
    IMG_URL: 'https://image.tmdb.org/t/p/',
    DEFAULT_IMG_URL:
        'https://image.tmdb.org/t/p/w342/AvgrHw6YEehlNxVZNVDoVz2Huht.jpg',
};

async function fetchApi(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? response.json()
        : Promise.reject(new Error('Not Found'));
}

export function fetchTrendingMovies() {
    return fetchApi(
        `${options.BASE_URL}trending/movie/day?api_key=${options.API_KEY}`,
    );
}

export function fetchMovieById(movieId) {
    return fetchApi(`
${options.BASE_URL}/movie/${movieId}?api_key=${options.API_KEY}`);
}

export function fetchMovieByQuery(query) {
    return fetchApi(`
${options.BASE_URL}search/movie?api_key=${options.API_KEY}&query=${query}`);
}

export function fetchMovieCast(movie_id) {
    return fetchApi(`
${options.BASE_URL}movie/${movie_id}/credits?api_key=${options.API_KEY}`);
}

export function fetchMovieReviews(movie_id) {
    return fetchApi(`
${options.BASE_URL}movie/${movie_id}/reviews?api_key=${options.API_KEY}`);
}
