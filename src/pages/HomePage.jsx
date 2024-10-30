import { useEffect, useState } from "react"
import { getTrendingMovies } from "../servises/api";

import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

import css from "../pages/HomePage.module.css"
  
const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

useEffect(() => {
    const fetchMovies = async () => {
try {
    setLoading(true);
    const { results } = await getTrendingMovies();
    // throw new Error('Something went wrong');
    setMovies(results);

    

} catch (error) {
    setError(error.message);
    console.log(error.message);

}
finally {
    setLoading(false);
}
    }
    fetchMovies()
}, [])

return (
    <div>
        {error !== null ? <p>{error}</p> :
        <h2 className={css.listTitle}>Trending Movies Today</h2>}
        {loading && <Loader />}
        {movies.length > 0 && <MovieList array={movies} /> }
    </div>
);
}

export default HomePage