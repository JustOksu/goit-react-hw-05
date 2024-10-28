import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieDetails } from "../../api"; // Використовуйте свій шлях до функції API
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.movieDetails}>
      <Link to={backLink}>Go Back</Link>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <div className={styles.additionalInfo}>
        <Link to="cast" state={{ from: backLink }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: backLink }}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
