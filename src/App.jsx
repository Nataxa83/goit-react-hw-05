import { Route, Routes } from "react-router-dom"; 
import { lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader";

const HomePage = lazy(()=> import("./pages/HomePage/HomePage"));
const MoviesPage =lazy(()=>import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage=lazy(()=>import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage=lazy(()=>import("./pages/NotFoundPage/NotFoundPage"));

const MovieCast =lazy(()=>import("./components/MovieCast/MovieCast"));
const MovieReviews=lazy(()=>import("./components/MovieReviews/MovieReviews"));
const Navigation =lazy(()=>import("./components/Navigation/Navigation"));



const App = () => {
  return ( 
  <div>
    <header> 
      <Navigation />
    </header>

    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} > 
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  </div>
  );
};

export default App;
