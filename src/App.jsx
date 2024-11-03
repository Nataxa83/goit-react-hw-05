import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDatailsPage from "./pages/MovieDatailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

import Navigation from "./components/Navigation/Navigation";

import { Route, Routes } from "react-router-dom"; 
import MovieReviews from "./components/MovieReviews/MovieReviews";


const App = () => {
  return ( 
  <div>
    <header> 
      <Navigation />
    </header>

    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDatailsPage />} > 
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
  );
};

export default App;
