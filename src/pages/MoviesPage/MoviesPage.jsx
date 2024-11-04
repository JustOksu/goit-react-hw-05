import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data.results);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchQuery = form.elements.search.value.trim();

    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams({});
    }

    form.reset();
  };

  return (
    <div className={styles.moviesPage}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          name="search"
          placeholder="Search for movies"
          defaultValue={query}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
      {movies.length === 0 && !loading && !error && <p>No movies found.</p>}
    </div>
  );
};

export default MoviesPage;
