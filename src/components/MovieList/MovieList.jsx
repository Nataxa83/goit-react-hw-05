import MovieItem from '../MovieItem/MovieItem';
import css from "./MovieList.module.css"

const MovieList = ({movies}) => {

    return (

        <ul className={css.movieList}>
            {movies.map(({id, title, poster_path})=> {
                return ( 
                    <li key={id}>
                        <div  className={css.movieItem}>
                        <MovieItem id={id} 
                                    title={title} 
                                    poster_path={poster_path}/>
                        </div>
                    </li>)
            })}
        </ul>

    )
}

export default MovieList;