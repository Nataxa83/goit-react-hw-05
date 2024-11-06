import css from "./ErrorMessage.module.css"

const ErrorMessage = ({error}) => {
  return (
    <p className={css.errorMessage}>Oops, something went wrong: <span className={css.error}>{error}.</span> Please, try again later...</p>
  )
}

export default ErrorMessage