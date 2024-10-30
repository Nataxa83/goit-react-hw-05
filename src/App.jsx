import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDatailsPage from "./pages/MovieDatailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import Navigation from "./components/Navigation/Navigation";

import { Route, Routes } from "react-router-dom"; 


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
        <Route path="/movies" element={<MovieDatailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
  );
};

export default App;
