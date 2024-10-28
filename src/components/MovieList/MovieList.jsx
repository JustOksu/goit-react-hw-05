import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.movieLink}
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={styles.movieImage}
              />
            ) : (
              <div className={styles.noImage}>No Image</div>
            )}
            <h2 className={styles.movieTitle}>{movie.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
