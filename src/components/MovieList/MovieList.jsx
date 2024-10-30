import MovieItem from '../MovieItem/MovieItem';
import css from "./MovieList.module.css"

const MovieList = ({array}) => {

    return (

        <ul className={css.movieList}>
            {array.map((ar)=> {
                return ( 
                    <li key={ar.id}>
                        <MovieItem id={ar.id} 
                                    title={ar.title} 
                                    poster_path={ar.poster_path}/>
                    </li>)
            })}
        </ul>

    )
}

export default MovieList;