import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getMovieDetails } from "../servises/api";

import MovieItem from "../components/MovieItem/MovieItem";
import Loader from "../components/Loader/Loader";
import NotFoundPage from "./NotFoundPage";

const MovieDatailsPage = () => {
  const [movieItem, setMovieItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams("movieId");


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
        <div>
          <MovieItem
            id={movieItem.id}
            poster_path={movieItem.poster_path}
          />
          <h1>{movieItem.title}</h1>
          <p>User score: {Math.round(movieItem.vote_average*10)/10}</p>
          <h2>Overview</h2>
          <p>{movieItem.overview}</p>
          <h2>Genres</h2>
          {movieItem.genres && movieItem.genres.map((genre) => genre.name).join(', ')}
            
          
          <h2>Prodaction countries</h2>
          

          <h3>Release date: {movieItem.release_date}</h3>
        
        
          <h2>Additional information</h2>
              <Link to="cast">Cast</Link>
              <Link to="reviews">Reviews</Link>
        
        
        </div>
    
        ):<NotFoundPage/>}

    </div>
  )
};

export default MovieDatailsPage