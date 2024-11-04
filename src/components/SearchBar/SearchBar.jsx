import  { useState } from 'react'
import css from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {
    const [userValue, setUserValue] = useState("");

    const onChangeValue = (e) => {
      setUserValue(e.target.value.trim());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userValue);
        setUserValue("");
    }

  return (
    <div className={css.searchForm}>
    <form onSubmit={handleSubmit} className={css.form}>
        <input
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={userValue}
            onChange={onChangeValue}
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