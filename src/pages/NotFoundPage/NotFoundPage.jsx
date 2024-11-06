import { Link } from "react-router-dom"
import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <p className={css.text}>Page not found</p>
      </div>
  )
}

export default NotFoundPage