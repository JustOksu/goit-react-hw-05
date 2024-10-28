import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data.results);
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>: {review.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
