import axios from "axios";

const API_KEY = "38f08aa408c84725225e0124ca038445";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const handleResponse = async (request) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export const fetchTrendingMovies = () => {
  return handleResponse(api.get("/trending/movie/day"));
};

export const fetchMoviesByQuery = (query) => {
  return handleResponse(api.get("/search/movie", { params: { query } }));
};

export const fetchMovieDetails = (movieId) => {
  return handleResponse(api.get(`/movie/${movieId}`));
};

export const fetchMovieCast = (movieId) => {
  return handleResponse(api.get(`/movie/${movieId}/credits`));
};

export const fetchMovieReviews = (movieId) => {
  return handleResponse(api.get(`/movie/${movieId}/reviews`));
};
