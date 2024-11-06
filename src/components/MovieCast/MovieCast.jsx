import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../../services/api";

import css from "./MovieCast.module.css";

import Loader from "../Loader/Loader";
import noCastImg from "../../images/noCastImg.png";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const MovieCast = () => {
	const { movieId } = useParams();
	const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCast = async () => {
          try {
          setLoading(true);
          const  data  = await getMovieCast(movieId);
          // throw new Error('Something went wrong');
          setMovieCast(data.cast);
    
          } catch (error) {
          setError(error.message);
          console.log(error.message);
          }
          finally {
          setLoading(false);
          }
        }
        fetchCast()
    }, [movieId])
    console.log(movieCast)

    return (
      <>
        {loading && <Loader />}

        {error != null ? 
        (<ErrorMessage error={error} />) : 
        (  
        (movieCast !== null && movieCast.length > 0 )? (
          <>
            <ul className={css.castList}>
              {movieCast.map(({ id, profile_path, name }) => (
              
              <li className={css.castItem} key={id}>
                <img
                  src={profile_path ?
                    `https://image.tmdb.org/t/p/w500${profile_path}` :
                    noCastImg}
                    alt={name}
                />
                <p>{name}</p>
              </li>
              ))}
            </ul>
          </>
        ) : (
        <p className={css.noCast}>We don&apos;t have any cast for this movie</p>
        )
        )}

      </>
    )           
  
}

export default MovieCast