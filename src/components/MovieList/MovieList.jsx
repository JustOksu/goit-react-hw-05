import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200"; // базова URL для зображень TMDB

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movieItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title || movie.name}
              className={styles.moviePoster}
            />
            <p>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;
