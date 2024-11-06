import { useEffect, useState } from "react";
import { getSearchMovies } from "../../services/api";
import { Outlet, useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";



const MoviesPage = () => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = searchValue => {
    setSearchParams({ query: searchValue });
    };

    useEffect(() => {
        const searchValue = searchParams.get("query") ?? "";
        if (!searchValue) {
            return;
        }
        const fetchSearchMovies = async () => {
            try {
            setLoading(true);
            const  { results }  = await getSearchMovies(searchValue);
            setFilteredMovies(results);   
            
            if (results.length === 0) {
                toast.error("No movies found", {
                    duration: 2000,
                    position: "top-center",
                    style: { marginTop: 135, backgroundColor: "coral", color: "white" }
                });
            }
            } catch (error) {
            setError(error.message);
            console.log(error.message);
            }
            finally {
            setLoading(false);
            }
        }
        fetchSearchMovies(searchValue);
    }, [searchParams])
        console.log(filteredMovies);
        return (
            <div>
                <SearchBar onSubmit={onSubmit} />
                <Toaster/>

                {error !== null ? 
                (<ErrorMessage error={error} />) :
                    (<div>
                        <Outlet />
                        {loading && <Loader />}
                        {filteredMovies.length > 0 && <MovieList movies={filteredMovies} />}
                    </div>
                )}
                
            </div>
        )
}


export default MoviesPage