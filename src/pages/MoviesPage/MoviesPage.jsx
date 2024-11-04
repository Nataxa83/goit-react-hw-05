import { useEffect, useState } from "react";
import { getSearchMovies } from "../../services/api";

import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

import Loader from "../../components/Loader/Loader";

import css from "./MoviesPage.module.css"
import { Outlet, useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  
// const [searchValue, setSearchValue] = useState("");
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
    <Outlet />
    {filteredMovies.length > 0 && <MovieList movies={filteredMovies} />}

    </div>
)
}


export default MoviesPage