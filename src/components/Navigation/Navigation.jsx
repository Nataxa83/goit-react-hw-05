import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from "./Navigation.module.css"


const isActiveClasses = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
const Navigation = () => {
  
    return (
        <header>
            <div className={css.container}>
                <nav className={css.nav}>
                    <NavLink to="/" className={isActiveClasses}>Home</NavLink>
                    <NavLink to="/movies" className={isActiveClasses}>Movies</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navigation