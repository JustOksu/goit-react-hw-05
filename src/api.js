import axios from "axios";

const API_KEY = "38f08aa408c84725225e0124ca038445";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchTrendingMovies = async () => {
  const response = await api.get("/trending/movie/day", {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMoviesByQuery = async (query) => {
  const response = await api.get("/search/movie", {
    params: { api_key: API_KEY, query },
  });
  return response.data;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};
