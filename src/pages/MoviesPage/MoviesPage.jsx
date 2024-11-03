import SearchBar from "../../components/SearchBar/SearchBar";


const MoviesPage = () => {
  

    
return (
<SearchBar onSubmit={query => console.log(query)} />
);
}


export default MoviesPage