import  { useState } from 'react'
import css from './SearchBar.module.css'

const SearchBar = (onSubmit) => {
    const [query, setQuery] = useState("");

    const handleChangeQuery = (e) => {
      setQuery(e.target.value);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery("");
    }

  return (
    <div className={css.searchForm}>
    <form onSubmit={handleSubmitForm} className={css.form}>
        <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            onChange={handleChangeQuery}
            className={css.input}
        />
         <button className={css.btn} type="submit" >
          Search
        </button>
    </form>
    </div>
  )
}

export default SearchBar