import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies } from "../../api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
