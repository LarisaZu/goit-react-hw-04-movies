export const options = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: 'bb99cf0123948bcb57616045b789da85',
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
