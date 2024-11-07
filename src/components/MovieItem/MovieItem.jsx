import { Link, useLocation } from "react-router-dom";
import css from "./MovieItem.module.css"
import noMoviePoster from "../../images/noMoviePoster.png"

const MovieItem = ({id, title, poster_path}) => {

    const location = useLocation();
    return (
        <Link to={`/movies/${id}`} state={{ from: location}} >

          <img 
            src={ poster_path 
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : noMoviePoster}   
        
            className={css.movieImg}
            alt={title} >
          </img>
        
        </Link>
    )
}

export default MovieItem















