import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import NotFoundPage from "../../pages/NotFoundPage";
import { getMovieReviews } from "../../services/api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
    const { movieId } = useParams();
	const [movieReviews, setMovieReviews] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
    try {
        setLoading(true);
        const  data  = await getMovieReviews(movieId);
        setMovieReviews(data.results);
    
    } catch (error) {
        setError(error.message);
        console.log(error.message);
    }
    finally {
        setLoading(false);
    }
        }
        fetchReviews()
    }, [movieId])
    console.log(movieReviews)

    return (
        <>
        {loading && <Loader />}
      {movieReviews !== null && movieReviews.length > 0 ? (
          <>
          <ul className={css.castList}>
            {movieReviews.map(({ id, author, content,created_at }) => (
                <li className={css.reviewItem} key={id}>
                
                <p className={css.author}> <span className={css.nickName}>Nickname:</span> {author}</p> 
                <p className={css.content}>{content}</p>
                <p className={css.content}>{created_at.slice(0,10)}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
          <p className={css.notReview}>We don&apos;t  have any reviews for this movie</p>
        )}
        {error && <NotFoundPage />}
      </>
  )
}

export default MovieReviews