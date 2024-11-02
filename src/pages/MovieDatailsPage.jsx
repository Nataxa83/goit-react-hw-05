import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getMovieDetails } from "../servises/api";

import css from "./MovieDatailsPage.module.css"

import MovieItem from "../components/MovieItem/MovieItem";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "./NotFoundPage";

const MovieDatailsPage = () => {
  const [movieItem, setMovieItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams("movieId");
  const backLinkRef = useRef(location.state?.from ?? "/movies");


  useEffect(() => {
    const fetchMovieById = async () => {
try {
    setLoading(true);
    const  data  = await getMovieDetails(movieId);
    setMovieItem(data);

    

} catch (error) {
    setError(error.message);
    console.log(error.message);

}
finally {
    setLoading(false);
}
    }
    fetchMovieById()
}, [movieId])
console.log(movieItem)

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {movieItem ? (
        <div className={css.container}>
          <Link className={css.link} to={backLinkRef.current}>
        Go back
      </Link>
          <div className={css.movieInfo}> 

          <div className={css.movieItem}>
          <MovieItem
            id={movieItem.id}
            poster_path={movieItem.poster_path}
          />
          </div>
          <div>

          <h1 className={css.title}>{movieItem.title}</h1>
          <h3>Overview</h3>
          <p>{movieItem.overview}</p>
          <h3>Genres</h3>
          {movieItem.genres && movieItem.genres.map((genre) => genre.name).join(', ')}
            
          
          <h3>Prodaction countries</h3>
          {movieItem.production_countries && movieItem.production_countries.map((country) => country.name).join(', ')}
          

          <p> <span className={css.info}>Release date:</span> {movieItem.release_date}</p>
          <p> <span className={css.info}> Rating:</span> {Math.round(movieItem.vote_average*10)/10}</p>
          </div>
          </div>
        
        
          <h3> <span className={css.dopInfo}> Additional information </span></h3>
              <Link className={css.link} to="cast">Cast</Link>
              <Link className={css.link} to="reviews">Reviews</Link>
        
        
        </div>
    
        ):<NotFoundPage/>}

    </div>
  )
};

export default MovieDatailsPage