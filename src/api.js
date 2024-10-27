import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "38f08aa408c84725225e0124ca038445";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

// Запит для отримання трендових фільмів
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${API_URL}/trending/movie/day`, options);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${API_URL}/search/movie`, {
    ...options,
    params: { query, include_adult: false, language: "en-US", page: 1 },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`${API_URL}/movie/${movieId}`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/credits`,
    options
  );
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/reviews`,
    options
  );
  return response.data;
};
