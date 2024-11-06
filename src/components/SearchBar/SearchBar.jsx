import  { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import css from './SearchBar.module.css'

const SearchBar = ({onSubmit}) => {
    const [userValue, setUserValue] = useState("");

    const onChangeValue = (e) => {
      setUserValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userValue.trim() === "") {
          toast.error("Please enter a valid search value!", {
            duration: 2000,
            position: "top-center",
            style: {marginTop: 135, backgroundColor: "coral", color: "white"},
          });
          return;
        }  
        
        onSubmit(userValue);
        setUserValue("");

    }

    return (
      <div className={css.searchForm}>
        <Toaster/>
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
            <button className={css.btn} type="submit" >Search</button>
          </form>
      </div>
    )
}

export default SearchBar