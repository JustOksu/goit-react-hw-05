import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div className={styles.castList}>
      {cast.length > 0 ? (
        cast.map((actor) => (
          <div key={actor.cast_id} className={styles.actor}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>
              {actor.name} as {actor.character}
            </p>
          </div>
        ))
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  );
};

export default MovieCast;
