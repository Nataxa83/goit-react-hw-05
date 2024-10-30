import { useEffect, useState } from "react"
import { getTrendingMovies } from "../servises/api";

  
const HomePage = () => {

    const [movies, setMovies] = useState([]);

useEffect(() => {
    const fetchMovies = async () => {
try {
    const { data } = await getTrendingMovies();
    console.log(data);
    setMovies(data.results);
} catch (error) {
    console.log(error);
}
    }
    fetchMovies()
}, [])
return (
<p>Trending Movies Today</p>
);
}

export default HomePage