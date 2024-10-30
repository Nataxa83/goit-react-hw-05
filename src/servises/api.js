import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGZiNTIyM2VjNGViN2NjZTYzMzEyZTRiMmZkZTc5YyIsIm5iZiI6MTcyOTk1NjM0My4zMDM5OTgsInN1YiI6IjY3MWQwNWNhYzc4MDJjYzUwMzVhMmVhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KPI0ZkHtOft3usFDHz55uvGp09SVAOO_6lLhDOkR98M';


const movieApiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: API_KEY,
        accept: 'application/json',
    },
});

export const getTrendingMovies = async () => {
    const option = {
        params: {
            language: 'en-US',
        }
     
    }
    const { data } = await movieApiInstance.get('/trending/movie/day', option);
    return data;
}

export const getSearchMovies = async (query) => {
    const option = {
        params: {
            query,
            language: 'en-US',
            include_adult: 'false',
            page: 1,
        }
    }
    const { data } = await movieApiInstance.get('/search/movie', option);
    return data;
}

export const getMovieDetails = async (movieId) => {
    const option = {
        params: {
            language: 'en-US',
        }
    }
    const { data } = await movieApiInstance.get(`/movie/${movieId}`, option);
    return data;
}

export const getMovieCast = async (movieId) => {
    const option = {
        params: {
            language: 'en-US',
        }
    }
    const { data } = await movieApiInstance.get(`/movie/${movieId}/credits`, option);
    return data;
}   

export const getMovieReviews = async (movieId) => {
    const option = {
        params: {
            language: 'en-US',
        }
    }
    const { data } = await movieApiInstance.get(`/movie/${movieId}/reviews`, option);
    return data;
}

